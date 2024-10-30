import Login from "./pages/LoginPages";
import Home from "./pages/HomePages";
import { useSession } from "./hook/useSession";

const App = () => {
  const { user } = useSession();
  return user ? <Home /> : <Login />;
};

export default App;
