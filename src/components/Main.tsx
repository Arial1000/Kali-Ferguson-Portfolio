import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import headshot from '../assets/images/Headshot.jpg';


function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={headshot} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Arial1000" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/kali-a-ferguson/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Kali Ferguson</h1>
          <p>Computer Science Graduate | Bettering Our Community One Line At A Time</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Arial1000" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/kali-a-ferguson/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <p>lyricthefirst@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;