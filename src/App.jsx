import React from 'react';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Feed from './components/Feed';
import Chat from './components/Chat';
import Login from './components/Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();

  if (!user) return <Login />
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
        <div className="App__body__chat">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default App;
