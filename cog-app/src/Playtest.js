import React from "react";
import './App.css';
const Playtest = () => {
    return <div>
        <br></br><br></br>
        <div className="sectionheader"><h1 className="sectiontitle">Become a Playtester!</h1> </div>

        <div className="sectioncontent">
            Sign up to become a playtester for our upcoming games! We are always looking for feedback to improve.
            <br></br><br></br>
            <form action="https://formsubmit.co/82adecf610d12f838142360b2302a34d" method="POST">
                <input for="type" type="hidden" value="New Playtester Submission"></input>
                <div className="playtestform">
                <label for="email">Email: </label>
                &nbsp;&nbsp;&nbsp;
                <input className="inputfield" style={{fontSize: "1.7vh"}} type="text" id="email" name="email"></input>
                &nbsp;
                <button className="submitbutton" type="submit">Submit</button>
                </div>
            </form>
            

        </div>

        <img className="playtestimage" src="images/paroleguard.png" alt="paroleguard" style={{paddingLeft: "10vw"}}></img>






    </div>;
}


export default Playtest;
