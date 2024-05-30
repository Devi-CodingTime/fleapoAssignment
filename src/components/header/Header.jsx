import React from 'react'
import "../header/header.css"
function Header() {
  return (<>
  <div className='flex border-white'>
  <div>
        <div className='logo'>
            <img src='./images/z.jpg' className="subtract" style={{height: "20px",
            width: "20px",
            borderRadius:"7px",
            marginTop: "3px"}} alt='img'/>
            <div className='faster'>FasterUI</div>
        </div>
        <div className='Rectangle'>
            <div className='home'>Home</div>
            <div className='about'>About</div>
            <div className='work'>How it Works</div>
            <div className='service'>Services</div>
        </div>
        <div className='signGRP'>
            <p className="signin">Signin</p>
            <button className="signup">SignUp</button>
        </div>
        <div className='awesomeUI'>
          <div className='para'>
            <p>Awesome UI Dark</p>
            <p>Template for </p>
            <p>Webflow Agency</p>
          </div>
          <button className='gettouch'>Get in Touch</button>
        </div>
    </div>
    
  </div>
    
    </>
  )
}

export default Header
