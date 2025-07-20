import { Box, Typography, Chip, IconButton } from "@mui/material";
import { OpenInNew, Star, ArrowLeft, ArrowRight } from "@mui/icons-material";
import { motion, useAnimation, useAnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import PortfolioImage from "../../../src/assets/PortfolioImage.png";
import "./Projects.scss";

const projects = [
  {
    title: "Library Management",
    description:
      "Python/Tkinter solution with SQLite database for book tracking and management.",
    tech: ["Python", "Tkinter", "SQLite"],
    image:
      "https://sakthivel1011.github.io/PORTFOLIO/library%20management%20system.jpg",
    link: "#",
    featured: true,
  },
  {
    title: "Task Manager",
    description:
      "Java-based organizer with AWT/Swing GUI for efficient task management.",
    tech: ["Java", "AWT", "Swing"],
    image: "https://sakthivel1011.github.io/PORTFOLIO/ToDoList.jpg",
    link: "#",
  },
  {
    title: "Arithmetic Calculator",
    description: "Java Swing calculator with intuitive UI and error handling.",
    tech: ["Java", "Swing"],
    image: "https://sakthivel1011.github.io/PORTFOLIO/project2.jpg",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "Responsive portfolio built with vanilla web technologies.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: PortfolioImage,
    link: "https://sakthivel1011.github.io/PORTFOLIO/",
    featured: true,
  },
];

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const controls = useAnimation();
  const carouselRef = useRef(null);
  const animationControls = useAnimationControls();
  const [isDragging, setIsDragging] = useState(false);
  const [showArrows, setShowArrows] = useState(false);
  const isMobile = window.innerWidth <= 768;

  // Infinite scroll animation
  useEffect(() => {
    if (!inView || isMobile) return;

    const carousel = carouselRef.current;
    if (!carousel) return;

    const duration = 40;
    const startPosition = 0;
    const endPosition = -carousel.scrollWidth / 2;

    const animate = async () => {
      await animationControls.start({
        x: [startPosition, endPosition],
        transition: {
          duration: duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    };

    animate();
    return () => animationControls.stop();
  }, [inView, animationControls, isMobile]);

  // Fade-in animation when in view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Handle manual scroll for mobile
  const handleScroll = (direction) => {
    if (!carouselRef.current) return;
    const scrollAmount = carouselRef.current.clientWidth * 0.8;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <Box className="projects-section" id="projects" ref={ref}>
      {/* Animated Background Elements */}
      <motion.div className="floating-tech">
        {["</>", "{}", "()", "[]"].map((symbol, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              y: [0, -20, 0],
              x: Math.random() * 100 - 50,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            {symbol}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h2" className="section-title">
            My{" "}
            <motion.span
              className="highlight"
              animate={{
                rotate: [0, 5, -5, 0],
                y: [0, -3, 3, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              Projects
            </motion.span>
          </Typography>
          <motion.div
            className="divider"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
          <Typography variant="subtitle1" className="section-subtitle">
            Swipe or scroll to explore my work
          </Typography>
        </motion.div>

        {/* Projects Carousel */}
        <div
          className="carousel-container"
          onMouseEnter={() => !isMobile && setShowArrows(true)}
          onMouseLeave={() => !isMobile && setShowArrows(false)}
        >
          {showArrows && !isMobile && (
            <IconButton
              className="carousel-arrow left"
              onClick={() => handleScroll("left")}
              component={motion.div}
              whileHover={{ scale: 1.2 }}
            >
              <ArrowLeft fontSize="large" />
            </IconButton>
          )}

          <motion.div
            className="carousel-track"
            ref={carouselRef}
            animate={isMobile ? {} : animationControls}
            drag={isMobile ? "x" : false}
            dragConstraints={{
              right: 0,
              left: -carouselRef.current?.scrollWidth,
            }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
          >
            {[...projects, ...projects].map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                className={`project-card ${project.featured ? "featured" : ""}`}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { type: "spring", stiffness: 100 },
                  },
                }}
                whileHover={
                  isDragging
                    ? {}
                    : {
                        y: -15,
                        scale: 1.03,
                        boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
                      }
                }
                transition={{ type: "spring", stiffness: 300 }}
              >
                {project.featured && (
                  <motion.div
                    className="featured-badge"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Star fontSize="small" />
                    <span>Featured</span>
                  </motion.div>
                )}

                <div className="project-image-container">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="project-overlay"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <IconButton
                      className="view-button"
                      onClick={() => window.open(project.link, "_blank")}
                      component={motion.div}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <OpenInNew fontSize="medium" />
                    </IconButton>
                  </motion.div>
                </div>

                <div className="project-content">
                  <motion.h3
                    whileHover={{ color: "#ff6d00" }}
                    transition={{ duration: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p>{project.description}</p>
                  <div className="tech-tags">
                    {project.tech.map((tech, i) => (
                      <motion.div
                        key={i}
                        className="tech-tag"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        whileHover={{
                          scale: 1.1,
                          y: -3,
                          boxShadow: "0 5px 10px rgba(0,0,0,0.1)",
                        }}
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {showArrows && !isMobile && (
            <IconButton
              className="carousel-arrow right"
              onClick={() => handleScroll("right")}
              component={motion.div}
              whileHover={{ scale: 1.2 }}
            >
              <ArrowRight fontSize="large" />
            </IconButton>
          )}
        </div>

        {/* Mobile Navigation Dots */}
        {isMobile && (
          <div className="mobile-dots">
            {projects.map((_, i) => (
              <motion.div
                key={i}
                className="dot"
                animate={{
                  scale: [0.8, 1, 0.8],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        )}
      </motion.div>
    </Box>
  );
};

export default Projects;
