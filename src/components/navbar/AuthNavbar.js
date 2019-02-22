import React from 'react' ;
import {Link,withRouter} from 'react-router-dom' ;
import {connect} from 'react-redux' ;

class AuthNavbar extends React.Component {
  logout = ()=>{
    this.props.logout()
    this.props.history.push('/login/')
  }
  render(){
    return(
      <nav class="navbar navbar-expand-lg navbar-dark  bg-primary fixed-top">
     <div class="container">
       <Link class="navbar-brand" to={'/'+localStorage.getItem('username')+'/'}>DoliotChat</Link>
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse" id="navbarResponsive">
         <ul class="navbar-nav ml-auto">
           <li class="nav-item active">
             <Link class="nav-link" to={'/'+localStorage.getItem('username')+'/'} >{localStorage.getItem('username')}
               <span class="sr-only">(current)</span>
             </Link>
           </li>

           <li class="nav-item">
             <button class='btn btn-warning' onClick={this.logout}>logout</button>
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
export default withRouter(connect(null,mapDispatchToProps)(AuthNavbar))  ;
