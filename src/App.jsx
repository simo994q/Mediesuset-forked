import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Camppage } from "./pages/Camppage";
import { Frontpage } from "./pages/Frontpage";
import { Eventpage } from "./pages/Eventpage";
import { Infopage } from "./pages/Infopage";
import { Ticketpage } from "./pages/Ticketpage";
import { Loginpage } from "./pages/Loginpage";
import { MainLayout } from "./layout/MainLayout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Frontpage />} />
            <Route path="/forside" element={<Frontpage />} />
            <Route path="/events" element={<Eventpage />} />
            <Route path="/camps" element={<Camppage />} />
            <Route path="/info" element={<Infopage />} />
            <Route path="/billetter" element={<Ticketpage />} />
            <Route path="/login" element={<Loginpage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
