import React from 'react' ;
import {Route,Swith} from 'react-router-dom' ;
import {Login} from '../components/authentication/Login' ;
import {ChatList} from '../components/ChatList' ;
import {ChatRoom} from '../components/ChatRoom' ;
class Routing extends React.Component {
  render(){
    return(
      <div class='container'>
<Route  path='/login/' component={Login} />
<Route  path='/chat_list/' component={ChatList} />
<Route path='/chat_room/:name_id/' component={ChatRoom} />
      </div>
    )
  }
}
