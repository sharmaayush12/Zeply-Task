import React, { Component } from 'react'
import {Modal} from 'react-bootstrap-v5'
import axios from 'axios'

export default class BTCInput extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       showModal:false,
       input:'',
       hash:'',
       Received:''
    }
  }

  GetInput=async()=>{
    await axios.get(`https://blockchain.info/q/txtotalbtcinput/${this.state.hash}`)
    .then((res)=>{
        this.setState({hash:res.data})
    })
    .catch((err)=>{
        alert("There are some error please try again")
    })
  }


  render() {
    return (
      <div style={{textAlign:'center'}}>
        <h1>Total BTC Input</h1>
        <div className='main-section d-flex'>
          <input onChange={(item)=>this.setState({hash:item.target.value})} type='text' className='form-control input-form' placeholder="Enter Hash"/>
          <button className='btn btn-info' onClick={()=>this.GetInput()}>Check</button>
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
                <h4>Total BTC Input:</h4>
                <h6>{parseInt(this.state.input).toFixed(3)} BTC</h6>
              </label>
            </div>

          </div>
        </Modal>
      </div>
    )
  }
}

