import React, { Suspense, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css';
import Main from './Pages/Main';

function App() {
  return (<div>
    <Main />
  </div>)
}

export default App;
