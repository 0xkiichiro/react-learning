import Card from "./components/card/Card";
import data from "./util/data";

function App() {
  return (
    <>
      {data.map((item) => {
        const { id, dil, img, btnName } = item;
        return <Card key={id} dil={dil} img={img} btnName={btnName} />;
      })}
    </>
  );
}

export default App;
