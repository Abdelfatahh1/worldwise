import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import NavLinks from "./components/NavLinks";
import Header from "./components/Header";
import AppLayOut from "./pages/AppLayOut";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import CityInf from "./components/CityInf";
import CitiesForm from "./components/CitiesForm";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      <AuthProvider>
        <CitiesProvider>
          <BrowserRouter>
            <Routes>
              <Route index element={<HomePage></HomePage>}></Route>
              <Route path="/product" element={<Product></Product>}></Route>
              <Route path="/pricing" element={<Pricing></Pricing>}></Route>
              <Route
                path="/applayout"
                element={
                  <ProtectedRoute>
                    <AppLayOut></AppLayOut>
                  </ProtectedRoute>
                }
              >
                <Route
                  index
                  element={
                    <p>
                      👋 Add your first city by clicking on a city on the map
                    </p>
                  }
                ></Route>
                <Route path="cities/:id" element={<CityInf></CityInf>}></Route>{" "}
                <Route path="cities" element={<CityList></CityList>}></Route>
                <Route
                  path="countries"
                  element={<CountryList></CountryList>}
                ></Route>
                <Route path="form" element={<CitiesForm></CitiesForm>}></Route>
              </Route>
              <Route path="/login" element={<Login></Login>}></Route>
            </Routes>
          </BrowserRouter>
        </CitiesProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
