
import React from 'react'
import { Link } from 'react-router-dom';
function Errorz500() {
  
  return (
     <>
     {/* Main Wrapper */}
     <div className="main-wrapper">
       <div className="error-box">
         <h1>500</h1>
         <h3>
           <i className="fa fa-warning" /> Oops! Something went wrong
         </h3>
         <p>The page you requested was not found.</p>
         <Link to="/Indexx" className="btn btn-custom">
           Back to Home
         </Link>
       </div>
     </div>
     {/* /Main Wrapper */}
     {/* jQuery */}
     {/* Bootstrap Core JS */}
     {/* Custom JS */}
   </>
   
  
  )
}
export default Errorz500