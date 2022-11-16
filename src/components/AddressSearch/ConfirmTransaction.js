import React, { Component } from 'react'
import {Modal} from 'react-bootstrap-v5'
import axios from 'axios'

export default class ConfirmTransaction extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       showModal:false,
       Balance:'',
       address:''
    }
  }

  GetBalance=async()=>{
    await axios.get(`https://blockchain.info/q/unconfirmedcount`)
    .then((res)=>{    
      this.setState({showModal:true,Balance:res.data})
    })
  }

  render() {
    return (
      <div style={{textAlign:'center'}}>
        <h1>Confirmed Transaction</h1>
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
                <h4>Confirmed Transaction</h4>
                <h6>{this.state.Balance}</h6>
              </label>
            </div>

          </div>
        </Modal>
      </div>
    )
  }
}

