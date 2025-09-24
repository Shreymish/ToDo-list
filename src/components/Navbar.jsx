import React from 'react'
const Navbar = () => {
    return (
        <nav className =' flex justify-between bg-slate-700 text-white '>
      <div className= "logo">
        <span> class  iTask</span>
        </div>  
 <ul className = "flex gap-8 ">
    <li> Home</li>
    <li> Your Task</li>
 </ul>
 </nav>
        
    )
}
export default Navbar