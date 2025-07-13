import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const MenuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "transparent",
        boxShadow: "none",
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(15, 32, 39, 0.6)",
        zIndex: 1200,
        height: "64px",
        maxHeight: "64px",
        borderBottom: "1px solid rgba(114, 224, 209, 0.1)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: { xs: "space-between", md: "flex-end" },
          alignItems: "center",
          px: { xs: 2, md: 4 },
        }}
      >
        {isMobile && (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Mobile Menu */}
        <Menu
          id="mobile-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          MenuListProps={{
            "aria-labelledby": "mobile-menu",
          }}
          PaperProps={{
            sx: {
              backgroundColor: "rgba(15, 32, 39, 0.9)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(114, 224, 209, 0.2)",
            },
          }}
        >
          {MenuItems.map((item) => (
            <MenuItem
              key={item.path}
              component={Link}
              to={item.path}
              onClick={handleMenuClose}
              sx={{
                color: "#fff",
                "&:hover": {
                  color: "#72e0d1",
                  backgroundColor: "rgba(114, 224, 209, 0.1)",
                },
              }}
            >
              {item.name}
            </MenuItem>
          ))}
        </Menu>

        {/* Desktop Menu - Only shown on larger screens */}
        {!isMobile && (
          <>
            {MenuItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                sx={{
                  color: "#fff",
                  textTransform: "none",
                  fontSize: "1rem",
                  fontWeight: 500,
                  minWidth: "auto",
                  px: 1.5,
                  letterSpacing: "0.5px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#72e0d1",
                    backgroundColor: "transparent",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {item.name}
              </Button>
            ))}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
