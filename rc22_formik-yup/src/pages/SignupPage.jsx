import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Avatar from "@mui/material/Avatar";
import { FaLock } from "react-icons/fa";
import { Formik } from "formik";

import { signupSchema } from "../components/signupSchema";
import SignupForm from "../components/SignupForm";

const SignupPage = () => {
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
          validationSchema={signupSchema}
          onSubmit={(values, actions) => {
            alert(`fullName: ${values.fullName}`);
            alert(`email: ${values.email}`);
            alert(`password: ${values.password}`);
            actions.resetForm();
            actions.setSubmitting(false);
          }}
          component={(props) => <SignupForm {...props} />}
        ></Formik>
      </Container>
    </div>
  );
};

export default SignupPage;
