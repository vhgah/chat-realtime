import "./App.css";
import Login from "./components/login/Login";
import Chatroom from "./components/chatroom/Chatroom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AuthProvider from "./components/context/AuthProvider";
import AppProvider from "./components/context/AppProvider";
import AddRoomModal from "./components/modals/AddRoomModal";
import InviteMemberModal from "./components/modals/InviteMemberModal";

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppProvider>
          <Switch>
            <Route component={Login} path="/login" />
            <Route component={Chatroom} path="/" />
          </Switch>
          <AddRoomModal />
          <InviteMemberModal />
        </AppProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
