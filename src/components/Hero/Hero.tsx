"use client";

import { Box, Button, Stack, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: { xs: "70vh", md: "78vh" },
        alignItems: "center",
        bgcolor: "background.default",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Stack
        spacing={4}
        sx={{
          width: "100%",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            color: "primary.main",
          }}
        >
          Lara Cook
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: 620,
            color: "text.secondary",
            lineHeight: 1.6,
            fontWeight: 400,
          }}
        >
          Software Engineer 
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: 620,
            color: "text.secondary",
            lineHeight: 1.7,
          }}
        >
          BUILDING SCALABLE ENTERPRISE SOFTWARE WITH REACT & .NET
        </Typography>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Button
            variant="contained"
            size="large"
            sx={{
              borderRadius: 999,
              px: 4,
              py: 1.5,
              textTransform: "none",
              fontWeight: 700,
              bgcolor: "accent.main",
              "&:hover": {
                bgcolor: "accent.dark",
              },
            }}
          >
            See Projects
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
