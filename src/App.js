import DashBoard from "./components/DashBoard/DashBoard";
import Login from "./components/Login";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" Component={Login}/>
        <Route exact path="/user" Component={DashBoard}/>
      </Routes>
    </Router>
     
    </>
    
    
  );
}

export default App;
