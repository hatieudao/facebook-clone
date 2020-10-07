import React from 'react';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App__body">
        <div className="App__body__sidebar">
          <SideBar />
        </div>
        <div className="App__body__feed">
          <Feed />
        </div>
        <div className="App__body__widgets">
          <Widgets />
        </div>
      </div>
    </div>
  );
}

export default App;
