import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Signin, Signup, About, Profile } from "./pages";
import { Header } from "./components";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
