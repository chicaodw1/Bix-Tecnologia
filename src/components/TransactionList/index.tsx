"use client";
import { Stack } from "@chakra-ui/react";
import { useState } from "react";
import { PaginationRoot } from "../Pagination";
import {
  StyledHeading,
  StyledTableBody,
  StyledTableCell,
  StyledTableColumnHeader,
  StyledTableHeader,
  StyledTableRoot,
  StyledTableRow,
  StyledTableScrollArea,
} from "../Table/styled";

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
  const pageSize = 15;

  const paginatedTransactions = transactions.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <Stack width="full" gap="5">
      <StyledHeading>Transações</StyledHeading>
      <StyledTableScrollArea>
        <StyledTableRoot size="sm" variant="outline" overflowX="auto" striped>
          <StyledTableHeader>
            <StyledTableRow>
              <StyledTableColumnHeader>Data</StyledTableColumnHeader>
              <StyledTableColumnHeader>Conta</StyledTableColumnHeader>
              <StyledTableColumnHeader>Indústria</StyledTableColumnHeader>
              <StyledTableColumnHeader>Estado</StyledTableColumnHeader>
              <StyledTableColumnHeader>Tipo</StyledTableColumnHeader>
              <StyledTableColumnHeader textAlign="end">
                Valor
              </StyledTableColumnHeader>
            </StyledTableRow>
          </StyledTableHeader>
          <StyledTableBody>
            {paginatedTransactions.map((t, index) => (
              <StyledTableRow key={`${t.date}-${index}`}>
                <StyledTableCell>{t.date}</StyledTableCell>
                <StyledTableCell>{t.account}</StyledTableCell>
                <StyledTableCell>{t.industry}</StyledTableCell>
                <StyledTableCell>{t.state}</StyledTableCell>
                <StyledTableCell>
                  {t.transaction_type === "deposit" ? "Receita" : "Despesa"}
                </StyledTableCell>
                <StyledTableCell
                  textAlign="end"
                  fontWeight="bold"
                  color={
                    t.transaction_type === "deposit" ? "green.500" : "red.500"
                  }>
                  R$ {Number(t.amount).toFixed(2)}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </StyledTableBody>
        </StyledTableRoot>
      </StyledTableScrollArea>
      <PaginationRoot
        count={transactions.length}
        pageSize={pageSize}
        page={currentPage}
        onPageChange={setCurrentPage}
      />
    </Stack>
  );
}
