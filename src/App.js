import "./App.css";
import Navbar from "./components/Navbar";
import Quotes from "./components/Quotes";

function App() {
  console.log(process.env.REACT_APP_QUOTES_API);
  return (
    <>
      <Navbar />
      <Quotes />
    </>
  );
}

export default App;
