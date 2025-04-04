import React from 'react'
import styles from './Home.module.css'
const Home = ({mode}) => {
  return (
    <div className={styles.container}>
        <div className={styles.contactBtns}>
          <ul className={mode ?styles.white :styles.black}>
            <li><img src="/public/Facebook.png" alt="" srcset="" /></li>
            <li><img src="/public/Instagram.png" alt="" /></li>
            <li><img src="/public/Twitter.png" alt="" srcset="" /></li>
            <li><img src="/public/GitHub.png" alt="" srcset="" /></li>
            <li><img src="/public/Linkedin.png" alt="" srcset="" /></li>
            <li><img src="/public/Telegram.png" alt="" srcset="" /></li>
            <li><img src="/public/Koo.png" alt="" srcset="" /></li>
            
          </ul>
        </div>
        <div className={styles.info}>
          <img src="public\Hello.png" alt="" />
          <h1>I'm <span className={styles.line}><span className={styles.anish}>Anish</span></span> <img src="public/Wave.svg" alt="" /></h1> 
          <p>
            UI/UX Designer, Front-End Developer & Thinker <br />
            Based in India.
          </p>
          <div className={styles.btns}>
            <button className={styles.cv}>Download CV</button>
            <button className={styles.contact}>Get in Touch!</button>
          </div>  
        </div>
        <div className={styles.pic}>
          <img src="/public/image.png" alt="" />
        </div>
        <div className={styles.mail} >
          <img src="/public/Email.png"  className={mode ?styles.w :styles.b} srcset="" />
        </div>
    </div>
  )
}
export default Home
