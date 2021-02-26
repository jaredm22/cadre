import './App.css';
import getHello from "./apiHandle"
import React, { useState, useEffect } from 'react';






function App() {
  const [curr, sett] = useState("");
  
  useEffect(() => {
    getHello().then(res => sett(res.data.students[0]['firstname']))
  }, []);
  
  return (
    <div className="App">
      <p>Wassup, {curr}!</p>
    </div>
  );
}

export default App;
