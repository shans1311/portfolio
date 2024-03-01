import React from 'react';

const gelaquiz = () => (
  <div>
      <p id="subHeader">
      A tangible design artifact intended as a cognitive tool for the elderly to foster social interaction. 
      This prototype, created as part of a group project for the "IN1060: User-oriented design" course, is a low-fidelity but 
      functional model designed through a process involving observation and interviews.
      < br/>
      < br/>
      Utilizing Arduino and a supplementary plugin called 
      Processing, I overcame IDE constraints to enable mp3 playback, ensuring these technologies communicated effectively through a 
      common serial terminal.
      </p>

      <div className='bodyText'>
      
    <p><b>Background & Motivation: </b>GelaQuiz was motivated by the desire to mitigate the decline in cognitive functions 
    among the elderly, a concern supported by studies that underscore the benefits of intellectually engaging activities. 
    Our objective was to explore how games, play, and social contact could contribute to this end. The design process was informed by user 
    feedback, emphasizing entertainment and interaction. Inspired by traditional board games, we incorporated elements such as quizzes, 
    colors, and answer options into our design. The goal was to create a user-friendly interface with large, easy-to-hold 
    components featuring big, round, colored buttons.</p>

    <p><b>Process: </b>Our iterative approach, enriched by digital mockups and sketches, eventually led to a physical prototype created via 
    3D printing with PLA plastic. This prototype included buttons for input, LEDs for lighting effects, and sound playback functionality, 
    all integral to the final design. </p>

    <p><b>Result: </b>The unanimous agreement among users on the prototype's form affirmed our design choices, suggesting that we had successfully 
      addressed the users' needs and preferences. This project not only exemplified my technical skills and design 
      thinking but also reinforced the importance of empathy and user-centric design in developing solutions for the elderly.</p>
      </div>

  </div>
);

export default gelaquiz;
