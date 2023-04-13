import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { Router } from "./router/Router";

const user = {
  name: "test",
  image: "https://test",
  email: "test",
  phone: "00-11",
  company: {
    name: "test株",
  },
};

function App() {
  return <PrimaryButton user={user}>テスト</PrimaryButton>;
}

export default App;
