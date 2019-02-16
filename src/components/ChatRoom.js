import React import 'react' ;


class ChatRoom extends React.Component {
  componentDidMount(){
    this.ws_client = new websocket('ws://127.0.0.1:8000/chat/'+this.props.match.params.name_id+'/?token='+localStorage.getItem('token'))
    this.ws_client.onopen = (e)=>{
      console.log(e);
    }
    this.ws_client.onmessage = (e)=>{
     let message = JSON.parse(e.data)
     if (message.type == 'load_thread'){
       this.setState({thread:thread})
     }else if (message.type == 'new_message') {
       let thread = this.state.thread
       thread.messages.push(message.message)
       this.setState({thread:thread})
     }
      console.log(e)
    }
    this.ws_client.onclose = (e)=>{
      console.log(e);
    }
  }
  state = {
    thread : {} ,
  }
  render(){
    return(
      <div class='row' style={{marginTop:'200px'}}>
       <div class='col-lg-8'>
        <div height='500px' syle={{display:'scroll'}}>
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

      <textarea  row="5" class="form-control"  placeholder="Send message"></textarea>

        </div>
       </div>
      </div>
    )
  }
}
