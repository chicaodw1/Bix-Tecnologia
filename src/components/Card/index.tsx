"use client";
import { Box, Heading, Text } from "@chakra-ui/react";

interface CardProps {
  title: string;
  value: string;
}
export default function Card({ title, value }: CardProps) {
  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={2} fontSize="2xl" fontWeight="bold">
        {value}
      </Text>
    </Box>
  );
}
