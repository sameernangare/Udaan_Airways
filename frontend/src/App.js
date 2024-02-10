import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Footer from "./components/Footer";
import Register from "./routes/Register";
import SignIn from "./routes/SignIn";
import Logout from "./routes/Logout";
import PageNotFound from "./routes/PageNotFound";
import ProtectedRoute from "./routes/ProtectedRoute";
import { UserProfile } from "./UserPages/UserProfile";
import BookFlight from "./UserPages/BookFlight";
import { Dashboard } from "./pages/Dashboard";
import UserBooking from "./UserPages/UserBooking";
import { GetUsers } from "./pages/GetUsers";
import { AddFlight } from "./pages/AddFlight";
import { FlightDetails } from "./pages/FlightDetails";
import { UpdateFlight } from "./pages/UpdateFlight";
import SelectSeat from "./UserPages/SelectSeat";
import ConfirmBooking from "./UserPages/ConfirmBooking";
import { PastBookings } from "./UserPages/PastBookings";

import "react-toastify/dist/ReactToastify.css";

// Importing Context and Reducer for state management
import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer/UseReducer";
export const UserContext = createContext();

function App() {
  // Using the useReducer hook to manage state with the specified reducer function and initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  // Rendering the main structure of the application
  return (
    <div className="App">
      {/* Providing the UserContext to the entire application */}
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar></Navbar>

        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/userhome" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/bookflight" element={<BookFlight />} />
          <Route path="/logout" element={<Logout />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/addPassengers" element={<UserBooking />} />
            <Route path="/selectseat" element={<SelectSeat />} />
            <Route path="/confirmBooking" element={<ConfirmBooking />} />
            <Route path="/userhistory" element={<PastBookings />} />
          </Route>

          <Route path="/admin" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/getUsers" element={<GetUsers />} />
          <Route path="/addFlight" element={<AddFlight />} />
          <Route path="/getFlight" element={<FlightDetails />} />
          <Route path="/updateflight" element={<UpdateFlight />} />
        </Routes>
        <Footer></Footer>
      </UserContext.Provider>
    </div>
  );
}

export default App;
