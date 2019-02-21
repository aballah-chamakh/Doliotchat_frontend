import React from 'react' ;
import {Route,Swith,withRouter} from 'react-router-dom' ;
import Login from '../components/authentication/Login' ;
import ChatList from '../components/ChatList' ;
import ChatRoom from '../components/ChatRoom' ;
import Navbar from '../components/navbar/Navbar' ;
import AuthNavbar from '../components/navbar/AuthNavbar'
import {connect} from 'react-redux' ;

class Routing extends React.Component {
  render(){
    return(
      <div class='container'>

{ localStorage.getItem('token') || this.props.authenticated == true ?
  <AuthNavbar /> : <Navbar/>}
<Route  path='/login/' component={Login} />
<Route  path='/chat_list/' component={ChatList} />
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
export default withRouter(connect(mapStateToProps)(Routing))  ;
