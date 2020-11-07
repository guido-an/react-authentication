import React from 'react'
import { Link } from 'react-router-dom'
import AuthService from '../services/authService'

class Signup extends React.Component {

  state = {
    username: '',
    password: ''
  }


  service = new AuthService()


//   handleFormSubmit = async e => {
//     e.preventDefault()
//     try {
//       const response = await this.service.signup(this.state.username, this.state.password)
//       console.log(response)
//     }
//     catch(err){
//      console.log(err)
//     }
//  }

  handleFormSubmit = e => {
     e.preventDefault()
     this.service.signup(this.state.username, this.state.password)
     .then(response => {
       console.log(response)
       this.setState({
         username: '',
         password: ''
       })
     })
     .catch(err => {
       console.log(err)
     })
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return(
      <div>
        <h1>Signup</h1>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username</label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />

          <label>Password</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
          
          <button>Signup</button>
          <p>Already have an account? 
            <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    )
  }
}

export default Signup;
