import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Sidebar extends Component {
constructor(props) {
  super(props)

  this.state = {
     showAddress:false,
     showTransaction:false
  }
}

  render() {
    return (
      <div>
        <ul>
            <li>
              <button className='sidebtn d-flex' onClick={()=>{this.setState({showAddress:!this.state.showAddress})}}>
                <img src={require('../Images/bitcoin-wallet.png')} className="icon"/>
                <Link to="Address">
                    Address Search
                </Link>
                {
                  this.state.showAddress==true
                  ?
                  <i class="fa fa-angle-up" aria-hidden="true"></i>
                  :
                  <i class="fa fa-angle-down" aria-hidden="true"></i>
                }
              </button>

              {
                this.state.showAddress
                ?
                <div className='submenu'>
                <Link to="ConfirmTransaction">
                  <li>Confirm Transaction</li>
                </Link>

                <Link to="TotalReceived">
                  <li>Total BTC Received</li>
                </Link>

                <Link to="TotalSpent">
                  <li>Total BTC Spent</li>
                </Link>

                <Link to="TotalUnSpent">
                  <li>Total BTC UnSpent</li>           
                </Link>

                <Link to="TotalBalance">
                  <li>Current Address Balance</li>
                </Link>
                </div>
                :
                null
              }
            </li>

                <li>
                  <button className='sidebtn d-flex' onClick={()=>{this.setState({showTransaction:!this.state.showTransaction})}}>
                    <img src={require('../Images/exchange.png')} className="icon"/>
                    <Link to="Transaction">
                        Transaction Search
                    </Link>
                    {
                      this.state.showTransaction==true
                      ?
                      <i class="fa fa-angle-up" aria-hidden="true"></i>
                      :
                      <i class="fa fa-angle-down" aria-hidden="true"></i>
                    }
                  </button>

                  {
                this.state.showTransaction
                ?
                <div className='submenu'>
                  <Link to="BTCInput">
                    <li>Total Input</li>
                  </Link>

                  <Link to="BTCOutput">
                    <li>Total Output</li>
                  </Link>

                  <Link to="TransactionDetails">
                    <li>Transaction Details</li>
                  </Link>
                </div>
                :
                null
              }
                </li>
        </ul>
      </div>
    )
  }
}
