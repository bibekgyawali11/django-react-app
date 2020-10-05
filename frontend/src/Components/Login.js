import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import history from '../history'


/**
* @author
* @class Login
**/

class Login extends Component {
 constructor(){
     super()
     this.state={

     }
    this.handleSubmit = this.handleSubmit.bind(this)
 }

handleSubmit(){
    alert('Routing you to the dashboard!')
    history.push('/dashboard')
}
 render() {
  return(
   <div>Login
       <form onSubmit={this.handleSubmit}>
       <br></br>
       <label>Username: </label>
       <input type="text"></input>
       <br/><br/>

       <label>Password: </label>
       <input type="password"></input>
       <br/><br/>

       <input type="submit" value="Login"></input>
       <br/><br/>

       <Link to="/register"><button>Register</button></Link>
       </form>
   </div>
    )
   }
 }


export default Login