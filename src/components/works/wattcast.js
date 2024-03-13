import React from 'react';
import './work.css';
import image1 from '../../media/wattcast9.png';
import image3 from '../../media/wattcast11.png';




const wattcast = () => (
  <div>
    <p id='subHeader'>
    Tool designed in Kotlin for Android that forecasts weekly electricity bills and pinpoints the most 
    economical times to use appliances. This initiative was particularly meaningful as it directly 
    tackled the economic and environmental challenges associated with power consumption, potentialy helping to make a 
    difference in the lives of budget-conscious students by promoting sustainable habits.
    </p>
    <div className='bodyText'>
    <p>
    <img src={image1} alt="Wattcast main menu" className="work-desc-image-right" />

        <b>Background: </b> Our team's choice to develop an electricity bill calculator app was driven by the 
        goals of economizing energy consumption and minimizing environmental degradation. 
        This initiative held special significance for me, aligning well with my passion for 
        environmental consciousness and my passion for software engineering.

    </p>
    <p>
      <b>My role: </b> In this project, my responsibilities were varied. 
      I was deeply involved in every phase of the design process, from ideation in Miro to the final wireframing in Figma, 
      with a significant emphasis on front-end development in Jetpack Compose. My work, in collaboration with my teammates, 
      was important in bringing our shared vision of a user-friendly interface to reality.
    </p>
    <p>
      <b>Design process: </b> n designig, we included relevant keywords that came up in discussion, such as quizzes, 
      colors and answer options. We combined this and landed on a quiz game. The users wanted a 
      very simple design. They wanted the components to be large and easy to hold in their hands, with big, 
      round, colored buttons on the controller. Through iterations of both design and data-collection, 
      we further narrowed in the design and eventually ended up with a physical prototype that we believed 
      fulfilled the users demands and needs
      I took responsibility for creating the design system, which is what we used as the “framework” for how 
      the front-end of the app would work and look.
    </p>

    <p>
    <img src={image3} alt="Wattcast appliances menu" className="work-desc-image-left" />

      <b>Front-end development</b> When developing the front end with team members, we experienced that jetpack 
      compose was a really nice programming language to use. Its high grade of reusability and its integration 
      to kotlin and the android studio IDE made combining functional programming and visual components astoundingly 
      smooth. The reusability of code, which you dont really have to same degree in markup languages like css and html,
       and through my most recent experience in React and Node.js in university courses at the University of 
       Queensland, it is something ive personally come to value greatly in front-end development.
    </p>
    <p>
      <b>Challenges and reflection</b> As much as i wish i could look back on this course as a definitive 
      success in all aspects, thats not really the case. While the experience itself had its pitfalls
      and weak points, i still look back on it as a definitive learning experience, where i learned what to do, 
      and what not to do in future team projects. I experienced that i could use this knowledge almost immediately 
      after the course in my summer internship at Sats, which you can read about as another project on the site.
    </p>
    </div>

  </div>
);

export default wattcast;
