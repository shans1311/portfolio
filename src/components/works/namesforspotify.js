import React from 'react';
import './work.css';



const namesforspotify = () => (
  <div>
    <p id='subHeader'>
     Website integrated with Spotify, utilizing both OpenAI's ChatGPT API and the Spotify API
     to generate unique playlist names. Functions by analyzing a user's existing Spotify musical preferences. 
     Through this analysis, the website can suggest tailored playlist names 
     that closely align with the user’s listening habits and preferences.
     < br/>
     < br/>
     The integration with OpenAI’s ChatGPT allows for the generation of creative and contextually relevant names, while the Spotify API access 
     ensures that these suggestions are deeply personalized, reflecting the user's actual music 
     library and taste. 
    </p>

    <div className='bodyText'>
      <p>
      <b>Motivations: </b> Having gained experience with APIs during my internship at SATS and through my 
      studies in IN2000 and COMP2140, I was motivated to work on a project that leverages APIs. As a 
      music fan and fan of applications that creatively utilize the Spotify 
      API to showcase user data, I was motivated to create a unique application using this API. My exploration
       of existing solutions revealed a gap in personalized playlist name generators, which often fall short in 
       offering customized experiences. Identifying an opportunity for improvement, I envisioned a solution that 
       merges Spotify's rich data with ChatGPT's generative capabilities to address this niche.
      </p>
      
      <p>
      <b>Technologies: </b> The website utilizes a Node.js/Express backend alongside a JavaScript frontend. 
      Backend operations, including the integration with the ChatGPT API, are managed by Node.js/Express, 
      a choice inspired by my previous work on the SpellBound project and practical experience gained 
      during coding interviews that emphasized backend development. This framework proved to be 
      both enjoyable and effective for such applications. The frontend, which handles interactions 
      with the Spotify API, is developed in JavaScript, where my proficiency in functional programming 
      was used.
      </p>

      <p>
      <b>User flow: </b> The website features a streamlined design with two primary states on a single page: 
      pre-authorization and post-authorization. Authorization is achieved through Spotify using the PKCE flow,
       which involves a code challenge verified by a code verifier. Upon successful authentication, the main 
       interface becomes accessible, presenting a straightforward layout with a button to generate playlist 
       names and a text field for displaying the generated names. Additionally, there is an 'About' page 
       for further information.
      </p>

      <p>
      <b>Sensitive data: </b> This website interacts with sensitive information, including API keys and Spotify
       user data. The handling of Spotify user data is securely managed by Spotify's API, which grants access 
       only to the specific data required, ensuring no dangerous information is retrieved. To safeguard the API 
       keys, they are securely stored within a .env file, keeping them hidden and protected.
      </p>

      <p>
      <b>Reflection: </b> Developing this website was both enjoyable and challenging, offering me valuable 
      insights into authentication processes and API management. However, I encountered a few significant 
      challenges along the way. One issue was the slow response time of the ChatGPT API for generating text, 
      which seemed to be a common problem among many other users, as generating names took several seconds. 
      To mitigate this, I implemented a solution where 30 names are generated in one go, allowing users to 
      browse through these before triggering the generation of another set.
      < br/>
      Additionally, hosting the website presented difficulties, especially due to the Spotify authentication process.
       The requirement for a redirect URI complicates hosting on platforms like Netlify, which I used, as they 
       generally do not support external redirect URLs.
      </p>
    </div>
  </div>
);

export default namesforspotify;
