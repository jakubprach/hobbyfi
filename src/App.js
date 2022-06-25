import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./views/home/Home";
import { Profile } from './views/profile/profile';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/profile" element={<Profile />}>
          <Route index element={<Profile />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
