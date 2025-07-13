import { Box, Typography, Chip, useMediaQuery } from "@mui/material";
import { Code as ProjectIcon } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Projects.scss";

const projects = [
  {
    title: "Library Management System",
    description:
      "Developed a comprehensive library management solution with Python and Tkinter, featuring book tracking, issuing system, and returns management with SQLite database integration.",
    tech: ["Python", "Tkinter", "SQLite"],
    image:
      "https://sakthivel1011.github.io/PORTFOLIO/library%20management%20system.jpg",
  },
  {
    title: "Task Management Application",
    description:
      "Built a Java-based task organizer with AWT/Swing GUI implementing CRUD operations, priority sorting, and persistent data storage for efficient daily task management.",
    tech: ["Java", "AWT", "Swing"],
    image: "https://sakthivel1011.github.io/PORTFOLIO/ToDoList.jpg",
  },
  {
    title: "Arithmetic Calculator",
    description:
      "Engineered a responsive calculator application with Java Swing featuring basic arithmetic operations, error handling, and intuitive user interface design.",
    tech: ["Java", "Swing"],
    image: "https://sakthivel1011.github.io/PORTFOLIO/project2.jpg",
  },
];

const Projects = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const isSmallMobile = useMediaQuery("(max-width:480px)");

  return (
    <Box className="projects-container" sx={{ px: isMobile ? 1 : 4 }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="projects-content"
      >
        <Box className="section-header" sx={{ mb: isMobile ? 2 : 4 }}>
          <ProjectIcon sx={{ fontSize: isMobile ? "2rem" : "2.5rem" }} />
          <Typography
            variant={isMobile ? "h5" : "h4"}
            component="h2"
            sx={{ ml: 1, fontSize: isMobile ? "1.5rem" : "2rem" }}
          >
            PROJECT SHOWCASE
          </Typography>
        </Box>

        <Carousel
          showArrows={!isMobile}
          showStatus={false}
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={6000}
          transitionTime={600}
          className="project-carousel"
          swipeable={true}
          emulateTouch={true}
          centerMode={!isSmallMobile}
          centerSlidePercentage={isSmallMobile ? 90 : 80}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-item"
              style={{
                padding: isMobile ? "0.5rem" : "1rem",
                margin: isMobile ? "0.5rem" : "1rem",
              }}
            >
              <Box
                className="project-image-container"
                sx={{ height: isMobile ? "200px" : "300px" }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                    borderRadius: "8px",
                  }}
                />
              </Box>
              <Box
                className="project-details"
                sx={{
                  p: isMobile ? 1 : 2,
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                <Typography
                  variant={isMobile ? "h6" : "h5"}
                  component="h3"
                  sx={{ mb: 1, fontWeight: 600 }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: isMobile ? "0.9rem" : "1rem",
                    mb: 2,
                  }}
                >
                  {project.description}
                </Typography>
                <Box
                  className="tech-stack"
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                    justifyContent: isMobile ? "center" : "flex-start",
                  }}
                >
                  {project.tech.map((tech, i) => (
                    <Chip
                      key={i}
                      label={tech}
                      size={isMobile ? "small" : "medium"}
                      sx={{
                        fontSize: isMobile ? "0.7rem" : "0.8rem",
                        px: 0.5,
                      }}
                      variant="outlined"
                    />
                  ))}
                </Box>
              </Box>
            </motion.div>
          ))}
        </Carousel>
      </motion.div>
    </Box>
  );
};

export default Projects;
