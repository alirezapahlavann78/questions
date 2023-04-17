import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import FreqQuestPage from "./pages/FreqQuest/FreqQuest";
import Page404 from "./pages/404/404";

function App() {
  return (
      <Layout>
        <Routes>
          <Route path="*" element={<Page404 />} />
          <Route index element={<Home />} />
          <Route path="freqquest" element={<FreqQuestPage />} />
        </Routes>
      </Layout>
  );
}

export default App;
