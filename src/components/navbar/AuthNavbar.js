import React from 'react' ;
import {Link} from 'react-router-dom' ;
import {connect} from 'react-redux' ;

class AuthNavbar extends React.Component {
  render(){
    return(
      <nav class="navbar navbar-expand-lg navbar-dark  bg-primary fixed-top">
     <div class="container">
       <Link class="navbar-brand" to='/chat_list/'>DoliotChat</Link>
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse" id="navbarResponsive">
         <ul class="navbar-nav ml-auto">
           <li class="nav-item active">
             <Link class="nav-link" to='/'>{localStorage.getItem('username')}
               <span class="sr-only">(current)</span>
             </Link>
           </li>
           <li class="nav-item">
            <Link class='nav-link' to='/chat_list/' >chat list</Link>
           </li>
           <li class="nav-item">
             <button class='btn btn-warning' onClick={this.props.logout}>logout</button>
           </li>

         </ul>
       </div>
     </div>
   </nav>
    )
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    logout : ()=>dispatch({type:'logout'})
  }
}
export default connect(null,mapDispatchToProps)(AuthNavbar)  ;
