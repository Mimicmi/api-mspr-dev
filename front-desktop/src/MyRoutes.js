import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
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

import CustomRoute from "./services/Route/CustomRoute";
import EditPlant from "./scenes/EditPlant/EditPlant";
import UserProfile from "./scenes/UserProfile/UserProfile";
import Post from "./components/Post/Post";

function MyRoutes() {
  return (
    <Router>
        <Routes>

          <Route path="/"  element={<CustomRoute roles={["*"]} component={<Home/>} />} />
          <Route path="/home"  element={<CustomRoute roles={["*"]} component={<Home/>} />} />

          <Route path="/login"  element={<CustomRoute roles={["*"]} component={<Login/>} />} />
          <Route path="/sign-in"  element={<CustomRoute roles={["*"]} component={<SignIn/>} />} />

          <Route path="/account"  element={<CustomRoute roles={["ROLE_CLIENT", "ROLE_BOTANIST"]} component={<UserProfile/>} />} />

          <Route path="/my-plants" element={<CustomRoute roles={["ROLE_CLIENT"]} component={<Plants/>} />} />
          <Route path="/my-plant/:plant_id"  element={<CustomRoute roles={["ROLE_CLIENT"]} component={<Plant/>} />} />
          <Route path="/my-plant/edit/:plant_id"  element={<CustomRoute roles={["ROLE_CLIENT"]} component={<EditPlant/>} />} />
          <Route path="/my-plants/add"  element={<CustomRoute roles={["ROLE_CLIENT"]} component={<CreatPlant/>} />} />

          <Route path="/les-annonces"  element={<CustomRoute roles={["ROLE_CLIENT"]} component={<Annonces/>} />} />
          <Route path="/les-annonces/:mine"  element={<CustomRoute roles={["ROLE_CLIENT"]} component={<Annonces/>} />} />
          <Route path="/annonce/add"  element={<CustomRoute roles={["ROLE_CLIENT"]} component={<CreateAnnonce/>} />} />
          <Route path="/annonce/:advertisement_id"  element={<CustomRoute roles={["ROLE_CLIENT"]} component={<Advertisement/>} />} />

          <Route path="/species"  element={<CustomRoute roles={["ROLE_BOTANIST"]} component={<SpeciesCRUD/>} />} />

          <Route path="/post"  element={<CustomRoute roles={["ROLE_BOTANIST", "ROLE_CLIENT"]} component={<Post/>} />} />

          <Route path="/404"  element={<CustomRoute roles={["*"]} component={<ErrorNotFound/>} />} />
          <Route path="/403"  element={<CustomRoute roles={["*"]} component={<ErrorServer/>} />} />

          <Route path="*" element={ <ErrorNotFound />} />

        </Routes>
    </Router>
  );
}

export default MyRoutes;
