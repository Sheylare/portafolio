import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DoggyInn from "../assets/images/doggyInn.jpg";
import MenteMigrante from "../assets/images/MenteMigrante.jpg";
import OxiSerrano from "../assets/images/oxi-serrano.jpg";
import StyledButton from "../components/StyledButton";
import { Link } from "react-router-dom";
import { Grid2 } from "@mui/material";



function Projects() {
  return (
    <Grid2
      container
      spacing={2}
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
        mt: "7.5%",
        ml: "5%",
        mr: "3%",
        alignItems: "stretch",
        rowGap: { xs: "190px" },
      }}
    >
      <Grid2 xs={12} md={4}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            maxWidth: 400,
            justifySelf: "center",
            height: "140%",
            backgroundColor: "black",
            color: "#E5E5CB",
            mb: { xs: 1, md: 0 },
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "translateY(-10px)",
              boxShadow: "0px 10px 20px rgba(229, 229, 203, 0.6)",
            },
          }}
        >
          <CardMedia sx={{ height: 140 }} image={DoggyInn} title="Logo" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Doggy Inn
            </Typography>
            <Typography variant="body2" sx={{ color: "#E5E5CB" }}>
              Doggy Inn is the ideal app for finding reliable and loving dog
              sitters. Designed with both pet owners' and caregivers' needs in
              mind, our platform makes caring for your dog easy and safe.
            </Typography>
          </CardContent>
          <CardActions>
            <StyledButton component={Link} to="https://doggy-inn.netlify.app/">
              Learn More
            </StyledButton>
            <StyledButton
              component={Link}
              to="https://github.com/Sheylare/doggyInn-app-client"
            >
              View on GitHub
            </StyledButton>
          </CardActions>
        </Card>
      </Grid2>

      <Grid2 xs={12} md={4}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            maxWidth: 400,
            height: "140%",
            justifySelf: "center",
            backgroundColor: "black",
            color: "#E5E5CB",
            mb: { xs: 1, md: 0 },
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "translateY(-10px)",
              boxShadow: "0px 10px 20px rgba(229, 229, 203, 0.6)",
            },
          }}
        >
          <CardMedia sx={{ height: 140 }} image={MenteMigrante} title="Logo" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              MenteMigrante
            </Typography>
            <Typography variant="body2" sx={{ color: "#E5E5CB" }}>
              Mental health app for Latin American migrants in Europe, offering
              a safe space with a decolonial and anti-racist approach.
            </Typography>
          </CardContent>
          <CardActions>
            <StyledButton
              component={Link}
              to="https://mentemigrante.netlify.app/"
            >
              Learn More
            </StyledButton>
            <StyledButton
              component={Link}
              to="https://github.com/michsredni/mentemigrante-client"
            >
              View on GitHub
            </StyledButton>
          </CardActions>
        </Card>
      </Grid2>

      <Grid2 xs={12} md={4}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            maxWidth: 400,
            height: "140%",
            justifySelf: "center",
            backgroundColor: "black",
            color: "#E5E5CB",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "translateY(-10px)",
              boxShadow: "0px 10px 20px rgba(229, 229, 203, 0.6)",
            },
          }}
        >
          <CardMedia sx={{ height: 140 }} image={OxiSerrano} title="Logo" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              OxiSerrano
            </Typography>
            <Typography variant="body2" sx={{ color: "#E5E5CB" }}>
              Medical oxygen app, providing a safe and accessible space with a
              focus on products and services for respiratory wellness.
            </Typography>
          </CardContent>
          <CardActions>
            <StyledButton>Learn More</StyledButton>
            <StyledButton>View on GitHub</StyledButton>
          </CardActions>
        </Card>
      </Grid2>

      
    </Grid2>
  );
}

export default Projects;
