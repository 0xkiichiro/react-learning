import CardStyle, { MainContainer, Header, Button } from "./Card.style";
import defaultImage from "../../assets/default-image.jpg";
import { useNavigate } from "react-router-dom";

const Card = ({ recipe }) => {
  const navigate = useNavigate();

  return (
    <MainContainer wrap="wrap">
      {recipe.map(({ item }, index) => (
        <Card key={index}>
          <Header>{item.label}</Header>
          <Image src={item.image || defaultImage} />
          <Button onClick={() => navigate("details", { state: item, replace })}>
            View More
          </Button>
        </Card>
      ))}
    </MainContainer>
  );
};

export default Card;
