import axios from 'axios'
import React, { Component } from 'react'
import {Modal} from 'react-bootstrap-v5'

export default class TotalReceived extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       showModal:false,
       Received:'',
       address:''
    }
  }

  GetReceived=async()=>{
    await axios.get(`https://private-anon-134f209769-blockchaininfo.apiary-proxy.com/q/getreceivedbyaddress/${this.state.address}`)
    .then((res)=>{
      console.log(res.data)
      this.setState({showModal:true,Received:(res.data)*10**18})
    })
  }
  render() {
    return (
      <div style={{textAlign:'center'}}>

        <h1>Total BTC Received</h1>
        <div className='main-section d-flex'>
          <input onChange={(item)=>this.setState({address:item.target.value})} type='text' className='form-control input-form' placeholder="Enter Your Address"/>
          <button className='btn btn-info' onClick={()=>this.GetReceived()}>Search</button>
        </div>

        <Modal
          show={this.state.showModal}
          // show={true}
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
                <h4>Total BTC Received:</h4>
                <h6>{parseInt(this.state.Received).toFixed(3)} BTC</h6>
              </label>
            </div>

          </div>
        </Modal>
      </div>
    )
  }
}
