import React, { Component } from 'react'
import {Modal} from 'react-bootstrap-v5'
import axios from 'axios'

export default class TotalBalance extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       showModal:false,
       Balance:'',
       address:''
    }
  }

  GetBalance=async()=>{
    await axios.get(`https://blockchain.info/q/addressbalance/${this.state.address}`,{
      confirmations:3
    })
    .then((res)=>{
      this.setState({showModal:true,Balance:(res.data)*10**18})
    })
  }

  render() {
    return (
      <div style={{textAlign:'center'}}>
        <h1>Total Balance</h1>
        <div className='main-section d-flex'>
          <input onChange={(item)=>this.setState({address:item.target.value})} type='text' className='form-control input-form' placeholder="Enter Your Address"/>
          <button className='btn btn-info' onClick={()=>this.GetBalance()}>Get Balance</button>
        </div>

        <Modal
          show={this.state.showModal}
          className="modal-style"
          animation="fade"
          backdrop="static"
        >
          <div className='modals-content'>
            <button className='btn btn-danger close-btn' onClick={()=>{this.setState({showModal:false})}}>
              <i class="fa fa-times" aria-hidden="true"></i>
            </button>

            <div className='main-content'>
              <label className='d-flex label-text'>
                <h4>Total BTC Balance:</h4>
                <h6>{parseInt(this.state.Balance).toFixed(3)} BTC</h6>
              </label>
            </div>

          </div>
        </Modal>
      </div>
    )
  }
}
