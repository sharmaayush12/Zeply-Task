import React, { Component } from 'react'
import {Modal} from 'react-bootstrap-v5'
import axios from 'axios'

export default class TotalUnSpent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       showModal:false,
       unspent:'',
       address:'',
       Received:''
    }
  }

  GetunSpent=async()=>{
    await axios.get(`https://blockchain.info/q/getsentbyaddress/${this.state.address}`,{
      confirmations:3
    })
    .then((res)=>{
        axios.get(`https://private-anon-134f209769-blockchaininfo.apiary-proxy.com/q/getreceivedbyaddress/${this.state.address}`)
        .then((ress)=>{
          const unspent=parseInt(ress.data)-parseInt(res.data)
          this.setState({showModal:true})
        })
    })
  }


  render() {
    return (
      <div style={{textAlign:'center'}}>
        <h1>Total UnSpent</h1>
        <div className='main-section d-flex'>
          <input onChange={(item)=>this.setState({address:item.target.value})} type='text' className='form-control input-form' placeholder="Enter Your Address"/>
          <button className='btn btn-info' onClick={()=>this.GetunSpent()}>Check</button>
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
                <h4>Total BTC Unspent:</h4>
                <h6>{parseInt(this.state.unspent).toFixed(3)} BTC</h6>
              </label>
            </div>

          </div>
        </Modal>
      </div>
    )
  }
}
