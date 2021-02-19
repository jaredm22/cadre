import './App.css';
import getHello from "./apiHandle"
import React, { useState, useEffect } from 'react';






function App() {
  const [curr, sett] = useState("");
  
  useEffect(() => {
    getHello().then(res => sett(res.data['greeting']))
  }, []);
  
  return (
    <div className="App">
      <p>{curr}</p>
    </div>
  );
}

export default App;
