import React, { useState } from "react";
import { Box, TextField, Container, Typography, CircularProgress } from "@mui/material";
import StyledButton from "../components/StyledButton";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false); // Nuevo estado para controlar la carga

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.message = `${formData.name} - ${formData.email}\n${formData.message}`;
    setLoading(true); // Inicia la carga

    try {
      const response = await fetch(
        "https://form-backend-portafolio.vercel.app/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Email sent correctly");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Error");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false); // Finaliza la carga independientemente del resultado
    }
  };

  // Mostrar el spinner si está en modo de carga
  if (loading) {
    return (
      <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "50px" }}>
        <CircularProgress sx={{ color: "#E5E5CB" }} />
        <Typography variant="h6" style={{ marginTop: "16px" }}>
          Waiting for confirmation...
        </Typography>
      </Container>
    );
  }

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
                style: { color: "#E5E5CB" },
              },
              input: {
                style: { color: "#E5E5CB", borderColor: "#E5E5CB" },
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#E5E5CB", // Borde blanco
                },
                "&:hover fieldset": {
                  borderColor: "#E5E5CB", // Borde blanco al pasar el mouse
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#E5E5CB", // Borde blanco al hacer clic
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
                style: { color: "#E5E5CB" },
              },
              input: {
                style: { color: "#E5E5CB", borderColor: "#E5E5CB" },
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#E5E5CB", // Borde blanco
                },
                "&:hover fieldset": {
                  borderColor: "#E5E5CB", // Borde blanco al pasar el mouse
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#E5E5CB", // Borde blanco al hacer clic
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
                style: { color: "#E5E5CB" },
              },
              input: {
                style: { color: "#E5E5CB", borderColor: "#E5E5CB" },
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#E5E5CB",
                },
                "&:hover fieldset": {
                  borderColor: "#E5E5CB",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#E5E5CB",
                },
              },
              backgroundColor: "black",
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
            rows={8}
            required
            slotProps={{
              inputLabel: {
                style: { color: "#E5E5CB" },
              },
              input: {
                style: { color: "#E5E5CB", borderColor: "#E5E5CB" },
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#E5E5CB",
                },
                "&:hover fieldset": {
                  borderColor: "#E5E5CB",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#E5E5CB",
                },
              },
              backgroundColor: "black",
            }}
          />
        </Box>
        <StyledButton type="submit">Send</StyledButton>
      </form>
    </Container>
  );
}

export default Contact;
