import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoryPage from '../pages/CategoryPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/categories" element={<CategoryPage/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;