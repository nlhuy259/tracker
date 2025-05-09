import React, { useMemo, useState } from "react";
import './App.css'; // CSS for App component
import './styles/GlobalStyle.css'; // Global styles
import Orb from "./components/Orb/Orb";
import Navigation from "./components/Navigation/Navigation";
import Dashboard from "./components/Dashboard/Dashboard";
import Income from "./components/Income/Income";
import Expenses from "./components/Expenses/Expenses";
import Transaction from "./components/Transaction/Transaction"


function App() {
  const [active, setActive] = useState(1)
  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Transaction/>
      case 3:
        return <Income />
      case 4: 
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }
  const orbMemo = useMemo(() => {
    return <Orb />
  },[])

  return (
    <div className="app">
      {orbMemo}
      <div className="main-layout">
        <Navigation active={active} setActive={setActive} />
        <main className="main-content">
          {displayData()}
        </main>
      </div>
    </div>
  );
}

export default App;
