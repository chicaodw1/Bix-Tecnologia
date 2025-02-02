"use client";
import { useEffect } from "react";
import { configureAmplify } from "@/aws-exports";

export default function AmplifyProvider() {
  useEffect(() => {
    configureAmplify();
  }, []);

  return null;
}
