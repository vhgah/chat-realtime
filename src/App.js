import "./App.css";
import Login from "./components/login/Login";
import Chatroom from "./components/chatroom/Chatroom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AuthProvider from "./components/context/AuthProvider";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route component={Login} path="/login" />
          <Route component={Chatroom} path="/" />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
