import React from 'react';

const portfolio = () => (
  <div>
        <p id="subHeader">
          My second and new portfolio website fully developed by me, initially wireframed in Figma and then developed in React/JS. Hosted through Netlify
        </p>

        <div className='bodyTexy'>
          <p><b>Background:</b> I had a previous portfolio website, but grew to dislike it as i felt it didnt reflect my newfound skills in front-end
          development, and instead of changing it i just wanted to start anew. The new portfolio does however feature some similiarities to the first one,
          namely the color palette and the simplistic design feel.
          </p>

          <p><b>Design choices:</b> A conscious, stylistic design choice was also to not utilize soft-ui design principles with three-dimensional, 
          bordered, shadowed, “pop-up” elements, but rather maintain a simplistic style. I find over-designed portfolio websites with parallax
          that makes the website lag to be tedious to navigate, so i wanted to contain the website into the entire page, to display as much information
          as possible without forcing the user to click around and redirect too much (in a stylish way ofcourse). 
          The code for the old portfolio can be seen in my github aswell
        </p>

          
        </div>

  </div>
);

export default portfolio;
