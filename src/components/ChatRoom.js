import React from 'react' ;


class ChatRoom extends React.Component {
  state = {
    message : '',
    thread : null
  }
  change = (e)=>{
    this.setState({message:e.target.value})
  }
  send_msg = (e)=>{
    if (e == null || e.key=='Enter'){
      if(e != null){
      e.preventDefault() }
    this.ws_client.send(JSON.stringify({message:this.state.message}))
    this.setState({message:''})

  }

  }
  componentDidMount(){
    console.log(this.props.match.params.name_id);
    this.ws_client = new WebSocket('ws://127.0.0.1:8000/ws/chat_room/'+this.props.match.params.name_id+'/?token='+localStorage.getItem('token'))
    this.ws_client.onopen = (e)=>{
      console.log(e);
    }
    this.ws_client.onmessage = (e)=>{
    //  this.thread.scrollTop = this.thread.scrollHeight
     let message = JSON.parse(e.data)
     console.log(message);

     if (message.type == 'load_thread'){
       console.log('new thread');
       this.setState({thread: message.thread})
     }else if (message.type == 'new_message') {
       console.log('new message');
       let thread = this.state.thread
       thread.messages.push(message.message)
       this.setState({thread:thread})
     }
      //console.log(e)
    }
    this.ws_client.onclose = (e)=>{
      console.log(e);
    }
  }
  state = {
    thread : null  ,
  }
  render(){
    return(
      <div class='row' style={{marginTop:'100px'}}>
       <div class='col-lg-8 offset-lg-2'>
       { this.state.thread ?
       <div>
       <div>
           {this.state.thread.first_user.user.id != localStorage.getItem('user_id') ?
             <center>
             <img src={'http://127.0.0.1:8000'+this.state.thread.first_user.image} height='150px' width='150px' style={{'borderRadius':'50%'}} />
             <h3 class='text-primary'>{this.state.thread.first_user.user.username}</h3>
             </center>
             : <center>
             <img src={'http://127.0.0.1:8000'+this.state.thread.second_user.image} height='150px' width='150px' style={{'borderRadius':'50%'}} />
             <h3 class='text-primary'>{this.state.thread.second_user.user.username}</h3>
             </center> }


       </div>
        <div ref={(thread)=>{this.thread=thread}} style={{overflow:'auto',height:'300px'}}>

          <div>
          {this.state.thread.messages.map(msg=>{
            return(
              <div class='row' style={{marginBottom:'20px'}}>
              <div style={{backgroundColor:'#c7dbf9',borderRadius:'25px',padding:'5px 5px 5px 20px'}} class={localStorage.getItem('profile_id')!=msg.profile_id  ?'col-lg-7 col-md-7 col-sm-7' :'col-lg-7 col-md-7 col-sm-7 offset-lg-5 offset-md-5 offset-sm-5'}>
              <img src={'http://127.0.0.1:8000'+msg.owner_image} height='30px' width='30px' style={{'borderRadius':'50%'}}/>
             <p style={{marginBottom:'10px',color:'grey'}}>{msg.owner} : {msg.content}</p>
             </div>
             </div>
            )
          })}
          </div>

        </div>
        </div>
      : null }
      <textarea  rows="2"  class="form-control" onChange={(e)=>{this.change(e)}} onKeyPress={(e)=>{this.send_msg(e)}} value={this.state.message}  placeholder="Send message"></textarea>


      <center><button style={{marginTop:'30px'}} class='btn btn-warning  ' onClick={()=>this.send_msg(null)}>Send</button></center>


        </div>
       </div>

    )
  }
}
export default ChatRoom ;
