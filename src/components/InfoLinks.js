import React from 'react';
import './InfoLinks.css'; // Assuming you have a CSS file for styles



function InfoLinks() {

    const links = {
        email: "mailto:shans@uio.com",
        github: "https://github.com/shans1311",
        linkedin: "https://www.linkedin.com/in/shan-sarwar-9158b6237/",
        instagram: "https://www.instagram.com/shansarwar02/",
        spotify: "https://open.spotify.com/user/shan_sarwar?si=68c6b893acac4801"
      };


    return (
        <div className="info-links">
        {Object.keys(links).map(key => (
            <a href={links[key]} key={key} target="_blank" rel="noopener noreferrer">{key}</a>
        ))}
        </div>
    )
}

export default InfoLinks;
