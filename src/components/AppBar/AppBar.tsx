"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import FlowerShape from "../shapes/FlowerShape";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function AppBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <>
      <MuiAppBar
        position="fixed"
        sx={{
          bgcolor: scrolled ? "background.default" : "transparent",
          boxShadow: "none",
          transition: "background-color 0.3s ease",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            maxWidth: "lg",
            width: "100%",
            mx: "auto",
            px: { xs: 2, md: 8 },
            minHeight: { xs: 56, md: 64 },
          }}
        >
          <Box component="a" href="#home">
            <FlowerShape style={{ height: 30 }} />
          </Box>

          {isMobile ? (
            <IconButton
              onClick={() => setMobileOpen(true)}
              sx={{ color: "primary.main" }}
              aria-label="Open menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", gap: 3 }}>
              {navLinks.map((link) => (
                <Button
                  key={link.label}
                  href={link.href}
                  variant="text"
                  sx={{
                    color: "primary.main",
                    fontWeight: 900,
                    letterSpacing: "0em",
                    "&:hover": {
                      bgcolor: "transparent",
                    },
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </MuiAppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        slotProps={{
          paper: {
            sx: {
              bgcolor: "background.default",
              width: 240,
              pt: 3,
            },
          },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, px: 2 }}>
          {navLinks.map((link) => (
            <Button
              key={link.label}
              href={link.href}
              onClick={handleNavClick}
              variant="text"
              sx={{
                color: "primary.main",
                fontWeight: 900,
                justifyContent: "flex-start",
                "&:hover": {
                  bgcolor: "transparent",
                },
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>
      </Drawer>
    </>
  );
}
