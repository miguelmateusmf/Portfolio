import "./App.css";
import Nav from "./components/Nav";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
import Volunteer from "./components/Volunteer";
import Footer from "./components/Footer";
import MissingPage from "./components/MissingPage";

const Aboutme = React.lazy(() => import("./components/Aboutme"));
const Projects = React.lazy(() => import("./components/Projects"));

function App() {
  const [theme, setTheme] = React.useState("light");

  return (
    <div className={theme}>
      <div>
        <div className="barnav">
          <Nav toogleTheme={setTheme} />
        </div>
        <div className="container">
          <React.Suspense fallback={<Loading />} />
          <Routes>
            <Route
              path="/"
              element={
                <React.Suspense fallback={<Loading />}>
                  <Aboutme />
                </React.Suspense>
              }
            />
            <Route
              path="/aboutme"
              element={
                <React.Suspense fallback={<Loading />}>
                  <Aboutme />
                </React.Suspense>
              }
            />
            <Route
              path="/projects"
              element={
                <React.Suspense fallback={<Loading />}>
                  <Projects />
                </React.Suspense>
              }
            />
            <Route
              path="/volunteering"
              element={
                <React.Suspense fallback={<Loading />}>
                  <Volunteer />
                </React.Suspense>
              }
            />
            <Route
              path="*"
              element={
                <React.Suspense fallback={<Loading />}>
                  <MissingPage />
                </React.Suspense>
              }
            />
          </Routes>
        </div>
        <div className="stickybot">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
