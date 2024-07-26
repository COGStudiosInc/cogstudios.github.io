import React from "react";
import './App.css';
import { SocialIcon } from "react-social-icons";
import { useState } from "react";

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const formSubmit = (e) => {
        console.log("submitting form");
    }


    return <div>
        <br></br><br></br>
        <div className="sectionheader"><h1 className="sectiontitle">Contact Us</h1> </div>
        <div className="sectioncontent">
            We'd love to hear from you!

            <form action="https://formsubmit.co/82adecf610d12f838142360b2302a34d" method="POST">

            <input for="type" type="hidden" value="New Contact Us Submission"></input>

            <div className="contactform">
            <div className="contactformsection">
           <label for="name">Name:</label>
           <input className="inputfield" type="text" id="name" name="name"></input>
           </div>

           <div className="contactformsection">
           <label for="email">Email:</label>
           <input className="inputfield" type="text" id="email" name="email"></input>
           </div>

           <div className="contactformsection">
           <label for="message">Message:</label>
           <textarea className="inputfield" id="message" name="message"></textarea>
           </div>

           

           </div>
           <button className="submitbutton" type="submit">Submit</button>

                
                
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