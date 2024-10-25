import { Box, Typography } from "@mui/material";
import profileImg from "../assets/images/bio-pic.jpeg";
import React from "react";
import { keyframes } from "@mui/system";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Definir la animación para la imagen
const imageFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

function About() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexWrap: { xs: "wrap", md: "nowrap" },
      }}
    >
      
      <Box
        component="img"
        src={profileImg}
        alt="profile picture"
        sx={{
          width: { xs: "80%", sm: "60%", md: "40%" },
          height: "auto",
          margin: { xs: "3 auto", md: "5%" },
          order: { xs: 2, md: 1 },
          animation: `${imageFadeIn} 2s ease-out`, // Aplicar la animación de fade-in y zoom
        }}
      />

      {/* Texto a la derecha */}
      <Box
        sx={{
          width: { xs: "100%", md: "60%" },
          paddingLeft: { md: 2 },
          order: { xs: 2, md: 1 },
          marginTop: { xs: 4, md: 3 },
        }}
      >
        <Typography variant="body1" gutterBottom>
          Hi, I'm Sheyla – a web developer, psychologist, and photographer
          currently based in Barcelona. My journey into web development began
          just over a year ago, driven by a passion for creating digital
          experiences. I took the leap and enrolled in a Full Stack bootcamp,
          where I developed a strong foundation in both front-end and back-end
          technologies. It’s been a challenging yet incredibly rewarding path.
        </Typography>
        <Typography variant="body1" gutterBottom>
          I have extensive experience in front-end technologies like HTML, CSS,
          JavaScript, and React, specializing in creating dynamic, responsive,
          and visually appealing user interfaces. On the back end, I have solid
          expertise in technologies such as Node.js, Express.js, and MongoDB,
          which enables me to build robust, scalable, and efficient server-side
          applications. This full-stack skill set allows me to handle every
          aspect of web development, from designing seamless user experiences to
          managing databases and server logic, ensuring end-to-end functionality
          and performance for any project.
        </Typography>
        <Typography variant="body1" gutterBottom>
          What makes me stand out is my background in psychology, which allows
          me to approach web development with a unique perspective. I understand
          the importance of user behavior and cognitive processes, which helps
          me design websites that are not only visually appealing but also
          highly intuitive and user-friendly. I’m particularly interested in
          leveraging my skills to build digital solutions with a meaningful
          social impact.
        </Typography>
        <Typography variant="body1" gutterBottom>
          I’m excited to collaborate on projects where design, technology, and
          purpose intersect. If you’re looking for a developer who brings both
          technical skills and a human-centered approach, let’s work together
          and create something impactful!
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: 5,
          }}
        >
          <a
            href="https://github.com/Sheylare"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 10px", color: "#E5E5CB" }}
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 10px", color: "#E5E5CB" }}
          >
            <FaLinkedin size={30} />
          </a>
        </Box>

      </Box>
    </Box>
  );
}

export default About;
