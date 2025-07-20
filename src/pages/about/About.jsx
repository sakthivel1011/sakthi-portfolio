import { Box, Typography, useMediaQuery } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import "./About.scss";

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const controls = useAnimation();
  const [activeTab, setActiveTab] = useState(0);
  const isMobile = useMediaQuery("(max-width:900px)");

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const aboutData = [
    {
      title: "The Developer",
      icon: "💻",
      content: [
        "Full-stack developer with 3+ years experience",
        "Specialized in React, Node.js, and modern web technologies",
        "Passionate about creating pixel-perfect UIs",
      ],
      skills: ["React", "Node.js", "TypeScript", "GraphQL", "MongoDB"],
      color: "#f59e0b",
    },
    {
      title: "The Student",
      icon: "📚",
      content: [
        "B.E. Computer Science & Engineering",
        "Einstein College of Engineering (2020-2024)",
        "CGPA: 7.74/10.0",
      ],
      skills: ["Algorithms", "Data Structures", "AI/ML", "Cloud Computing"],
      color: "#fbbf24",
    },
    {
      title: "The Professional",
      icon: "👔",
      content: [
        "Web Development Intern at Brazy Technologies",
        "Jun 2023 - Jul 2023",
        "Developed responsive web interfaces",
      ],
      skills: ["Teamwork", "Agile", "Problem Solving", "Communication"],
      color: "#f97316",
    },
    {
      title: "The Achiever",
      icon: "🏆",
      content: [
        "Runner-up in Technical Quiz - JP College",
        "AI-powered Fitness Analyzer project selected in NIRAL Thiruvizha",
      ],
      skills: ["Leadership", "Public Speaking", "Mentoring"],
      color: "#ea580c",
    },
  ];

  return (
    <Box
      component="section"
      className="about-section"
      ref={ref}
      sx={{
        position: "relative",
        overflow: "hidden",
        py: 10,
        px: isMobile ? 2 : 10,
        background: "linear-gradient(135deg, #fff7ed, #ffedd5)",
      }}
    >
      {/* Floating Orange Slices */}
      <motion.div
        className="floating-oranges"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="orange-slice"
            initial={{
              y: Math.random() * 100,
              x: Math.random() * 100,
              rotate: Math.random() * 360,
              scale: 0.8 + Math.random() * 0.4,
            }}
            animate={{
              y: [0, Math.random() * 40 - 20],
              x: [0, Math.random() * 30 - 15],
              rotate: [0, Math.random() * 30 - 15],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Bouncing Title */}
      <motion.div
        className="title-container"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 10,
            },
          },
        }}
      >
        <Typography
          variant="h2"
          className="section-title"
          component={motion.div}
          whileHover={{
            scale: 1.05,
            rotate: [0, -2, 2, -2, 0],
            transition: { duration: 0.5 },
          }}
        >
          <motion.span
            className="title-highlight"
            animate={{
              rotate: [0, 5, -5, 0],
              y: [0, -5, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            Hello!
          </motion.span>{" "}
          Let Me Introduce Myself
        </Typography>
        <motion.div
          className="section-subtitle"
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          Click on the cute bubbles to explore different sides of me
        </motion.div>
      </motion.div>

      {/* Bubbly Selector */}

      <motion.div
        className="bubbly-selector"
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {aboutData.map((item, index) => {
          const isSelected = activeTab === index;
          const isNewlySelected = isSelected; // Track if this is the newly selected one

          return (
            <motion.div
              key={index}
              className={`bubble ${isSelected ? "active" : ""}`}
              style={{
                backgroundColor: item.color,
                filter: `drop-shadow(0 5px 15px ${item.color}88)`,
                margin: "0 15px",
              }}
              variants={{
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
              }}
              whileHover={{
                scale: 1.1,
                y: -10,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() => {
                if (!isSelected) {
                  setActiveTab(index);
                }
              }}
              animate={{
                y: isSelected ? [0, -10, 0] : 0,
                rotate: isNewlySelected ? 360 : 0, // Only rotate when newly selected
              }}
              transition={{
                y: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                },
                rotate: {
                  duration: 0.6,
                  ease: "backOut",
                },
              }}
              onAnimationComplete={() => {
                // Reset rotation after animation completes
                if (isNewlySelected) {
                  setTimeout(() => {
                    // This ensures the rotation resets smoothly
                  }, 0);
                }
              }}
            >
              <motion.div
                className="bubble-icon"
                animate={{
                  scale: isSelected ? 1.2 : 1,
                  rotate: isNewlySelected ? -360 : 0, // Counter-rotate only when newly selected
                }}
                transition={{
                  rotate: {
                    duration: 0.6,
                    ease: "backOut",
                  },
                  scale: {
                    type: "spring",
                    stiffness: 200,
                  },
                }}
              >
                {item.icon}
              </motion.div>

              <motion.div
                className="bubble-title"
                initial={{ opacity: 0.8, y: 10 }}
                animate={{
                  opacity: isSelected ? 1 : 0.8,
                  y: isSelected ? [0, -5, 0] : 10,
                }}
                transition={{
                  y: {
                    duration: 0.6,
                    ease: "backOut",
                  },
                }}
              >
                {item.title}
              </motion.div>

              {isSelected && (
                <motion.div
                  className="active-indicator"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 10,
                  }}
                />
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {/* Playful Content Card */}
      <motion.div
        className="content-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        style={{
          borderColor: aboutData[activeTab].color,
          boxShadow: `0 10px 30px ${aboutData[activeTab].color}33`,
        }}
      >
        {/* Content Panel */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5 }}
          className="content-panel"
        >
          <Typography variant="h3" className="panel-title">
            {aboutData[activeTab].title}
          </Typography>

          <ul className="panel-content">
            {aboutData[activeTab].content.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{
                  x: 5,
                  color: aboutData[activeTab].color,
                }}
              >
                <motion.span
                  className="bullet"
                  style={{ backgroundColor: aboutData[activeTab].color }}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: i * 0.2,
                  }}
                />
                {point}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Skills Cloud */}
        <motion.div
          className="skills-cloud"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Typography variant="h4" className="skills-title">
            My Superpowers
          </Typography>
          <div className="skills-container">
            {aboutData[activeTab].skills.map((skill, i) => (
              <motion.div
                key={i}
                className="skill-tag"
                style={{
                  backgroundColor: aboutData[activeTab].color,
                  color: "white",
                }}
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  delay: 0.8 + i * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{
                  y: -5,
                  rotate: [0, 5, -5, 0],
                  transition: { duration: 0.5 },
                }}
              >
                {skill}
                <motion.span
                  className="sparkle"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1, 0] }}
                  transition={{
                    delay: 1 + i * 0.15,
                    duration: 0.5,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cute Character */}
        <motion.div
          className="character"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          👨‍💻
          <motion.div
            className="thought-bubble"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 }}
          >
            {activeTab === 0 && "I love coding!"}
            {activeTab === 1 && "Learning never stops!"}
            {activeTab === 2 && "Let's work together!"}
            {activeTab === 3 && "Achievements unlocked!"}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Juice Glass */}
      <motion.div
        className="juice-glass"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <div className="glass">
          <div
            className="juice"
            style={{ backgroundColor: aboutData[activeTab].color }}
          />
          <div className="straw" />
        </div>
      </motion.div>
    </Box>
  );
};

export default About;
