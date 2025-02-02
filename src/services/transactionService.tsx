import {
  ProcessedTransactionModel,
  TransactionModel,
} from "@/models/transactionModel";
import { cache } from "react";

export const fetchTransactions = cache(
  async (): Promise<ProcessedTransactionModel[]> => {
    try {
      const response = await fetch("/transactions.json", {
        next: { revalidate: 86400 },
      });

      if (!response.ok) {
        throw new Error("Erro ao carregar transações");
      }

      const transactions: TransactionModel[] = await response.json();

      return transactions.map((transaction) => ({
        ...transaction,
        date: new Intl.DateTimeFormat("pt-BR").format(
          new Date(Number(transaction.date))
        ),
        amount: parseFloat(transaction.amount) / 100,
      }));
    } catch (error) {
      console.error("Erro ao carregar transações:", error);
      return [];
    }
  }
);
