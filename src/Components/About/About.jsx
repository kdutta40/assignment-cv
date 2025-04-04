import React from 'react'
import styles from './About.module.css'
const About = ({mode}) => {
  return (
    <>
        <div className={styles.top}>
            <div className={styles.imageContainer}>
                <img  className= {styles.lgc} src="/images/left_grey_circle.png" alt="background" />
                <img className={styles.hand}src="/images/hand.png" alt="overlay" />
            </div>
            <div className={styles.para}>
                    <h1 className={styles.heading}><strong>T</strong>his is it. ;)</h1>
                    <hr className={styles.top_hr} />
                    <br />
                    <p className={styles.paragraph}>
                        Anish Kr. Sinha is an Indian <strong>UI/UX Designer & Front End Developer</strong> with a passion for designing beautiful and functional user experiences.
                        Typically, he’s Driven & permanently Curious. He’s obsessed with designing things and even more obsessed with
                        designing cool & clean stuff for the web and mobile.
                    </p>
                    <br />
                    <p className={styles.paragraph}>
                        He holds a <strong>bachelor degree in Computer Applications</strong>. During his graduation, he has been actively involved
                        in the web design community for the last 3 years. Currently, he’s based in <strong>Bihar, India</strong>.
                    </p>
                    <br />
                    <p className={styles.paragraph}>
                        His interests extend beyond the web; he loves helping people with branding and print design. He even loves designing
                        <strong>3D floor plans</strong>.
                    </p>
            </div> 
            <div className={styles.ryc}>
                <img src="/images/right_yellow_circle.png" alt="" />
            </div>
        </div>
        <div className={styles.bottom}>
            <div className={styles.icon_yc}>
                <ul className={mode ?styles.white :styles.black}>
                            <li><img src="/images/Facebook.png" alt="" srcset="" /></li>
                            <li><img src="/images/Instagram.png" alt="" /></li>
                            <li><img src="/images/Twitter.png" alt="" srcset="" /></li>
                            <li><img src="/images/GitHub.png" alt="" srcset="" /></li>
                            <li><img src="/images/LinkedIn.png" alt="" srcset="" /></li>
                            <li><img src="/images/Telegram.png" alt="" srcset="" /></li>
                            <li><img src="/images/Koo.png" alt="" srcset="" /></li>
                            
                </ul>
                <img src="/images/bottom_yellow_circle.png" alt="" />
                <hr className={styles.bot_hr} />
                <img src="/images/bottom_grey_circle.png" alt="" srcset="" />
                <img src="/images/Email.png" className={mode ?styles.w :styles.b} alt="" />
            </div>

        </div>
    </>
    
  )
}

export default About
