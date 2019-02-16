import React from 'react' ;
import axios from 'axios' ;
class ChatList extends React.Component {

componentDidMount(){
  axios.get('http://127.0.0.1:8000/api/profile/').then(res=>{
    this.setState({chat_list:res.data})
  }
  )
}

state = {
  chat_list : [] ,
}

  render(){
    return(
      <div class='row'>
         <div class='col-lg-8'>
         <span>List of people that u can chat with him</span>
           {this.state.chat_list ?
             <ul class="list-group">
              {this.state.chat_list.map((profile)=>{
                return(
  <li class="list-group-item d-flex justify-content-between align-items-center">
    {profile.user.username}
    <button class='btn btn-primary'><Link to={"/chat_room/"+profile.user.username+'/'}>Chat</Link></button>
  </li>
                )
              })}
              </ul> : null }
         </div>
      </div>
    )
  }
}


export default ChatList ;
