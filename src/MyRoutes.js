import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import App from "./App";
import Plants from "./components/Plants/Plants";
import Annonces from "./scenes/Annonces/Annonces";
import ErrorNotFound from "./scenes/Error/ErrorNotFound";
import ErrorServer from "./scenes/Error/ErrorServer";
import CreatPlant from "./scenes/CreatePlant/CreatePlant";
import Plant from "./scenes/Plant/Plant";
import SpeciesCRUD from "./scenes/SpeciesCRUD/SpeciesCRUD";
import Advertisement from "./components/Advertisement/Advertisement";
import CreateAnnonce from "./scenes/CreateAnnonce/CreateAnnonce";
import Login from "./scenes/Login/Login";
import SignIn from "./scenes/SignIn/SignIn";
import Home from "./scenes/Home/Home";

function MyRoutes() {
  return (
    <Router>
        <Routes>

          <Route path="/"  element={<Home />} />
          <Route path="/home"  element={<Home />} />

          <Route path="/login"  element={<Login />} />
          <Route path="/sign-in"  element={<SignIn />} />

          <Route path="/my-plants"  element={<Plants />} />
          <Route path="/my-plant/:plant_id"  element={<Plant />} />
          <Route path="/my-plants/add"  element={<CreatPlant />} />
          <Route path="/les-annonces" element={ <Annonces />} />
          <Route path="/annonce/add" element={ <CreateAnnonce />} />
          <Route path="/annonce/:advertisement_id" element={ <Advertisement />} />
          <Route path="/species" element={ <SpeciesCRUD />} />

          <Route path="404" element={ <ErrorNotFound />} />
          <Route path="403" element={ <ErrorServer />} />

          <Route path="*" element={ <ErrorNotFound />} />

        </Routes>
    </Router>
  );
}

export default MyRoutes;
