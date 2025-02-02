"use client";

import { useEffect, useMemo, useState } from "react";
import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { fetchTransactions } from "@/services/transactionService";
import { ProcessedTransactionModel } from "@/models/transactionModel";
import FilterSection from "@/components/FilterSection";
import SummaryCards from "@/components/Summary/SumaryCards";
import BarChart from "@/components/Charts/BarChat";
import LineChart from "@/components/Charts/LineChart/indedx";
import TransactionList from "@/components/TransactionList";

interface DashboardProps {
  isOpen: boolean;
}

export default function Dashboard({ isOpen }: DashboardProps) {
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState<ProcessedTransactionModel[]>(
    []
  );
  const [filters, setFilters] = useState({
    date: "",
    account: "",
    industry: "",
    state: "",
    transactionType: "",
    startDate: "",
    endDate: "",
  });

  const filteredTransactions = useMemo(() => {
    return transactions.filter((t) => {
      const [day, month, year] = t.date.split("/");
      const transactionDate = new Date(`${year}-${month}-${day}`);

      const startDate = filters.startDate ? new Date(filters.startDate) : null;
      const endDate = filters.endDate ? new Date(filters.endDate) : null;

      return (
        (!startDate || transactionDate >= startDate) &&
        (!endDate || transactionDate <= endDate) &&
        (!filters.account ||
          t.account.toLowerCase().includes(filters.account.toLowerCase())) &&
        (!filters.industry ||
          t.industry.toLowerCase().includes(filters.industry.toLowerCase())) &&
        (!filters.state ||
          t.state.toLowerCase() === filters.state.toLowerCase()) &&
        (!filters.transactionType ||
          t.transaction_type === filters.transactionType)
      );
    });
  }, [filters, transactions]);

  const summaryData = useMemo(() => {
    const totalReceitas = filteredTransactions
      .filter((t) => t.transaction_type === "deposit")
      .reduce((acc, t) => acc + t.amount, 0);

    const totalDespesas = filteredTransactions
      .filter((t) => t.transaction_type === "withdraw")
      .reduce((acc, t) => acc + t.amount, 0);

    return {
      saldoTotal: totalReceitas - totalDespesas,
      totalReceitas,
      totalDespesas,
      transacoesPendentes: filteredTransactions.length,
    };
  }, [filteredTransactions]);

  const chartData = useMemo(() => {
    const groupedByDate = filteredTransactions.reduce((acc, t) => {
      const formattedDate = new Date(t.date).toLocaleDateString("pt-BR", {
        timeZone: "UTC",
      });

      if (!acc[formattedDate]) {
        acc[formattedDate] = { deposits: 0, withdraws: 0 };
      }

      if (t.transaction_type === "deposit") {
        acc[formattedDate].deposits += t.amount;
      } else {
        acc[formattedDate].withdraws += t.amount;
      }

      return acc;
    }, {} as Record<string, { deposits: number; withdraws: number }>);

    const dates = Object.keys(groupedByDate);
    const deposits = dates.map((date) => groupedByDate[date].deposits);
    const withdraws = dates.map((date) => groupedByDate[date].withdraws);

    return { dates, deposits, withdraws };
  }, [filteredTransactions]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedFilters = {
        startDate: localStorage.getItem("filter_startDate") || "",
        endDate: localStorage.getItem("filter_endDate") || "",
        date: localStorage.getItem("filter_date") || "",
        account: localStorage.getItem("filter_account") || "",
        industry: localStorage.getItem("filter_industry") || "",
        state: localStorage.getItem("filter_state") || "",
        transactionType: localStorage.getItem("filter_transactionType") || "",
      };

      setFilters(storedFilters);
    }
  }, []);

  useEffect(() => {
    async function loadTransactions() {
      try {
        setLoading(true);
        const data = await fetchTransactions();
        setTransactions(data);
      } catch (error) {
        console.error("Erro ao carregar transações", error);
      } finally {
        setLoading(false);
      }
    }

    if (typeof window !== "undefined") {
      loadTransactions();
    }
  }, []);

  const barChartData = {
    labels: chartData.dates,
    datasets: [
      {
        label: "Receitas",
        data: chartData.deposits,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
      {
        label: "Despesas",
        data: chartData.withdraws,
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };

  const lineChartData = {
    labels: chartData.dates,
    datasets: [
      {
        label: "Saldo Acumulado",
        data: chartData.dates.map(
          (_, i) =>
            chartData.deposits.slice(0, i + 1).reduce((a, b) => a + b, 0) -
            chartData.withdraws.slice(0, i + 1).reduce((a, b) => a + b, 0)
        ),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };
  return (
    <Box
      ml={isOpen ? "250px" : "70px"}
      p={10}
      pt="100px"
      transition="margin-left 0.3s ease-in-out">
      {loading ? (
        <Box
          textAlign="center"
          display="flex"
          flexDirection="column"
          alignItems="center">
          <Spinner size="xl" color="blue.500" width="80px" height="80px" />
          <Text mt={4} fontSize="lg" fontWeight="bold">
            Carregando transações...
          </Text>
        </Box>
      ) : (
        <>
          <FilterSection filters={filters} setFilters={setFilters} />
          <SummaryCards {...summaryData} />

          <SimpleGrid columns={{ base: 1, md: 2 }} mb={6} gap={"20px"}>
            <BarChart barChartData={barChartData} />
            <LineChart lineChartData={lineChartData} />
          </SimpleGrid>

          <TransactionList transactions={filteredTransactions} />
        </>
      )}
    </Box>
  );
}
