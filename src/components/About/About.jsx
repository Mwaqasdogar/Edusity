import React from 'react'
import "./About.css"
import about_img from "../../assets/about.png"
import play_icon from "../../assets/play-icon.png"

function About({setPlayState}) {
  return (
    <div className='about'>
      <div className="about-left">
        <img className='about-img' src={about_img} alt="" />
        <img className='play-icon' src={play_icon} alt=""  onClick={()=>
          {setPlayState(true)}}/>
        </div>

        <div className="about-right">
            <h3>ABOUT UNIVERASTY</h3>
            <h2>Nurturing Today Leaders Tommorrow</h2>
            <p>Embark on a transformative educational with our
                univerasty comperehansive education programs.Our cutting_edge
                currriculum is designed to empower students with the knowledge,
                Skills,experiences needed to excel in the dynamic fieled of education</p>
                <p>With the focus on innovation, hands-on learning, and personalized
                mentorship, our programe prepare aspiring educators to make a meaningful
                impact in classroom,schools,and communities.</p>
             <p>Wheather you aspire become c teacher,administor,
                counseler,or educational leader, our devers range of programs offer the
                 perfect pathway to achive your goalsand unlock your full potential in 
                 shapping the future of education</p>

      </div>
    </div>
  )
}

export default About
