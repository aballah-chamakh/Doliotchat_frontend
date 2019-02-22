import React from 'react' ;
import axios from 'axios' ;
import {connect} from 'react-redux' ;

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

  let config =  {headers: {Authorization : 'Bearer '+localStorage.getItem('token')}}
  axios.get('http://127.0.0.1:8000/api/user/get_user_info/',config).then(res=>{
    console.log(res.data);
    localStorage.setItem('user_id',res.data.user_info.id)
    localStorage.setItem('username',res.data.user_info.username)
    localStorage.setItem('profile_id',res.data.user_info.profile_id)
      localStorage.setItem('profile_img',res.data.user_info.profile_img)
    this.props.login()
    this.props.history.push('/'+localStorage.getItem('username')+'/')
  })

})
  }
  render(){
    return(
      <div class='row'>
      <div class='col-lg-6 offset-lg-3' style={{marginTop:'200px'}}>
      <center><h3 class='text-warning'>Login to DoliotChat</h3></center>
      <div class="form-group row" >
        <label for="email" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input type="email" class="form-control" id="email" placeholder="Email" onChange={(e)=>{this.change(e,'email')}} value={this.state.email} />
        </div>
      </div>
      <div class="form-group row" >
        <label for="password" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="password" placeholder="Password" onChange={(e)=>{this.change(e,'password')}} value={this.state.password} />
        </div>
      </div>
      <center><button class='btn btn-primary' onClick={this.login}>Login</button></center>
      </div>

       </div>

    )
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    login : ()=>dispatch({type:'login'}) ,
  }
}
export default connect(null,mapDispatchToProps)(Login) ;
