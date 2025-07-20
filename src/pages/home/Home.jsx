import {
  Box,
  Typography,
  Button,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import About from "../about/About";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import Footer from "../../components/footer/Footer";
import me from "../../assets/Sakthi.png";
import "./Home.scss";

const Home = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
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
      url: "https://www.instagram.com/sakthiisteve",
    },
  ];

  const handleSocialClick = (url) =>
    window.open(url, "_blank", "noopener,noreferrer");

  return (
    <Box className="home-container">
      {/* Home Section */}
      <Box id="hero" className="hero" sx={{ height: "100vh" }}>
        {/* Floating Particles Background */}
        {/* {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              background: "rgba(255, 165, 0, 0.1)",
              borderRadius: "50%",
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 50 - 25],
              x: [0, Math.random() * 30 - 15],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))} */}

        {/* Cloud Wave Elements */}
        <motion.svg
          viewBox="0 0 1440 363"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            zIndex: 1,
          }}
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <path
            d="M-22 158.808C-22 158.808 244.5 -34.9999 571.5 68.9999C898.5 172.999 1136 158.808 1440 158.808V363H-22V158.808Z"
            fill="url(#paint0_linear_1_3)"
            fillOpacity="0.1"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_3"
              x1="709"
              y1="158.808"
              x2="709"
              y2="363"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFA500" />
              <stop offset="1" stopColor="#FFA500" stopOpacity="0" />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* Second Cloud Wave */}
        <motion.svg
          viewBox="0 0 1440 363"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            zIndex: 0,
          }}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <path
            d="M-22 158.808C-22 158.808 244.5 -34.9999 571.5 68.9999C898.5 172.999 1136 158.808 1440 158.808V363H-22V158.808Z"
            fill="url(#paint0_linear_1_4)"
            fillOpacity="0.05"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_4"
              x1="709"
              y1="158.808"
              x2="709"
              y2="363"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFA500" />
              <stop offset="1" stopColor="#FFA500" stopOpacity="0" />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* Left Content */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            zIndex: 2,
            padding: isMobile ? "0 20px" : "0 50px",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Typography
              variant="h4"
              className="greeting"
              sx={{
                color: "#1e293b",
                fontWeight: 600,
                mb: 1,
                fontSize: isMobile ? "1.5rem" : "2rem",
              }}
            >
              Hi! I Am
            </Typography>
            <Typography
              variant="h2"
              className="name"
              sx={{
                background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                fontWeight: 800,
                fontSize: isMobile ? "3rem" : "4rem",
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              <span>Sakthi</span>
            </Typography>
            <Typography
              className="desc"
              sx={{
                color: "#64748b",
                fontSize: isMobile ? "1rem" : "1.2rem",
                maxWidth: "600px",
                lineHeight: 1.6,
                mb: 3,
              }}
            >
              Frontend Developer with high level of experience in web design and
              development, producing quality work.
            </Typography>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="cta-button"
                variant="contained"
                sx={{
                  background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
                  color: "white",
                  borderRadius: "50px",
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  fontSize: "1rem",
                  textTransform: "none",
                  boxShadow: "0 4px 15px rgba(245, 158, 11, 0.3)",
                  mb: 4,
                }}
              >
                Hire Me
              </Button>
            </motion.div>
            <Box className="social-icons" sx={{ display: "flex", gap: 2 }}>
              {socialLinks.map((s, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconButton
                    onClick={() => handleSocialClick(s.url)}
                    className="icon-btn"
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      backdropFilter: "blur(5px)",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 1)",
                        color: s.hoverColor,
                      },
                    }}
                  >
                    {s.icon}
                  </IconButton>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="hero-right"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            zIndex: 2,
            position: "relative",
          }}
        >
          {/* Orange Glow Effect */}
          {/* <motion.svg
            className="orange-glow"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: "absolute",
              width: "120%",
              height: "120%",
              zIndex: -1,
              filter: "blur(40px)",
              opacity: 0.7,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 3, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut",
            }}
          >
            <path
              fill="#FFA500"
              d="M40.1,-67.5C50.6,-60.4,58.3,-50.2,63.9,-39C69.6,-27.7,73.2,-13.8,73.6,0.3C74,14.4,71.2,28.8,63.9,40.5C56.6,52.2,44.9,61.1,32.3,66.2C19.7,71.3,6.3,72.5,-6.7,73.5C-19.6,74.5,-39.2,75.3,-48.4,65.8C-57.6,56.4,-56.4,36.7,-62.2,20.1C-68,3.5,-80.8,-10,-77.2,-21.2C-73.7,-32.5,-53.9,-41.4,-38.7,-48.9C-23.4,-56.3,-11.7,-62.3,1.6,-65.1C14.8,-67.9,29.6,-67.3,40.1,-67.5Z"
              transform="translate(100 100)"
            />
          </motion.svg> */}

          {/* Profile Image */}
          <motion.div
            className="profile-image-container"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
            style={{
              position: "relative",
              zIndex: 1,
              width: isMobile ? "280px" : "400px",
              height: isMobile ? "280px" : "400px",
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(245, 158, 11, 0.3)",
            }}
          >
            <img
              src={me}
              alt="Sakthi"
              className="hero-image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "drop-shadow(0 0 20px rgba(255, 165, 0, 0.3))",
              }}
            />
          </motion.div>
        </motion.div>
      </Box>

      {/* Sections with IDs for navigation */}
      <Box id="about">
        <About />
      </Box>

      <Box id="projects">
        <Projects />
      </Box>

      <Box id="contact">
        <Contact />
      </Box>

      <Footer />
    </Box>
  );
};

export default Home;
