"use client";

import Image from "next/image";
import { Box, Typography, Button } from "@mui/material";
import AppBar from "@/components/AppBar/AppBar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "grey.50",
      }}
    >
      <AppBar />
      <Hero />
      <About />
    </Box>
  );
}
