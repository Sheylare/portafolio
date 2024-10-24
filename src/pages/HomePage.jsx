import React from "react";
import heroImg from "../assets/images/hero-img.jpeg";
import { Button, Typography, Box } from "@mui/material";
import { keyframes } from "@mui/system";
import { Link } from "react-router-dom";
import StyledButton from "../components/StyledButton";

// Animación 
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

function HomePage() {
  return (
    <Box
      className="hero-section"
      sx={{
        position: "relative", 
        height: "100vh", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", 
        alignItems: "flex-start", 
        padding: { xs: "20px", md: "40px" },
        backgroundImage: `url(${heroImg})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat", 
        color: "#E5E5CB", 
        textAlign: "left",
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{
          animation: `${fadeIn} 2s ease-out`,
          color: "black",
          mb: "20px",
          textAlign: "center",
          fontSize: { xs: "4.6rem", md: "8.5rem" },
          fontWeight: { xs: "425" },
        }}
      >
        Sheyla Arellano
      </Typography>

      <Typography
        variant="h4"
        component="h4"
        sx={{
          width: { xs: "150px", md: "260px" },
          color: "#E5E5CB",
          mt: "20px",
          mb: "18px",
          fontSize: { xs: "0.8rem", md: "1rem" },
          fontWeight: { xs: "400" },
        }}
      >
        Welcome to my portfolio! I'm a web developer from Ecuador, now based in
        Barcelona. Take a look at my work and discover how I can help bring your
        digital vision to life!
      </Typography>

      <StyledButton
        component={Link}
        to="/projects"
        sx={{
          width: { xs: "100%", md: "300px" },
          color: "#E5E5CB",
          border: "1px solid white",
          mt: 2,
          transition: "all 0.3s ease",
          ":hover": {
            backgroundColor: "#E5E5CB",
            color: "#000",
          },
        }}
      >
        Explore Projects
      </StyledButton>

      <Button component="a" href="../public/CV-S.Arellano.pdf"
  sx={{
    position: "absolute",
    top: "20px",
    right: "25px",
    backgroundColor: "transparent",
    color: "black", 
    padding: 0, 
    fontSize: "1.1rem", 
    fontWeight: "bold", 
    textTransform: "none", 
    textDecoration: "none", 
    cursor: "pointer", 
    transition: "color 0.3s ease, transform 0.3s ease", 
    ":hover": {
      color: "#4A4A4A", 
      transform: "translateY(-4px)", 
    },
    ":active": {
      transform: "translateY(-1px)", 
    },
  }}
>
  Download CV
</Button>
    </Box>
  );
}

export default HomePage;
