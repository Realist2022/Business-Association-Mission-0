import React from 'react';
import Styles from './Footer.module.css'; 

function Footer() {
  return (
    <div>
      <footer className={Styles.footer} >
        <p>© 2023 Your Company Name. All rights reserved.</p>
        <p>Privacy Policy | Terms of Service</p>
      </footer>
    </div>
  )
}

export default Footer