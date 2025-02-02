"use client";

import { HStack, Button, Text } from "@chakra-ui/react";

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
    <HStack wrap="wrap" justify="center" mt={4}>
      <PaginationPrevTrigger
        onClick={() => onPageChange(Math.max(1, page - 1))}
        disabled={page === 1}
      />
      <Text>
        Página {page} de {totalPages}
      </Text>
      <PaginationNextTrigger
        onClick={() => onPageChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
      />
    </HStack>
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
    <Button onClick={onClick} disabled={disabled}>
      Anterior
    </Button>
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
    <Button onClick={onClick} disabled={disabled}>
      Próximo
    </Button>
  );
}
