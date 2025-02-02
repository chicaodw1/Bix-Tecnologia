"use client";

import { Box, Text } from "@chakra-ui/react";
import { Chart, ChartData, registerables, CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(...registerables, CategoryScale);

interface BarChartProps {
  barChartData: ChartData<"bar">;
}

export default function BarChart({ barChartData }: BarChartProps) {
  return (
    <Box p={4} bg="gray.100" borderRadius="md" boxShadow="md">
      <Text fontSize="lg" fontWeight="bold" mb={2}>
        Receitas vs. Despesas
      </Text>
      <Bar data={barChartData} />
    </Box>
  );
}
