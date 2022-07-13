import Footer from "./components/Footer";
import MyNavbar from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import NotFound from "./pages/NotFound";
import InstructorDetails from "./pages/InstructorDetails";
import Paths from "./pages/Paths";
import FullStack from "./pages/FullStack";
import Aws from "./pages/Aws";
import PrivateRouter from "./pages/PrivateRouter";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="instructors" element={<Instructors />} />
          <Route path="instructors/:id" element={<InstructorDetails />} />
          //! nested routing
          <Route path="paths" element={<Paths />}>
            <Route index element={<FullStack />} />
            <Route path="fullstack" element={<FullStack />} />
            <Route path="aws" element={<Aws />} />
          </Route>
          <Route path="/contact" element={<PrivateRouter />}>
            <Route path="" element={<Contact />} />
          </Route>
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
