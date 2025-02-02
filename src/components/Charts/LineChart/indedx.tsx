"use client";

import { Box, Text } from "@chakra-ui/react";
import { ChartData } from "chart.js";
import { Line } from "react-chartjs-2";

interface LineChartProps {
  lineChartData: ChartData<"line">;
}

export default function LineChart({ lineChartData }: LineChartProps) {
  return (
    <Box p={4} bg="gray.100" borderRadius="md" boxShadow="md">
      <Text fontSize="lg" fontWeight="bold" mb={2}>
        Evolução do Saldo
      </Text>
      <Line data={lineChartData} />
    </Box>
  );
}
