import React, { Component } from 'react'
import {Modal} from 'react-bootstrap-v5'
import axios from 'axios'

export default class TransactionFee extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       showModal:false,
       input:'',
       hash:'',
       TransactionDetails:[],
       showTable:false,
       status:''
    }
  }

  GetInput=async()=>{
    this.state.TransactionDetails=[]
    await axios.get(`https://chain.api.btc.com/v3/tx/${this.state.hash}`)
    .then((res)=>{
      this.setState({showTable:true,status:res.data.status})
      this.state.TransactionDetails.push(res.data.data)
      // this.setState({TransactionDetails:res.data.data},()=>{
      //   console.log(this.state.TransactionDetails)
      // })
        // this.setState({hash:res.data})
    })
    .catch((err)=>{
        alert("There are some error please try again")
    })
  }


  render() {
    return (
      <div style={{textAlign:'center'}}>
        <h1>Transaction Details</h1>
        <div className='main-section d-flex'>
          <input onChange={(item)=>this.setState({hash:item.target.value})} type='text' className='form-control input-form' placeholder="Enter Hash"/>
          <button className='btn btn-info' onClick={()=>this.GetInput()}>Check</button>
        </div>

        <table className='my-5 table table-bordered table-striped'>
          <tr>
            <th>Size</th>
            <th>Total Fee</th>
            <th>Status</th>
            <th>Received Time</th>
          </tr>

          <tbody>
            {
              this.state.showTable
              ?
              this.state.TransactionDetails.map((elem)=>{
                return(
                  <tr>
                    <td>{elem.size}</td>
                    <td>{parseInt(elem.fee)}</td>
                    <td>{this.state.status}</td>
                    <td>{elem.weight}</td>
                  </tr>
                )
              })
              :
              null
            }
          </tbody>
        </table>
      </div>
    )
  }
}



