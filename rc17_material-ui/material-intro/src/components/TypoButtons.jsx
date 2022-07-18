import { Typography, Container, Button } from "@mui/material";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

const TypoButtons = () => {
  return (
    <div>
      <Container maxWidth="md">
        <Typography
          variant="h1"
          component="h4"
          align="left"
          color="error.light"
          backgroundColor="black"
          sx={{
            background: "lightgray",
            mt: 4,
          }}
        >
          Typography, Buttons, Container, Box
        </Typography>
        <Typography
          variant="button"
          align="justify"
          color="error.light"
          backgroundColor="lightgray"
          sx={{
            display: "block",
            mt: 4,
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          commodi, cupiditate similique voluptatum totam doloremque maxime
          corporis et delectus perferendis dolor perspiciatis, molestiae eos nam
          natus cum consequatur dicta! Numquam!
        </Typography>
      </Container>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            // alignItems: "center",
            gap: 2,
            mt: 4,
          }}
        >
          <Button variant="contained">CLICK</Button>
          <Button variant="outlined" color="success" startIcon={<SendIcon />}>
            SEND
          </Button>
          <Button variant="contained" color="warning" endIcon={<DeleteIcon />}>
            DELETE
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default TypoButtons;
