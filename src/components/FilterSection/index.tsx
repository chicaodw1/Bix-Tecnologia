"use client";

import { Stack, Flex, Input, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SelectCustom from "../Select";

interface FilterProps {
  filters: {
    date: string;
    account: string;
    industry: string;
    state: string;
    transactionType: string;
    startDate: string;
    endDate: string;
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      date: string;
      account: string;
      industry: string;
      state: string;
      transactionType: string;
      startDate: string;
      endDate: string;
    }>
  >;
}

export default function FilterSection({ filters, setFilters }: FilterProps) {
  const [tempFilters, setTempFilters] = useState(filters);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined") {
      const storedFilters = {
        date: localStorage.getItem("filter_date") || "",
        account: localStorage.getItem("filter_account") || "",
        industry: localStorage.getItem("filter_industry") || "",
        state: localStorage.getItem("filter_state") || "",
        transactionType: localStorage.getItem("filter_transactionType") || "",
        startDate: localStorage.getItem("filter_startDate") || "",
        endDate: localStorage.getItem("filter_endDate") || "",
      };

      setFilters(storedFilters);
      setTempFilters(storedFilters);
    }
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setTempFilters((prev) => ({ ...prev, [field]: value }));
  };

  const applyFilters = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("filter_startDate", tempFilters.startDate);
      localStorage.setItem("filter_endDate", tempFilters.endDate);
      localStorage.setItem("filter_date", tempFilters.date);
      localStorage.setItem("filter_account", tempFilters.account);
      localStorage.setItem("filter_industry", tempFilters.industry);
      localStorage.setItem("filter_state", tempFilters.state);
      localStorage.setItem(
        "filter_transactionType",
        tempFilters.transactionType
      );
    }

    setFilters(tempFilters);
  };

  const clearFilters = () => {
    localStorage.removeItem("filter_startDate");
    localStorage.removeItem("filter_endDate");
    localStorage.removeItem("filter_date");
    localStorage.removeItem("filter_account");
    localStorage.removeItem("filter_industry");
    localStorage.removeItem("filter_state");
    localStorage.removeItem("filter_transactionType");

    const emptyFilters = {
      date: "",
      account: "",
      industry: "",
      state: "",
      transactionType: "",
      startDate: "",
      endDate: "",
    };
    setFilters(emptyFilters);
    setTempFilters(emptyFilters);
  };

  if (!isClient) return null;

  return (
    <Stack mb={6} justifyContent="center">
      <Flex direction={{ base: "column", md: "row" }} gap={4} width="100%">
        <Input
          type="date"
          placeholder="Data Inicial"
          value={tempFilters.startDate}
          onChange={(e) => handleInputChange("startDate", e.target.value)}
          height="48px"
          border="1px solid #dcdcdc"
          borderRadius="8px"
        />
        <Input
          type="date"
          placeholder="Data Final"
          value={tempFilters.endDate}
          onChange={(e) => handleInputChange("endDate", e.target.value)}
          height="48px"
          border="1px solid #dcdcdc"
          borderRadius="8px"
        />
        <SelectCustom
          placeholder="Estado"
          value={tempFilters.state}
          onChange={(e) => handleInputChange("state", e.target.value)}>
          <option value="TX">Texas (TX)</option>
          <option value="MN">Minnesota (MN)</option>
        </SelectCustom>
      </Flex>

      <Flex direction={{ base: "column", md: "row" }} gap={4} width="100%">
        <Input
          placeholder="Indústria"
          value={tempFilters.industry}
          onChange={(e) => handleInputChange("industry", e.target.value)}
          height="48px"
          border="1px solid #dcdcdc"
          borderRadius="8px"
        />
        <Input
          placeholder="Conta"
          value={tempFilters.account}
          onChange={(e) => handleInputChange("account", e.target.value)}
          height="48px"
          border="1px solid #dcdcdc"
          borderRadius="8px"
        />

        <SelectCustom
          placeholder="Tipo de Transação"
          value={tempFilters.transactionType}
          onChange={(e) => handleInputChange("transactionType", e.target.value)}
          icon={undefined}>
          <option value="deposit">Receita (Depósito)</option>
          <option value="withdraw">Despesa (Retirada)</option>
        </SelectCustom>
      </Flex>

      <Flex
        direction={{ base: "column", md: "row" }}
        gap={3}
        justifyContent="flex-end"
        mb={8}>
        <Button
          height="48px"
          px={6}
          borderRadius="8px"
          fontWeight="bold"
          onClick={applyFilters}>
          Aplicar Filtros
        </Button>
        <Button
          height="48px"
          px={6}
          borderRadius="8px"
          fontWeight="bold"
          onClick={clearFilters}>
          Limpar Filtros
        </Button>
      </Flex>
    </Stack>
  );
}
