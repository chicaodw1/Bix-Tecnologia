"use client";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import {
  PaginationContainer,
  PaginationText,
  PaginationButton,
} from "./styled";

interface PaginationProps {
  count: number;
  pageSize: number;
  page: number;
  onPageChange: (page: number) => void;
}

export function PaginationRoot({
  count,
  pageSize,
  page,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(count / pageSize);

  return (
    <PaginationContainer>
      <PaginationPrevTrigger
        onClick={() => onPageChange(Math.max(1, page - 1))}
        disabled={page === 1}
      />
      <PaginationText>
        Página {page} de {totalPages}
      </PaginationText>
      <PaginationNextTrigger
        onClick={() => onPageChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
      />
    </PaginationContainer>
  );
}

export function PaginationPrevTrigger({
  onClick,
  disabled,
}: {
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <PaginationButton onClick={onClick} disabled={disabled}>
      <AiOutlineLeft />
    </PaginationButton>
  );
}

export function PaginationNextTrigger({
  onClick,
  disabled,
}: {
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <PaginationButton onClick={onClick} disabled={disabled}>
      <AiOutlineRight />
    </PaginationButton>
  );
}
