import React from 'react' ;
import {Route,Swith,withRouter} from 'react-router-dom' ;
import Login from '../components/authentication/Login' ;
import ChatList from '../components/ChatList' ;
import ChatRoom from '../components/ChatRoom' ;
import Home from '../components/Home' ;
import Navbar from '../components/navbar/Navbar' ;
import AuthNavbar from '../components/navbar/AuthNavbar' ;
import {connect} from 'react-redux' ;

class Routing extends React.Component {
  componentDidMount(){
    if(localStorage.getItem('token') && this.props.authenticated == false){
      this.props.login()
    }
  }
  render(){

    return(
      <div class='container'>

{ localStorage.getItem('token') && this.props.authenticated == true ?
  <AuthNavbar /> : <Navbar/>}
<Route path='/' exact component={Home} />
<Route  path='/login/' component={Login} />
<Route  path={'/'+localStorage.getItem('username')+'/'} component={ChatList} />
<Route path='/chat_room/:name_id/' component={ChatRoom} />

      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return {
    authenticated : state.authenticated ,
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    login : ()=>dispatch({type:'login'})
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Routing))  ;
