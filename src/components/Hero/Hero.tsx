"use client";

import { Box, Button, Stack, Typography } from "@mui/material";

type HeroProps = {
  title?: string;
  subtitle?: string;
  primaryActionLabel?: string;
  primaryActionHref?: string;
  secondaryActionLabel?: string;
  secondaryActionHref?: string;
};

export default function Hero({
  title = "Building thoughtful AI products and web experiences.",
  subtitle =
    "I turn complex ideas into polished, practical interfaces with a focus on clarity, speed, and user trust.",
  primaryActionLabel = "View Projects",
  primaryActionHref = "#projects",
  secondaryActionLabel = "Get in Touch",
  secondaryActionHref = "#contact",
}: HeroProps) {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        minHeight: { xs: "70vh", md: "78vh" },
        alignItems: "center",
        px: { xs: 3, sm: 6, md: 10 },
        py: { xs: 10, md: 14 },
        bgcolor: "background.default",
      }}
    >
      <Stack
        spacing={4}
        sx={{
          width: "100%",
          maxWidth: 900,
        }}
      >
        <Typography
          component="h1"
          variant="h2"
          sx={{
            maxWidth: 760,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            fontSize: { xs: "2.75rem", sm: "4rem", md: "5.25rem" },
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            maxWidth: 620,
            color: "text.secondary",
            lineHeight: 1.7,
            fontWeight: 400,
          }}
        >
          {subtitle}
        </Typography>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Button
            variant="contained"
            size="large"
            href={primaryActionHref}
            sx={{
              borderRadius: 999,
              px: 4,
              py: 1.5,
              textTransform: "none",
              fontWeight: 700,
            }}
          >
            {primaryActionLabel}
          </Button>
          <Button
            variant="outlined"
            size="large"
            href={secondaryActionHref}
            sx={{
              borderRadius: 999,
              px: 4,
              py: 1.5,
              textTransform: "none",
              fontWeight: 700,
            }}
          >
            {secondaryActionLabel}
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
