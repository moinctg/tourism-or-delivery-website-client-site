import {
  BrowserRouter as Router,
  Switch,
  Route,
  
}
 from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import Login from "./Pages/Login/Login/Login";
import Banner from "./Pages/Home/Banner/Banner";
import NotFound from "./Pages/NotFound/NotFound";
import AddService from "./Pages/AdminPanel/AddService/AddService";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Booking from "./Pages/Booking/Booking";
import Contact from "./Pages/Home/Contact/Contact";
import Dashboard from "./Pages/AdminPanel/Dashboard/Deshboard";
import ManageServices from "./Pages/AdminPanel/ManageService/ManageSevice";

function App() {
  return (
    <div className="App">
    <AuthProvider>
      <Router>
      <Header></Header>
      
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/banner'>
          <Banner></Banner>
          </Route>
          <Route path='/contact'>
          <Contact></Contact>
          </Route>
          <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
          <PrivateRoute path="/dashboard">
          <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/addServices">
          <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/manageService">
          <ManageServices></ManageServices>
            </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
        
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
