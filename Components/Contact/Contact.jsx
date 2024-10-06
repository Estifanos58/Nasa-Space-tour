import React from 'react'
import classes from './Contact.module.css'
import Nebiyu from '../../src/assets/Nebiyu.png'
import Estif from '../../src/assets/unnamed.png'
import avatar from '../../src/assets/avatar.png'
import fethu from '../../src/assets/fethu.png'
import linkdin from '../../src/assets/linked.png'
import email from '../../src/assets/email.png'
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
function Contact() {
  return (
    <div className={classes.cont}>
        <div className={classes.contact_disc}>
            <h1>Contact Us</h1>
            <p>
            Need expert web development services or have a project in mind? Reach out to us today! Our team of experienced web developers is here to help you bring your digital ideas to life.
            </p>
        </div>
        <div className={classes.contact}>
        <div className={classes.contact_person}>
            <img src={Nebiyu} alt="" />
            <h1>Nebiyu Daniel</h1>
            <div className="link">
              <div><Link>
            <MailIcon/>
            </Link></div>
            <div><Link to={"https://www.linkedin.com/in/nebiyu-daniel-a85302224/"}>
            <LinkedInIcon/>
            </Link></div>
            
            </div>
            
        </div>
        <div className={classes.contact_person}>
            <img src={fethu} alt="" />
            <h1>Fethumubin Kedir</h1>
            <div className="link">
            <Link>
            <MailIcon/>
            </Link>
            <Link to={"https://www.linkedin.com/in/nebiyu-daniel-a85302224/"}>
            <LinkedInIcon/>
            </Link>
            </div>
        </div>
        <div className={classes.contact_person}>
            <img src={Estif} alt="" />
            <h1>Estifanos Kebede</h1>
            <div className="link">
            <Link>
            <MailIcon/>
            </Link>
            <Link to={"www.linkedin.com/in/estifanos-kebede-7123322a7"}>
            <LinkedInIcon />
            </Link>
            </div> 
        </div>
        <div className={classes.contact_person}>
            <img src={avatar} alt="" />
            <h1>Efrem Dawit</h1>
            <div className="link">
            <Link>
            <MailIcon/>
            </Link>
            <Link to={"https://www.linkedin.com/in/nebiyu-daniel-a85302224/"}>
            <LinkedInIcon/>
            </Link>
            </div>
        </div>
    </div>
    </div>
   
  )
}
export default Contact