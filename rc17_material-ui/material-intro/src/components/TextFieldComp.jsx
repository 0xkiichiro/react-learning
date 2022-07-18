import { Container, Box, Button, Typography, TextField } from "@mui/material";

const TextFieldComp = () => {
  //! change to true to see the input red
  let error = false;
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h4" align="left" color="error.light">
        Typography, Buttons, Container, Box
      </Typography>
      <Box
        sx={{
          mt: 4,
          textAlign: "center",
        }}
      >
        <TextField
          label="email"
          type="email"
          placeholder="enter your mail svp"
          fullWidth
          error={error}
          helperText={error && "incorrect email"}
        />
        <TextField
          margin="normal"
          label="password"
          type="password"
          placeholder="enter your password svp"
          fullWidth
          error={error}
          helperText={error && "incorrect password"}
        />
      </Box>
      <Button type="submit" variant="contained" sx={{ mt: 4 }}>
        SUBMIT
      </Button>
    </Container>
  );
};

export default TextFieldComp;
