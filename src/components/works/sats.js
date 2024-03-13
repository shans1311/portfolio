import React from 'react';
import './work.css';
import image1 from '../../media/sats_sc1.png';
import image2 from '../../media/sats_sc2.png';
import image3 from '../../media/sats_sc3.png';






const sats = () => (
  <div>
    <p id='subHeader'>
    A "Schedule your own workout" feature for SATS. This tool aimed to enhance new gym members' engagement by enabling 
    them to plan their workouts more effectively, fostering a habit of regular exercise. By incorporating functionalities
    for scheduling workouts, including type, time, date, and description, the feature sought to instill a sense of
    accountability among users. 
    < br/>
    < br/>
    It was a complex project that required thorough planning, collaboration, and technical skill, 
    culminating in a product that was both functional and user-friendly.
    </p>

    <div className='bodyText'>
      <p>
      <img src={image1} alt="" className="work-desc-image-right" />
      <b>Before the internship: </b>During my summer internship at SATS, I embarked on my first real programming job, 
      filled with anticipation and a degree of apprehension. The prospect of working in a professional setting was 
      daunting, given my lack of experience. However, the welcoming and supportive environment at SATS quickly 
      alleviated my concerns. I, along with the other interns, were initially plagued by imposter syndrome, 
      unsure of our capabilities and what was expected of us in a real-world project.
      </p>
      <p>
      <b>The process: </b> The project we were tasked with involved addressing a significant challenge for SATS: 
      increasing gym attendance among members who visited less than once a week. We were granted complete freedom 
      to devise a digital solution to this problem, which led to a dynamic brainstorming session. Our team, comprising 
      developers, a designer, and a product manager, meticulously planned our approach. I took on the role of an 
      iOS developer, delving into Swift and XCode, and benefiting from the extensive guidance offered by experienced 
      developers and mentors at SATS. This phase was crucial in familiarizing myself with the app's architecture 
      and coding standards, setting the stage for the development work that lay ahead.
      </p>
      <p>
    



        <b>The result: </b> The culmination of our efforts was the creation of the "Schedule your own workout" feature. This tool was designed to empower users to take charge of their fitness routines by scheduling workouts according to their preferences. It included several components: a home screen button leading to the scheduling page, a confirmation page, and a section for viewing scheduled workouts. This feature aimed to provide users with a personalized and flexible workout planning tool, encouraging them to maintain a consistent workout schedule.
      </p>
      <img src={image2} alt="" className="work-desc-image-left" />
      <img src={image3} alt="" className="work-desc-image-left" />
      <p>
        <b>Reflection: </b> Reflecting on the internship, the steep learning curve was both a challenge and an opportunity for growth. I gained invaluable insights into iOS development, teamwork, and the practical application of programming skills in a professional environment. The project taught me the importance of coding standards, effective team collaboration, and the use of tools like GitHub for code management. Working at SATS was not only a significant learning experience but also an enjoyable one. The team dynamics were fantastic, fostering a supportive and collaborative atmosphere that made the internship a memorable journey. Despite the sadness of parting ways at the end of the internship, the experience has left me with lasting connections and a keen anticipation for future opportunities in the tech industry.
      </p>
    </div>
  </div>
);

export default sats;
