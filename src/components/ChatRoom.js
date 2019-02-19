import React from 'react' ;


class ChatRoom extends React.Component {
  state = {
    message : '',
    thread : null
  }
  change = (e)=>{
    this.setState({message:e.target.value})
  }
  send_msg = ()=>{
    this.ws_client.send(JSON.stringify({message:this.state.message}))

  }
  componentDidMount(){
    console.log(this.props.match.params.name_id);
    this.ws_client = new WebSocket('ws://127.0.0.1:8000/ws/chat_room/'+this.props.match.params.name_id+'/?token='+localStorage.getItem('token'))
    this.ws_client.onopen = (e)=>{
      console.log(e);
    }
    this.ws_client.onmessage = (e)=>{
     let message = JSON.parse(e.data)
     console.log(message);

     if (message.type == 'load_thread'){
       console.log('new thread');
       this.setState({thread: message.thread})
     }else if (message.type == 'new_message') {
       console.log('new message');
       let thread = this.state.thread
       thread.messages.push({content:message.message,owner:'any'})
       this.setState({thread:thread})
     }
      console.log(e)
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
      <div class='row' style={{marginTop:'200px'}}>
       <div class='col-lg-8 offset-lg-2'>
        <div  style={{overflow:'scroll',height:'300px'}}>
        { this.state.thread ?
          <div>
          {this.state.thread.messages.map(msg=>{
            return(
             <p style={{marginBottom:'10px'}}>{msg.owner} : -- {msg.content}</p>
            )
          })}
          </div>
        : null }
        </div>

      <textarea  rows="2"  class="form-control" onChange={(e)=>{this.change(e)}} value={this.state.message}  placeholder="Send message"></textarea>


      <center><button style={{marginTop:'30px'}} class='btn btn-warning  ' onClick={this.send_msg}>Send</button></center>


        </div>
       </div>

    )
  }
}
export default ChatRoom ;
