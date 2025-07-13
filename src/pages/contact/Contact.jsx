import { useRef, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Container,
} from "@mui/material";
import { Email as EmailIcon, Send as SendIcon } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Notification from "../../components/notification/Notification";
import "./Contact.scss";

const Contact = () => {
  const formRef = useRef();
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    type: "", // 'success' or 'error'
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      message: Yup.string().required("Required").min(2, "Message too short"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        await emailjs.sendForm(
          "service_yqlqgsc",
          "template_vlciamq",
          formRef.current,
          "HUCray3_ixBgJXj-p"
        );

        resetForm();
        setNotification({
          open: true,
          message: "Message sent successfully!",
          type: "success",
        });
      } catch (error) {
        console.error("Error:", error);
        setNotification({
          open: true,
          message: "Failed to send message. Please try again.",
          type: "error",
        });
      } finally {
        setSubmitting(false);

        // Auto-hide notification after 5 seconds
        setTimeout(() => {
          setNotification({ ...notification, open: false });
        }, 5000);
      }
    },
  });

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };
  return (
    <Container component="main" className="contact-container" maxWidth="sm">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="contact-content"
      >
        <Box className="contact-card">
          <Box className="contact-header">
            <EmailIcon className="contact-icon" />
            <Typography variant="h5" className="contact-title">
              Contact Me
            </Typography>
          </Box>

          <form
            onSubmit={formik.handleSubmit}
            className="contact-form"
            ref={formRef}
          >
            <TextField
              fullWidth
              size="small"
              id="name"
              name="name"
              label="Name"
              variant="outlined"
              margin="dense"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              className="form-field"
            />

            <TextField
              fullWidth
              size="small"
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              margin="dense"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              className="form-field"
            />

            <TextField
              fullWidth
              size="small"
              id="message"
              name="message"
              label="Message"
              variant="outlined"
              margin="dense"
              multiline
              rows={3}
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
              className="form-field"
            />

            <Button
              type="submit"
              variant="contained"
              size="medium"
              endIcon={
                formik.isSubmitting ? (
                  <CircularProgress size={20} />
                ) : (
                  <SendIcon />
                )
              }
              disabled={formik.isSubmitting}
              className="submit-button"
              sx={{ mt: 1 }}
            >
              {formik.isSubmitting ? "Sending" : "Send"}
            </Button>
          </form>
        </Box>
      </motion.div>
      {notification.open && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={handleCloseNotification}
        />
      )}
    </Container>
  );
};

export default Contact;
