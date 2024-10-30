import logo from './logo.svg';
import './App.css';
import AppRouter from './config/AppRouter/AppRouter';
import axios from "axios"
import { useEffect, useState } from "react"

function App() {


  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
