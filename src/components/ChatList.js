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
         <div class='col-lg-8 offset-lg-2' style={{marginTop:'100px'}}>
         <div style={{marginBottom:'20px'}}>
         <center>
             <img src={'http://127.0.0.1:8000'+localStorage.getItem('profile_img')} height='150px' width='150px' />
             <h3>{localStorage.getItem('username')}</h3>
         </center>
         </div>
         <center><span style={{fontSize:'22px',marginBottom:'30px'}} class='text-primary'>List of people that u can chat with them</span></center>
           {this.state.chat_list ?
             <ul class="list-group">
              {this.state.chat_list.map((profile)=>{
                return(
  <span>
  {localStorage.getItem('profile_id') != profile.id ?
    <li class="list-group-item d-flex justify-content-between align-items-center">
  <img src={'http://127.0.0.1:8000'+profile.image} height='50px' width='50px' style={{borderRadius:'10px'}} />
    {profile.user.username}
    <Link to={"/chat_room/"+profile.user.username+'_'+profile.id+'/'}><button class='btn btn-warning'>Chat</button></Link>
  </li>:null }
  </span>
                )
              })}
              </ul> : null }
         </div>
      </div>
    )
  }
}


export default ChatList ;
