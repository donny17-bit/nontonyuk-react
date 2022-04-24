import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicCounter from "./pages/basic/Counter/classComponent";
import BasicReact from "./pages/basic/React/index";
import BasicLogin from "./pages/basic/Login";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Payment from "./pages/Payment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="basic/counter" element={<BasicCounter />} />
        <Route path="basic/react" element={<BasicReact />} />
        <Route path="basic/login" element={<BasicLogin />} />
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
        {/* <Route path="header" element={<Header />} />
        <Route path="footer" element={<Footer />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
