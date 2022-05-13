import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicCounter from "./pages/basic/Counter/classComponent";
import BasicReact from "./pages/basic/React/index";
import BasicLogin from "./pages/basic/Login";
import BasicOrder from "./pages/basic/Order";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import SignUp from "./pages/SignUp";
import Order from "./pages/Order";
import Details from "./pages/Details";
import ViewAll from "./pages/ViewAll";
import ManageMovie from "./pages/ManageMovie";
import ManageSchedule from "./pages/ManageSchedule";
import Dashboard from "./pages/Dashboard";

// routing private/public
// routingnya ntar aja
import PrivateRoute from "./helpers/route/privateRoute";
import PublicRoute from "./helpers/route/publicRoute";

// import Header from "./components/HeaderSignedIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="basic/counter" element={<BasicCounter />} />
        <Route path="basic/react" element={<BasicReact />} />
        <Route path="basic/login" element={<BasicLogin />} />
        <Route path="basic/order" element={<BasicOrder />} />

        {/* <Route element={<PublicRoute isAdmin={true}/>}> */}
        {/* <Route path="basic/react" element={<BasicReact />} />
          <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        {/* </Route> */}
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />

        {/* <Route element={<PrivateRoute />}>
          <Route path="basic/react" element={<BasicReact />} />
          <Route path="/home" element={<Home />} />
        </Route> */}

        {/* <Route path="login" element={<Login />} /> */}

        <Route path="/payment" element={<Payment />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/order" element={<Order />} />
        <Route path="/details" element={<Details />} />
        <Route path="/view-all" element={<ViewAll />} />
        <Route path="/manage-movie" element={<ManageMovie />} />
        <Route path="/manage-schedule" element={<ManageSchedule />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* <Route path="header" element={<Header />} /> */}
        {/* <Route path="footer" element={<Footer />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
