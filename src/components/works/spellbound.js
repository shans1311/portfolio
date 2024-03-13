import React from 'react';
import './work.css';
import image1 from '../../media/spellbound_screenshot1.png';


const spellbound = () => (
  <div>
      <p id="subHeader">
      Spellbound is an online browser-based game that successfully combines educational objectives with engaging gameplay. 
      Spellbound offers two modes: Classic and Versus. 
      < br/>
      < br/>
      In classic mode the player tests themselves to see how many words they can get right, while in the versus mode, two players are pitted 
      against each other. Both players receive the same list of words, and must either score as many points as possible by completing 
      words, or having the highest score when the time runs out, all the while trying to deal with the other players bombardment of 
      spells and potions that dramatically effects the flow of the game.
      </p>

      <div className='bodyText'>
        <p><b>Background: </b>In the course of DECO1800 in Brisbane, i developed this website alongside three students in a group project.
        The idea for Spellbound was conceived during a brainstorming session, and it quickly became a project 
        we were all passionate about. Our goal was to "gamify" the spelling test experience, making it enjoyable for users while 
        also offering a platform for skill improvement. This required a careful balance of fun and educational content, which we 
        aimed to achieve through the game's design and functionality. </p>
        <img src={image1} alt="Spellbound Game Screenshot" className="work-desc-image-right" />


        <p><b>My role: </b>My role primarily involved front-end development and the entire design-process including wireframing.
        For the development of the front-end I utilized React and JavaScript and created many of the components that the front-end would 
        comprised of. After the back-end was setup, i also contributed to large parts of connecting the two stacks, which is where i discovered
        that back-end was something i was interested in and that could be fun to explore in the future.
        </p>

        <p><b>Process & Reflection: </b>The development process was iterative, with continuous feedback from user testing shaping the game's evolution.
         Although we faced limitations, such as the exclusion of certain planned features, the project's success was evident in the immense positive reactions 
         we received during the tradeshow. This experience underscored the value of teamwork, creativity, and resilience in overcoming obstacles and 
         achieving our project objectives. It also served as a tremendous opportunity for me to gain some understanding into back-end development, 
         as my eagerness to explore this area of programming really awakened here.
         As this was a school project, the website is unfortunately not accessable to "the public", but the code can be accessed by clicking the image above.
         </p>
      </div>

  </div>
);

export default spellbound;
