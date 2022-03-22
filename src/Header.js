import { useState, useEffect } from 'react';

import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';


function Header(props) {
  let navigate = useNavigate();
  useEffect(() => {
    if (!sessionStorage.getItem("username")) {
      return navigate("/Login");
    }
  });
  return (
    <div>

    </div>
  )
}

export default Header