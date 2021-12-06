import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Alert } from "./components/Alert";
import { NavBar } from "./components/NavBar";
import { AlertState } from "./contexts/alert/AlertState";
import { FirebaseState } from "./contexts/firebase/FirebaseState";
import { About } from "./pages/About";
import { Home } from "./pages/Home";

function App() {
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <NavBar />
          <div className="container pt-4">
            <Alert />
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
