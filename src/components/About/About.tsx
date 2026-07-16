"use client";

import { useEffect, useState } from "react";
import FlowerShape from "@/assets/svgs/FlowerShape";
import OrganicShape_2 from "@/assets/svgs/OrganicShape_2";
import Underline from "@/assets/svgs/Underline";
import { Box, Grid, Typography } from "@mui/material";

export default function About() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Grid
      container
      component="section"
      id="about"
      sx={{
        minHeight: { xs: "auto", md: "60vh" },
        width: "100%",
        bgcolor: "background.paper",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        py: { xs: 10, md: 0 },
        px: { xs: 4, md: 8 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "-20%", md: "-100%" },
          right: { xs: "-15%", md: "-19%" },
          width: { xs: "50%", md: "35%" },
          minWidth: 120,
          transform: `translate(${-scrollY * 0.04}px, ${scrollY * 0.06}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <OrganicShape_2 />
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "-5%", md: "45%" },
          right: { xs: "-15%", md: "-25%" },
          width: { xs: "50%", md: "35%" },
          minWidth: 120,
          transform: `translate(${-scrollY * 0.04}px, ${scrollY * 0.08}px) scale(${1 + scrollY * 0.0008}) rotate(${-scrollY * 0.1}deg)`,
          transition: "transform 0.1s ease-out",
          transformOrigin: "center bottom",
        }}
      >
        <FlowerShape style={{ width: 140 }} />
      </Box>
      <Grid size={{ xs: 12, md: 8 }}>
        <Typography
          variant="h2"
          sx={{
            color: "primary.main",
            fontSize: { xs: "2.5rem", md: "3.75rem" },
          }}
        >
          About Me
        </Typography>
        <Underline
          style={{
            width: 50,
            marginBottom: 20,
          }}
        />
        <Typography
          variant="body2"
          sx={{
            textAlign: "left",
            fontSize: { xs: "0.875rem", md: "1rem" },
            lineHeight: { xs: 1.6, md: 1.75 },
          }}
        >
          I&apos;m a full stack developer and an advocate of lifelong learning.
          I love to be immersed in environments where feedback is valued, and
          there are opportunities to expand and improve my skillset.
          <br />
          <br />
          I have a strong love for this industry as a mindset of curiosity and
          creative problem-solving are essential due to the constant evolving
          nature of technology and software.
          <br />
          <br />
          Upskilling and contributing meaningfully to projects I work on is
          something I am deeply passionate about, as well as taking ownership of
          work that I can be genuinely proud of.
          <br />
          <br />
          As I grow in my career, I look to continually refine my technical
          understanding and stay true to my love of learning.
        </Typography>
      </Grid>
    </Grid>
  );
}
