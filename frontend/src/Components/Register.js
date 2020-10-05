import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import history from '../history'

/**
* @author
* @class Register
**/

class Register extends Component {
    constructor(){
        super()
        this.state = {
            data : ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        event.preventDefault()
        axios.get('http://localhost:8000/api/test')
        .then(res => {
            this.setState({
                data: res.data
            })
            alert('Message From Server: '+this.state.data)
            history.push('/login')
        })
    }
 render() {
  return(
   <div>Register
       <form onSubmit={this.handleSubmit}>

        <label>Name:</label>
        <input type="text"></input>
        <br/><br/>

        <label>Email:</label>
        <input type="email"></input>
        <br/><br/>

        <label>Password:</label>
        <input type="password"></input>
        <br/><br/>
        
        <label>Address:</label>
        <input type="text"></input>
        <br/><br/>

        <label>Referal Code:</label>
        <input type="text"></input>
        <br/><br/>

        <input type="submit"></input>
        <br/><br/>

        <Link to="/Login"/>
       </form>
   </div>

    )
   }
 }

export default Register