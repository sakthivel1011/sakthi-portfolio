import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  Typography,
  Box,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useRef } from "react";

const MenuItems = [
  { name: "Home", path: "/", sectionId: "hero" },
  { name: "About", path: "/about", sectionId: "about" },
  { name: "Projects", path: "/projects", sectionId: "projects" },
  { name: "Contact", path: "/contact", isButton: true, sectionId: "contact" },
];

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const location = useLocation();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const buttonsRef = useRef({});

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const createWaveAnimation = (element) => {
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const wave = document.createElement("div");
    wave.style.position = "fixed";
    wave.style.width = `${Math.max(rect.width, rect.height) * 2}px`;
    wave.style.height = `${Math.max(rect.width, rect.height) * 2}px`;
    wave.style.left = `${
      rect.left + rect.width / 2 - Math.max(rect.width, rect.height)
    }px`;
    wave.style.top = `${
      rect.top + rect.height / 2 - Math.max(rect.width, rect.height)
    }px`;
    wave.style.borderRadius = "50%";
    wave.style.background =
      "radial-gradient(circle, rgba(251,191,36,0.8) 0%, rgba(245,158,11,0) 70%)";
    wave.style.transform = "scale(0)";
    wave.style.transition =
      "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease-out";
    wave.style.opacity = "1";
    wave.style.zIndex = "1000"; // Higher than navbar
    wave.style.pointerEvents = "none";
    wave.style.mixBlendMode = "overlay"; // Makes the effect more visible

    document.body.appendChild(wave);

    // Force reflow to trigger animation
    void wave.offsetWidth;

    // Start animation
    wave.style.transform = "scale(1)";
    wave.style.opacity = "0";

    // Clean up
    setTimeout(() => {
      if (wave.parentNode) {
        document.body.removeChild(wave);
      }
    }, 600);
  };

  const handleNavigation = (path, sectionId) => {
    const clickedElement = buttonsRef.current[path];

    // Create and play wave animation first
    if (clickedElement) {
      createWaveAnimation(clickedElement);
    }

    // Delay navigation until animation is mostly complete
    setTimeout(() => {
      // If already on home page, scroll to section
      if (location.pathname === "/") {
        if (path === "/") {
          // Scroll to hero section
          const heroSection = document.getElementById("hero");
          if (heroSection) {
            heroSection.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          // Scroll to other sections
          const targetSection = document.getElementById(sectionId);
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
          }
        }
        handleMenuClose();
        return;
      }

      // If not on home page, navigate after animation
      navigate(path);
      // Then scroll to section after navigation completes
      setTimeout(() => {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }, 400);
  };
  return (
    <AppBar
      position="fixed"
      sx={{
        background: "rgba(255, 255, 255, 1)",
        backdropFilter: "blur(12px)",
        boxShadow: "none",
        zIndex: 90,
        borderBottom: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 4 } }}>
        {/* Left Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography
            component={Link}
            to="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("/", "hero");
            }}
            ref={(el) => (buttonsRef.current["/"] = el)}
            sx={{
              textDecoration: "none",
              fontSize: "1.3rem",
              fontWeight: 600,
              color: "#1e293b",
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            Sakthi
          </Typography>
        </Box>

        {/* Desktop Menu */}
        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {MenuItems.map((item) => {
              const isActive = location.pathname === item.path;

              return item.isButton ? (
                <Button
                  key={item.path}
                  onClick={() => handleNavigation(item.path, item.sectionId)}
                  ref={(el) => (buttonsRef.current[item.path] = el)}
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
                    color: "#fff",
                    borderRadius: 20,
                    textTransform: "none",
                    fontWeight: 600,
                    px: 3,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
                      transform: "scale(1.03)",
                    },
                  }}
                >
                  {item.name}
                </Button>
              ) : (
                <Button
                  key={item.path}
                  onClick={() => handleNavigation(item.path, item.sectionId)}
                  ref={(el) => (buttonsRef.current[item.path] = el)}
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    color: isActive ? "#f59e0b" : "#1e293b",
                    textTransform: "none",
                    fontSize: "1rem",
                    fontWeight: 500,
                    "&:hover": {
                      color: "#f59e0b",
                      transform: "translateY(-2px)",
                      background: "transparent",
                    },
                  }}
                >
                  {item.name}
                </Button>
              );
            })}
          </Box>
        )}

        {/* Mobile Menu */}
        {isMobile && (
          <>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
              sx={{
                position: "relative",
                overflow: "hidden",
              }}
            >
              <MenuIcon sx={{ color: "#1e293b" }} />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(10px)",
                  mt: "8px",
                  px: 1,
                  borderRadius: 2,
                  boxShadow: 3,
                  overflow: "hidden",
                },
              }}
            >
              {MenuItems.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                  <MenuItem
                    key={item.path}
                    onClick={() => handleNavigation(item.path, item.sectionId)}
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      color: isActive ? "#f59e0b" : "#1e293b",
                      fontWeight: isActive ? 600 : 400,
                      backgroundColor: isActive
                        ? "rgba(245, 158, 11, 0.08)"
                        : "transparent",
                      "&:hover": {
                        backgroundColor: "rgba(245, 158, 11, 0.1)",
                        color: "#f59e0b",
                      },
                    }}
                  >
                    {item.name}
                  </MenuItem>
                );
              })}
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
