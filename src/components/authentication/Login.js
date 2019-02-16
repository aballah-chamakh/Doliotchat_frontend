import React from 'react' ;
import axios from 'axios' ;


class Login extends React.Component {
  state = {
    email: '',
    password:''
  }
change=(e,field)=>{
 let state = this.state
 state[field] = e.target.value
 this.setState({state:state})
  }
  login=()=>{
let data = {'email':this.state.email,'password':this.state.password}
axios.post('http://127.0.0.1:8000/api/token/',data).then(res=>{
  localStorage.setItem('token',res.data.token)
  this.props.history.push('/chat_list/')
})
  }
  render(){
    return(
      <div>
      <div class="form-group row" style={{marginTop:200px}}>
        <label for="email" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input type="email" class="form-control" id="email" placeholder="Email" onChange={()=>{this.change(e,'email')}}>
        </div>
        <label for="password" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="password" placeholder="Password" onChange={()=>{this.change('password')}}>
        </div>
      </div>

      </div>
    )
  }
}
