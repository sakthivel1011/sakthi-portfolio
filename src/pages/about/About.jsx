import {
  Box,
  Typography,
  Paper,
  Divider,
  Chip,
  Avatar,
  Collapse,
} from "@mui/material";
import {
  EmojiObjects as ObjectiveIcon,
  Code as SkillsIcon,
  School as EducationIcon,
  Work as ExperienceIcon,
  Star as AchievementIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import { useState } from "react";
import { motion } from "framer-motion";
import "./About.scss";
import myImage from "../../assets/Sakthivel.png";

const About = () => {
  const [expanded, setExpanded] = useState({
    skills: true,
    education: true,
    experience: true,
    achievements: true,
  });

  const toggleSection = (section) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Adjust for navbar height
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const skills = {
    core: ["Java", "Python", "JavaScript"],
    web: ["HTML5", "CSS3", "React", "Material UI"],
    databases: ["SQL", "MySQL", "SQLite"],
    tools: ["Git", "VS Code", "IntelliJ IDEA"],
  };

  const education = [
    {
      period: "2020 - 2024",
      degree: "B.E. Computer Science & Engineering",
      institute: "Einstein College of Engineering",
      grade: "CGPA: 7.74/10.0",
      achievements: [
        "Specialized in Software Development",
        "Coursework in Data Structures, Algorithms, and DBMS",
      ],
    },
  ];

  const experience = [
    {
      role: "Web Development Intern",
      company: "Brazy Technologies",
      period: "Jun 2023 - Jul 2023",
      description:
        "Developed responsive web interfaces using HTML, CSS, and JavaScript",
    },
  ];

  const achievements = [
    "Runner-up in Technical Quiz - JP College",
    "AI-powered Fitness Analyzer project selected in NIRAL Thiruvizha",
  ];

  return (
    <Box className="about-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Paper className="profile-card" elevation={3}>
          {/* Header Section */}
          <Box className="header-section">
            <Avatar
              src={myImage}
              className="profile-avatar"
              component={motion.div}
              whileHover={{ scale: 1.05 }}
            />
            <Box>
              <Typography variant="h3" className="name-title">
                Sakthivel P
              </Typography>
              <Typography variant="subtitle1" className="job-title">
                SOFTWARE ENGINEER
              </Typography>
              <Typography variant="body2" className="contact-info">
                +91 6379563485 | sakthivel.p1011@gmail.com
              </Typography>
            </Box>
          </Box>

          <Divider className="divider" />

          {/* Objective Section */}
          <Box className="section" id="objective-section">
            <Box className="section-header">
              <ObjectiveIcon className="section-icon" />
              <Typography variant="h5" className="section-title">
                Professional Profile
              </Typography>
            </Box>
            <Typography className="section-content">
              Innovative software engineer with a passion for creating elegant
              solutions. Combines technical expertise with creative
              problem-solving to deliver exceptional user experiences and robust
              systems architecture.
            </Typography>
          </Box>

          {/* Skills Section */}
          <Box className="section" id="skills-section">
            <Box
              className="section-header clickable"
              onClick={() => {
                toggleSection("skills");
                scrollToSection("skills-section");
              }}
            >
              <SkillsIcon className="section-icon" />
              <Typography variant="h5" className="section-title">
                Technical Competencies
              </Typography>
              <ExpandMoreIcon
                className={`expand-icon ${expanded.skills ? "expanded" : ""}`}
              />
            </Box>
            <Collapse in={expanded.skills}>
              <Box className="skills-container">
                {Object.entries(skills).map(([category, items]) => (
                  <Box key={category} className="skills-category">
                    <Typography
                      variant="subtitle1"
                      className="skills-category-title"
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </Typography>
                    <Box className="skills-grid">
                      {items.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          className="skill-chip"
                          variant="outlined"
                          component={motion.div}
                          whileHover={{ scale: 1.05 }}
                        />
                      ))}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Collapse>
          </Box>

          {/* Education Section */}
          <Box className="section" id="education-section">
            <Box
              className="section-header clickable"
              onClick={() => {
                toggleSection("education");
                scrollToSection("education-section");
              }}
            >
              <EducationIcon className="section-icon" />
              <Typography variant="h5" className="section-title">
                Education Background
              </Typography>
              <ExpandMoreIcon
                className={`expand-icon ${
                  expanded.education ? "expanded" : ""
                }`}
              />
            </Box>
            <Collapse in={expanded.education}>
              <Box className="education-container">
                {education.map((edu, index) => (
                  <Paper key={index} className="education-item" elevation={2}>
                    <Typography
                      variant="subtitle2"
                      className="education-period"
                    >
                      {edu.period}
                    </Typography>
                    <Typography variant="h6" className="education-degree">
                      {edu.degree}
                    </Typography>
                    <Typography className="education-institute">
                      {edu.institute}
                    </Typography>
                    <Typography className="education-grade">
                      {edu.grade}
                    </Typography>
                    {edu.achievements && (
                      <Box className="education-achievements">
                        <Typography
                          variant="body2"
                          className="achievements-title"
                        >
                          Key Achievements:
                        </Typography>
                        <ul>
                          {edu.achievements.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </Box>
                    )}
                  </Paper>
                ))}
              </Box>
            </Collapse>
          </Box>

          {/* Experience Section */}
          <Box className="section" id="experience-section">
            <Box
              className="section-header clickable"
              onClick={() => {
                toggleSection("experience");
                scrollToSection("experience-section");
              }}
            >
              <ExperienceIcon className="section-icon" />
              <Typography variant="h5" className="section-title">
                Professional Experience
              </Typography>
              <ExpandMoreIcon
                className={`expand-icon ${
                  expanded.experience ? "expanded" : ""
                }`}
              />
            </Box>
            <Collapse in={expanded.experience}>
              <Box className="experience-container">
                {experience.map((exp, index) => (
                  <Paper key={index} className="experience-item" elevation={2}>
                    <Typography variant="h6" className="experience-role">
                      {exp.role}
                    </Typography>
                    <Typography className="experience-company">
                      {exp.company} • {exp.period}
                    </Typography>
                    <Typography className="experience-description">
                      {exp.description}
                    </Typography>
                  </Paper>
                ))}
              </Box>
            </Collapse>
          </Box>

          {/* Achievements Section */}
          <Box className="section" id="achievements-section">
            <Box
              className="section-header clickable"
              onClick={() => {
                toggleSection("achievements");
                scrollToSection("achievements-section");
              }}
            >
              <AchievementIcon className="section-icon" />
              <Typography variant="h5" className="section-title">
                Honors & Awards
              </Typography>
              <ExpandMoreIcon
                className={`expand-icon ${
                  expanded.achievements ? "expanded" : ""
                }`}
              />
            </Box>
            <Collapse in={expanded.achievements}>
              <Box className="achievements-container">
                {achievements.map((achievement, index) => (
                  <Paper key={index} className="achievement-item" elevation={2}>
                    <Typography className="achievement-text">
                      {achievement}
                    </Typography>
                  </Paper>
                ))}
              </Box>
            </Collapse>
          </Box>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default About;
