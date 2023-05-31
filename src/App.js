import "./App.css";
import { Navbar } from "./components/Navbar";
import { TextContainer } from "./components/TextContainer";
import { Todos } from "./components/Todos";

function App() {
  return (
    <>
      <Navbar />
      <TextContainer />
      <Todos />
    </>
  );
}

export default App;
