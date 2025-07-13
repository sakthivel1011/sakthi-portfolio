import { Box, Typography, IconButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import CloseIcon from "@mui/icons-material/Close";

const Notification = ({ message, type, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 9999,
        }}
      >
        <Box
          sx={{
            backgroundColor: type === "success" ? "#4caf50" : "#f44336",
            color: "white",
            padding: "12px 16px",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            boxShadow: "0px 3px 5px rgba(0,0,0,0.2)",
            minWidth: "300px",
          }}
        >
          {type === "success" ? (
            <CheckCircleIcon sx={{ mr: 1 }} />
          ) : (
            <ErrorIcon sx={{ mr: 1 }} />
          )}
          <Typography variant="body1" sx={{ flexGrow: 1 }}>
            {message}
          </Typography>
          <IconButton
            size="small"
            color="inherit"
            onClick={onClose}
            sx={{ ml: 1 }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
      </motion.div>
    </AnimatePresence>
  );
};

export default Notification;
