import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import { FaLock } from "react-icons/fa";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const LoginPage = () => {
  return (
    <div>
      <Container maxWidth="sm" sx={{ mt: "10rem", textAlign: "center" }}>
        <Avatar
          sx={{
            backgroundColor: "primary.main",
            m: "auto",
            width: 60,
            height: 60,
          }}
          sizes="100px"
        >
          <FaLock size="40" />
        </Avatar>
        <Typography variant="h4" align="center" mb={4} color="primary.light">
          Login
        </Typography>
        <Formik
          initialValues={{ fullname: "", email: "", password: "" }}
          validationSchema={Yup.object().shape({
            fullName: Yup.string()
              .max(20, "Must be 20 or less characters.")
              .required(),

            email: Yup.string().email("That's not an email address").required(),

            password: Yup.string()
              .min(
                8,
                "Passwords with less than 8 characters get decoded by bots in less than 3sec"
              )
              .max(
                16,
                "Don't get overexcited 16 characters is max you can use"
              ),
          })}
          onSubmit={(values, actions) => {
            alert(`fullName: ${values.fullName}`);
            alert(`email: ${values.email}`);
            alert(`password: ${values.password}`);
            actions.resetForm();
            actions.setSubmitting(false);
          }}
        >
          {({ values, handleChange, errors, touched }) => (
            <Form>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <TextField
                  label="Full Name"
                  name="fullName"
                  id="fullName"
                  type="type"
                  variant="outlined"
                  value={values.fullName}
                  onChange={handleChange}
                  helperText={touched.fullName && errors.fullName}
                  error={touched.fullName && Boolean(errors.fullName)}
                />
                <TextField
                  label="Email"
                  name="email"
                  id="email"
                  type="email"
                  variant="outlined"
                  value={values.email}
                  onChange={handleChange}
                  helperText={touched.email && errors.email}
                  error={touched.email && Boolean(errors.email)}
                />
                <TextField
                  label="Password"
                  name="password"
                  id="password"
                  type="password"
                  variant="outlined"
                  value={values.password}
                  onChange={handleChange}
                  helperText={touched.password && errors.password}
                  error={touched.password && Boolean(errors.password)}
                />
                <Button type="submit" variant="contained" size="large">
                  Submit
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default LoginPage;
