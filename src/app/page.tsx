"use client";

import Image from "next/image";
import { Box, Typography, Button } from "@mui/material";
import Hero from "@/components/Hero";

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
      <Hero />
      <Box
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          width: "100%",
          maxWidth: "lg",
          alignItems: "center",
          justifyContent: "space-between",
          py: 16,
          px: 8,
          bgcolor: "background.paper",
          "@media (min-width: 640px)": {
            alignItems: "flex-start",
          },
        }}
      >
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
            textAlign: "center",
            "@media (min-width: 640px)": {
              alignItems: "flex-start",
              textAlign: "left",
            },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              maxWidth: "xs",
              fontWeight: 600,
              lineHeight: 1.3,
              letterSpacing: "-0.02em",
              color: "text.primary",
            }}
          >
            To get started, edit the page.tsx file.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: "md",
              lineHeight: 1.75,
              color: "text.secondary",
            }}
          >
            Looking for a starting point or more instructions? Head over to{" "}
            <Box
              component="a"
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              sx={{
                fontWeight: 500,
                color: "text.primary",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Templates
            </Box>{" "}
            or the{" "}
            <Box
              component="a"
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              sx={{
                fontWeight: 500,
                color: "text.primary",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Learning
            </Box>{" "}
            center.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            "@media (min-width: 640px)": {
              flexDirection: "row",
            },
          }}
        >
          <Button
            variant="contained"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              height: 48,
              width: "100%",
              borderRadius: "24px",
              textTransform: "none",
              fontWeight: 500,
              "@media (min-width: 768px)": {
                width: 158,
              },
            }}
          >
            <Image
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
              style={{ marginRight: 8 }}
            />
            Deploy Now
          </Button>
          <Button
            variant="outlined"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              height: 48,
              width: "100%",
              borderRadius: "24px",
              textTransform: "none",
              fontWeight: 500,
              "@media (min-width: 768px)": {
                width: 158,
              },
            }}
          >
            Documentation
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
