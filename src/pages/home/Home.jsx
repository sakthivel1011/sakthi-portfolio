import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import me from "../../assets/Sakthi.png";
import Navbar from "../../components/navbar/Navbar";
import { motion } from "framer-motion";
import "./Home.scss";

const Home = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      hoverColor: "#72e0d1",
      url: "https://github.com/sakthivel1011",
    },
    {
      icon: <FaLinkedin size={20} />,
      hoverColor: "#0e76a8",
      url: "https://www.linkedin.com/in/sakthivel-p-043b5425b",
    },
    {
      icon: <FaInstagram size={20} />,
      hoverColor: "#e1306c",
      url: "https://www.instagram.com/sakthiisteve?igsh=MXEyNXduNDFzY2d1bQ==",
    },
  ];

  const handleSocialClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5,
      },
    },
  };

  const socialVariants = {
    hover: {
      y: -5,
      scale: 1.1,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.9 },
  };

  return (
    <Box className="home-container">
      <Navbar />
      <motion.div
        className="content-wrapper"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.img
          src={me}
          alt="Sakthi"
          className="profile-image"
          variants={imageVariants}
          whileHover={!isMobile ? { scale: 1.03 } : {}}
        />

        <motion.div className="text-content" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <Typography variant="h2" component="h1" className="title">
              Hey, I'm <span className="highlight">Sakthi</span>
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography variant="body1" className="subtitle">
              Creative Frontend Developer crafting elegant digital experiences
              with modern technologies.
            </Typography>
          </motion.div>

          <motion.div className="social-links" variants={containerVariants}>
            {socialLinks.map((social, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <IconButton
                  className="social-icon"
                  sx={{ "&:hover": { color: social.hoverColor } }}
                  onClick={() => handleSocialClick(social.url)}
                  aria-label={`Link to ${social.icon.type.name} profile`}
                >
                  <motion.div variants={socialVariants}>
                    {social.icon}
                  </motion.div>
                </IconButton>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default Home;
