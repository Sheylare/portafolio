import React, { useState } from "react";
import { Box, TextField, Container, Typography } from "@mui/material";
import StyledButton from "../components/StyledButton";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Email sent correctly");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Error");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: "50px" }}>
        Contact Me
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
            slotProps={{
              inputLabel: {
                style: { color: "white" },
              },
              input: {
                style: { color: "white", borderColor: "white" },
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white", // Borde blanco
                },
                "&:hover fieldset": {
                  borderColor: "white", // Borde blanco al pasar el mouse
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white", // Borde blanco al hacer clic
                },
              },
              backgroundColor: "black", // Fondo negro
            }}
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
            slotProps={{
              inputLabel: {
                style: { color: "white" },
              },
              input: {
                style: { color: "white", borderColor: "white" },
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white", // Borde blanco
                },
                "&:hover fieldset": {
                  borderColor: "white", // Borde blanco al pasar el mouse
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white", // Borde blanco al hacer clic
                },
              },
              backgroundColor: "black", // Fondo negro
            }}
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            fullWidth
            required
            slotProps={{
              inputLabel: {
                style: { color: "white" },
              },
              input: {
                style: { color: "white", borderColor: "white" },
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white", // Borde blanco
                },
                "&:hover fieldset": {
                  borderColor: "white", // Borde blanco al pasar el mouse
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white", // Borde blanco al hacer clic
                },
              },
              backgroundColor: "black", // Fondo negro
            }}
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            required
            slotProps={{
              inputLabel: {
                style: { color: "white" },
              },
              input: {
                style: { color: "white", borderColor: "white" },
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white", // Borde blanco
                },
                "&:hover fieldset": {
                  borderColor: "white", // Borde blanco al pasar el mouse
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white", // Borde blanco al hacer clic
                },
              },
              backgroundColor: "black", // Fondo negro
            }}
          />
        </Box>
        <StyledButton
          type="submit"
          // sx={{
          //   backgroundColor: "white",
          //   color: "black",
          //   "&:hover": {
          //     backgroundColor: "gray", // Cambia el color al pasar el mouse
          //   },
          // }}
        >
          Send
        </StyledButton>
      </form>
    </Container>
  );
}

export default Contact;