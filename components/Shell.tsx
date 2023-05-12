"use client";
import { AppShell } from "@mantine/core";
import { ReactNode } from "react";
import NavbarComp from "./Navbar";

interface ShellProps {
  children: ReactNode;
}

export default function Shell({ children }: ShellProps) {
  return (
    <AppShell padding="md" navbar={<NavbarComp />}>
      {children}
    </AppShell>
  );
}
