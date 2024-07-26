import React from "react";
import './App.css';
const Playtest = () => {
    return <div>
        <br></br>
        <div className="sectionheader"><h1 className="sectiontitle">Become a Playtester!</h1> </div>

        <div className="sectioncontent">
            Sign up to become a playtester for our upcoming games! We are always looking for feedback to improve.
            <br></br>
            <form>
                <label for="email">Email: </label>
                <input type="text" id="email" name="email"></input>
                <button type="submit">Submit</button>
            </form>
            

        </div>

        <img className="image" src="images/paroleguard.png" alt="enemy"></img>






    </div>;
}


export default Playtest;
