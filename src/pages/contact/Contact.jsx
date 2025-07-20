import { useRef, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
  useMediaQuery,
} from "@mui/material";
import {
  Email as EmailIcon,
  Send as SendIcon,
  Check as CheckIcon,
} from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import "./Contact.scss";

const Contact = () => {
  const formRef = useRef();
  const isMobile = useMediaQuery("(max-width:768px)");
  const [isTyping, setIsTyping] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string()
        .required("Message is required")
        .min(10, "Message must be at least 10 characters"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        await emailjs.sendForm(
          "service_yqlqgsc",
          "template_vlciamq",
          formRef.current,
          "HUCray3_ixBgJXj-p"
        );
        setIsSuccess(true);
        resetForm();
        setTimeout(() => {
          setIsSuccess(false);
          setSubmitting(false);
        }, 2000);
      } catch (error) {
        setSubmitting(false);
      }
    },
  });

  const handleInputFocus = () => setIsTyping(true);
  const handleInputBlur = () => setIsTyping(false);

  return (
    <Box
      component="section"
      className="contact-section"
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 4,
        px: 2,
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at center, #fff9f0 0%, #ffffff 100%)",
      }}
    >
      {/* Floating background elements */}
      <motion.div
        className="floating-circle-1"
        animate={{
          y: [0, 15, 0],
          x: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="floating-circle-2"
        animate={{
          y: [0, -20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <Box
        sx={{
          width: "100%",
          maxWidth: "800px",
          px: isMobile ? 2 : 4,
          py: 2,
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Box
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.9)",
              borderRadius: "16px",
              boxShadow: "0 8px 32px rgba(31, 38, 135, 0.15)",
              p: isMobile ? 3 : 4,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              position: "relative",
              backdropFilter: "blur(4px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              overflow: "hidden",
            }}
          >
            {/* Animated border */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, delay: 0.4 }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "4px",
                background: "linear-gradient(90deg, #f59e0b, #f97316, #f59e0b)",
                backgroundSize: "200% 200%",
              }}
              className="animated-border"
            />

            {/* Decorative corner elements */}
            <div className="corner-decoration top-left" />
            <div className="corner-decoration top-right" />
            <div className="corner-decoration bottom-left" />
            <div className="corner-decoration bottom-right" />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
                position: "relative",
              }}
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <EmailIcon
                  sx={{
                    fontSize: "2.5rem",
                    color: "#f59e0b",
                    mr: 2,
                    filter: "drop-shadow(0 2px 4px rgba(245, 158, 11, 0.3))",
                  }}
                />
              </motion.div>
              <Typography
                variant={isMobile ? "h4" : "h3"}
                sx={{
                  fontWeight: 700,
                  color: "text.primary",
                  textShadow: "0 2px 4px rgba(0,0,0,0.05)",
                  position: "relative",
                }}
              >
                Contact Me
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  style={{
                    position: "absolute",
                    bottom: -8,
                    left: 0,
                    width: "100%",
                    height: "3px",
                    background: "linear-gradient(90deg, #f59e0b, transparent)",
                    borderRadius: "3px",
                  }}
                />
              </Typography>
            </Box>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form onSubmit={formik.handleSubmit} ref={formRef}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <TextField
                    fullWidth
                    size="small"
                    id="name"
                    name="name"
                    label="Your Name"
                    variant="outlined"
                    margin="normal"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={(e) => {
                      formik.handleBlur(e);
                      handleInputBlur();
                    }}
                    onFocus={handleInputFocus}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    sx={{ mb: 2 }}
                    InputProps={{
                      sx: {
                        borderRadius: "8px",
                        "&:hover fieldset": {
                          borderColor: "#f59e0b !important",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#f59e0b !important",
                          boxShadow: "0 0 0 2px rgba(245, 158, 11, 0.2)",
                        },
                      },
                    }}
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  <TextField
                    fullWidth
                    size="small"
                    id="email"
                    name="email"
                    label="Email Address"
                    variant="outlined"
                    margin="normal"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={(e) => {
                      formik.handleBlur(e);
                      handleInputBlur();
                    }}
                    onFocus={handleInputFocus}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    sx={{ mb: 2 }}
                    InputProps={{
                      sx: {
                        borderRadius: "8px",
                        "&:hover fieldset": {
                          borderColor: "#f59e0b !important",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#f59e0b !important",
                          boxShadow: "0 0 0 2px rgba(245, 158, 11, 0.2)",
                        },
                      },
                    }}
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  <TextField
                    fullWidth
                    size="small"
                    id="message"
                    name="message"
                    label="Your Message"
                    variant="outlined"
                    margin="normal"
                    multiline
                    rows={isMobile ? 3 : 4}
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={(e) => {
                      formik.handleBlur(e);
                      handleInputBlur();
                    }}
                    onFocus={handleInputFocus}
                    error={
                      formik.touched.message && Boolean(formik.errors.message)
                    }
                    helperText={formik.touched.message && formik.errors.message}
                    sx={{ mb: 3 }}
                    InputProps={{
                      sx: {
                        borderRadius: "8px",
                        "&:hover fieldset": {
                          borderColor: "#f59e0b !important",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#f59e0b !important",
                          boxShadow: "0 0 0 2px rgba(245, 158, 11, 0.2)",
                        },
                      },
                    }}
                  />
                </motion.div>

                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      endIcon={
                        formik.isSubmitting ? (
                          <CircularProgress size={24} sx={{ color: "white" }} />
                        ) : isSuccess ? (
                          <CheckIcon />
                        ) : (
                          <SendIcon />
                        )
                      }
                      disabled={formik.isSubmitting}
                      sx={{
                        bgcolor: isSuccess ? "#10b981" : "#f59e0b",
                        color: "white",
                        fontWeight: 600,
                        px: 4,
                        py: 1.5,
                        borderRadius: "12px",
                        "&:hover": {
                          bgcolor: isSuccess ? "#10b981" : "#e67e22",
                        },
                        transition: "all 0.3s ease",
                        minWidth: "200px",
                        boxShadow: isSuccess
                          ? "0 4px 14px rgba(16, 185, 129, 0.4)"
                          : "0 4px 14px rgba(245, 158, 11, 0.3)",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <AnimatePresence mode="wait">
                        {isSuccess ? (
                          <motion.span
                            key="success"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                          >
                            Message Sent!
                          </motion.span>
                        ) : (
                          <motion.span
                            key="default"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                          >
                            {formik.isSubmitting
                              ? "Sending..."
                              : "Send Message"}
                          </motion.span>
                        )}
                      </AnimatePresence>

                      {isSuccess && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 20, opacity: 0 }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          style={{
                            position: "absolute",
                            width: "10px",
                            height: "10px",
                            background: "rgba(255, 255, 255, 0.5)",
                            borderRadius: "50%",
                          }}
                        />
                      )}
                    </Button>
                  </motion.div>
                </Box>
              </form>
            </motion.div>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Contact;
