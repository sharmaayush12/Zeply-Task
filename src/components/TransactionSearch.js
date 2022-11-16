import React, { Component } from 'react'
import {Link,Routes,Route} from 'react-router-dom'
import BTCInput from './TransactionSearch/BTCInput'
import BTCOutput from './TransactionSearch/BTCOutput'
import TransactionFee from './TransactionSearch/TransactionFee'

export default class TransactionSearch extends Component {
  render() {
    return (
      <div>
        <div className='btnHeader'>
            <Link to="BTCOutput" className='btn btn-success'>Total BTC Output</Link>
            <Link to="BTCInput" className='btn btn-success'>Total BTC Input</Link>
            <Link to="TransactionDetails" className='btn btn-success'>Transaction Details</Link>
        </div>

        <div>
            <Routes>
                <Route path="BTCOutput" exact element={<BTCOutput/>}/>
                <Route path="BTCInput" exact element={<BTCInput/>}/>
                <Route path="TransactionDetails" exact element={<TransactionFee/>}/>
            </Routes>
        </div>

      </div>
    )
  }
}
