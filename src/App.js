import React from 'react';
import TopBar from './components/TopBar';
import './App.css';
import CardBody from './components/CardBody';

function App() {
  return (
    <div className="card">
      <div className='second-step'>
        <div className='third-step'>
          <div className='main-div'>
            <div className='small-card'>
              <TopBar />
              <CardBody />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
