import React from 'react' ;
import axios from 'axios' ;
import {Link} from 'react-router-dom' ;
class ChatList extends React.Component {

componentDidMount(){
  axios.get('http://127.0.0.1:8000/api/profile/').then(res=>{
    console.log(res.data);
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
         <div class='col-lg-8 offset-lg-2' style={{marginTop:'200px'}}>
         <center><span style={{fontSize:'22px',marginBottom:'30px'}} class='text-primary'>List of people that u can chat with them</span></center>
           {this.state.chat_list ?
             <ul class="list-group">
              {this.state.chat_list.map((profile)=>{
                return(
  <li class="list-group-item d-flex justify-content-between align-items-center">
  <img src={'http://127.0.0.1:8000'+profile.image} height='50px' width='50px' style={{borderRadius:'10px'}} />
    {profile.user.username}
    <Link to={"/chat_room/"+profile.user.username+'_'+profile.id+'/'}><button class='btn btn-warning'>Chat</button></Link>
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
