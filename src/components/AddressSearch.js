import React, { Component } from 'react'
import {Link,Route,Routes} from 'react-router-dom'
import ConfirmTransaction from './AddressSearch/ConfirmTransaction'
import TotalBalance from './AddressSearch/TotalBalance'
import TotalReceived from './AddressSearch/TotalReceived'
import TotalSpent from './AddressSearch/TotalSpent'
import TotalUnSpent from './AddressSearch/TotalUnSpent'

export default class AddressSearch extends Component {
  render() {
    return (
      <div>
        <div className='btnHeader'>
            <Link to="ConfirmTransaction" className='btn btn-success'>Confirm Transaction</Link>
            <Link to="TotalReceived" className='btn btn-success'>Total BTC Received</Link>
            <Link to="TotalSpent" className='btn btn-success'>Total BTC Spent</Link>
            <Link to="TotalUnSpent" className='btn btn-success'>Total BTC UnSpent</Link>
            <Link to="TotalBalance" className='btn btn-success'>Current Address Balance</Link>
        </div>

        <div>
            <Routes>
                <Route path="/ConfirmTransaction" exact element={<ConfirmTransaction/>}/>
                <Route path="/TotalBalance" exact element={<TotalBalance/>}/>
                <Route path="/TotalReceived" exact element={<TotalReceived/>}/>
                <Route path="/TotalSpent" exact element={<TotalSpent/>}/>
                <Route path="/TotalUnSpent" exact element={<TotalUnSpent/>}/>
            </Routes>
        </div>
      </div>
    )
  }
}
