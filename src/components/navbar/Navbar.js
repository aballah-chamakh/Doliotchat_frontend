import React from 'react' ;


class Navbar extends React.Component {
  render(){
    return(
      <nav class="navbar navbar-expand-lg navbar-light  bg-primary fixed-top">
     <div class="container">
       <Link class="navbar-brand" to='/'>DoliotChat</Link>
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse" id="navbarResponsive">
         <ul class="navbar-nav ml-auto">
           <li class="nav-item active">
             <Link class="nav-link" to='/'>Home
               <span class="sr-only">(current)</span>
             </Link>
           </li>
           <li class="nav-item">
             <Link class="nav-link" to="/login/">Login</Link>
           </li>

         </ul>
       </div>
     </div>
   </nav>
    )
  }
}
export default Navbar  ;