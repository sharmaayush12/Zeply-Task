import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import React, { Component }  from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import ConfirmTransaction from './components/AddressSearch/ConfirmTransaction'
import TotalBalance from './components/AddressSearch/TotalBalance'
import TotalReceived from './components/AddressSearch/TotalReceived'
import TotalSpent from './components/AddressSearch/TotalSpent'
import TotalUnSpent from './components/AddressSearch/TotalUnSpent'
import BTCInput from './components/TransactionSearch/BTCInput'
import BTCOutput from './components/TransactionSearch/BTCOutput'
import TransactionFee from './components/TransactionSearch/TransactionFee'

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <div className='row no-gutter mx-0'>
        <div className='col-md-2 sidebar'>
          <Sidebar/>
        </div>

        <div className='col-md-10 side-section'>
          <Routes>
                <Route path="/ConfirmTransactiosn" exact element={<ConfirmTransaction/>}/>
                <Route path="/TotalBalance" exact element={<TotalBalance/>}/>
                <Route path="/TotalReceived" exact element={<TotalReceived/>}/>
                <Route path="/TotalSpent" exact element={<TotalSpent/>}/>
                <Route path="/TotalUnSpent" exact element={<TotalUnSpent/>}/>
                <Route path="BTCOutput" exact element={<BTCOutput/>}/>
                <Route path="BTCInput" exact element={<BTCInput/>}/>
                <Route path="TransacsionDetails" exact element={<TransactionFee/>}/>     
          </Routes>
        </div>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
