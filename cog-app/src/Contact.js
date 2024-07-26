import React from "react";
import './App.css';
import { SocialIcon } from "react-social-icons";
const Contact = () => {

    const formSubmit = (e) => {
        console.log("submitting form");
    }


    return <div>
        <br></br>
        <div className="sectionheader"><h1 className="sectiontitle">Contact Us</h1> </div>
        <div className="sectioncontent">
            We'd love to hear from you!

            <form onSubmit={formSubmit}>


            <div className="contactform">
            <div className="contactformsection">
           <label for="name">Name:</label>
           <input type="text" id="name" name="name"></input>
           </div>

           <div className="contactformsection">
           <label for="email">Email:</label>
           <input type="text" id="email" name="email"></input>
           </div>

           <div className="contactformsection">
           <label for="message">Message:</label>
           <textarea id="message" name="message"></textarea>
           </div>

           

           </div>
           <button type="submit">Submit</button>

                
                
            </form>
            <br></br><br></br>
            Other Ways to Contact Us:
            <div className="socials">
            <SocialIcon className="socialicon" url="mailto:councilofgamers2@gmail.com" bgColor="#282c34"></SocialIcon>
            <SocialIcon className="socialicon" url="https://discord.gg/b9vwKY4k" bgColor="#282c34"></SocialIcon>

            </div>


            


        </div>




    </div>
}


export default Contact;