import { Box, Text } from "@chakra-ui/react";

interface SummaryProps {
  title: string;
  value: string | number;
  color: string;
}
export default function SummaryCard({ title, value, color }: SummaryProps) {
  return (
    <Box
      p={4}
      bg={color}
      borderRadius="md"
      boxShadow="md"
      color="white"
      textAlign="center">
      <Text fontSize="lg" fontWeight="bold">
        {title}
      </Text>
      <Text fontSize="2xl">{value}</Text>
    </Box>
  );
}
