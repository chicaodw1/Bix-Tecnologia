"use client";

import { SimpleGrid } from "@chakra-ui/react";
import SummaryCard from "../SummaryCard";

interface SummaryProps {
  saldoTotal: number;
  totalReceitas: number;
  totalDespesas: number;
  transacoesPendentes: number;
}

export default function SummaryCards({
  saldoTotal,
  totalReceitas,
  totalDespesas,
  transacoesPendentes,
}: SummaryProps) {
  return (
    <SimpleGrid columns={{ base: 1, md: 4 }} mb={6} gap={"20px"}>
      <SummaryCard
        title="Saldo Total"
        value={`R$ ${saldoTotal.toFixed(2)}`}
        color={saldoTotal < 0 ? "red.600" : "green.400"}
      />
      <SummaryCard
        title="Receitas"
        value={`R$ ${totalReceitas.toFixed(2)}`}
        color="blue.400"
      />
      <SummaryCard
        title="Despesas"
        value={`R$ ${totalDespesas.toFixed(2)}`}
        color="red.400"
      />
      <SummaryCard
        title="Transações Pendentes"
        value={transacoesPendentes}
        color="yellow.400"
      />
    </SimpleGrid>
  );
}
