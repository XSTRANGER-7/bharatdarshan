// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import { MetaMaskUIProvider } from "@metamask/sdk-react-ui";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import NewPage from "../src/Newpage"; // Your new page component
import "./index.css";
import Game from "./components/Game";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MetaMaskUIProvider
      sdkOptions={{
        dappMetadata: {
          name: "Bharat Darshan",
        },
        infuraAPIKey: process.env.INFURA_API_KEY,
        // Other options.
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/new-page" element={<NewPage />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </MetaMaskUIProvider>
  </React.StrictMode>
);
