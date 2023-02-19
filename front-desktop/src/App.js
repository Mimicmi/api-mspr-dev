import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavbarMenu from './components/NavbarMenu/NavbarMenu';
import MyRoutes from './MyRoutes';
import { UserProvider } from './services/UserService';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <NavbarMenu></NavbarMenu>
        <MyRoutes></MyRoutes>
      </UserProvider>
    </div>
  );
}

export default App;
