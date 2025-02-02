"use client";

import {
  Heading,
  Stack,
  TableHeader,
  TableRow,
  TableColumnHeader,
  TableBody,
  TableCell,
  TableRoot,
  Table,
} from "@chakra-ui/react";
import { useState } from "react";
import { PaginationRoot } from "../Pagination";

interface Transaction {
  date: string;
  amount: number;
  transaction_type: string;
  account: string;
  industry: string;
  state: string;
}

interface TransactionListProps {
  transactions: Transaction[];
}

export default function TransactionList({
  transactions,
}: TransactionListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const paginatedTransactions = transactions.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <Stack width="full" gap="5">
      <Heading size="xl">Transações</Heading>
      <Table.ScrollArea>
        <TableRoot size="sm" variant="outline" overflowX="auto" striped>
          <TableHeader>
            <TableRow>
              <TableColumnHeader>Data</TableColumnHeader>
              <TableColumnHeader>Conta</TableColumnHeader>
              <TableColumnHeader>Indústria</TableColumnHeader>
              <TableColumnHeader>Estado</TableColumnHeader>
              <TableColumnHeader>Tipo</TableColumnHeader>
              <TableColumnHeader textAlign="end">Valor</TableColumnHeader>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedTransactions.map((t, index) => (
              <TableRow key={`${t.date}-${index}`}>
                <TableCell>{t.date}</TableCell>
                <TableCell>{t.account}</TableCell>
                <TableCell>{t.industry}</TableCell>
                <TableCell>{t.state}</TableCell>
                <TableCell>
                  {t.transaction_type === "deposit" ? "Receita" : "Despesa"}
                </TableCell>
                <TableCell
                  textAlign="end"
                  fontWeight="bold"
                  color={
                    t.transaction_type === "deposit" ? "green.500" : "red.500"
                  }>
                  R$ {Number(t.amount).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableRoot>
      </Table.ScrollArea>
      <PaginationRoot
        count={transactions.length}
        pageSize={pageSize}
        page={currentPage}
        onPageChange={setCurrentPage}
      />
    </Stack>
  );
}
