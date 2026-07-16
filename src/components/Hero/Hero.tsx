"use client";

import { Box, Button, Grid, Typography } from "@mui/material";
import OrganicShape_1 from "../shapes/OrganicShape_1";
import OrganicShape_2 from "../shapes/OrganicShape_2";

export default function Hero() {
  return (
    <Grid
      container
      sx={{
        minHeight: "80vh",
        alignItems: "center",
        bgcolor: "background.default",
        width: "100%",
        overflow: "hidden",
        flexDirection: "column",
        position: "relative",
        justifyContent: "center",
        rowGap: { xs: 3, md: 5 },
        pt: { xs: 8, md: 0 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "-5%", md: "-30%" },
          right: { xs: "-15%", md: "-10%" },
          width: { xs: "50%", md: "35%" },
          minWidth: 120,
        }}
      >
        <OrganicShape_1 />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: { xs: "-20%", md: "-80%" },
          left: { xs: "-15%", md: "-10%" },
          width: { xs: "50%", md: "35%" },
          minWidth: 120,
        }}
      >
        <OrganicShape_2 />
      </Box>
      <Grid sx={{ textAlign: { xs: "center", md: "left" } }}>
        <Typography
          variant="h1"
          sx={{
            color: (theme) => theme.palette.primary.main,
            fontWeight: 700,
            lineHeight: 1.05,
            fontSize: { xs: "3.5rem", sm: "6rem", md: "10rem" },
          }}
        >
          Lara Cook.
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: "primary.main",
            fontWeight: 900,
            textTransform: "uppercase",
            fontSize: { xs: "1rem", md: "1.5rem" },
          }}
        >
          Software Engineer
        </Typography>

        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "0.85rem", md: "1rem" } }}
        >
          BUILDING SCALABLE ENTERPRISE SOFTWARE WITH REACT & .NET
        </Typography>
      </Grid>
      <Grid sx={{ textAlign: { xs: "center", md: "left" } }}>
        <Button
          variant="contained"
          sx={{
            bgcolor: (theme) => theme.palette.accent.main,
            fontWeight: 700,
            px: { xs: 4, md: 6 },
            py: { xs: 1.2, md: 1.8 },
            borderRadius: 2,
            boxShadow: "none",
          }}
        >
          See Projects
        </Button>
      </Grid>
    </Grid>
  );
}
