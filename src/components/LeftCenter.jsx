import React from 'react';
import './LeftCenter.scss';
import Vector from '../assets/Group.png'
import Group11 from '../assets/Group11.png'
import Vector2 from '../assets/Vector2.png'
// import calender1 from '../assets/calender1.png'
import unsplash from '../assets/unsplash.png'
import splashblue from '../assets/splashblue.png'


const LeftCenter = () => {
  return (
    <div className='left-center'>
        <div className='top-left-center'>
            <div className="completePro">
                <h4>Completed Your Profile</h4>
                
                <div class="progress">
                    {/* <div class="progress-bar">80%</div> */}
                    <progress value={80} max={100}></progress>
                    <p>80%</p>

                </div>
            </div>
            <div className="intro">
                <div className='experience'>
                    <h4>Intro</h4>
                    <p>I am an experienced joiner with well developed skills</p>
                </div>
                <div>
                    <div className="icon-p">
                        <img src={Vector} alt="" />
                        <p>29272 Westheimer Rd.</p>
                    </div>
                    <div className="icon-p">
                        <img src={Group11} alt="" />
                        <p>Binford Ltd.</p>
                    </div>
                    <div className="icon-p">
                        <img src={Vector2} alt="" />
                        <p>September 24, 2017</p>
                    </div>
                    <div className="icon-p">
                        <img src={Vector} alt="" />
                        <p>drible.com/Angela</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="photos">
            <div className="see-all">
                <h3>Photos</h3>
                <p style={{ color: "#2563EB" }}>see all</p>
            </div>
            <div className="pics">
                <img src={unsplash} alt="" />
                <img src={splashblue} alt="" />
            </div>
        </div>
    </div>
  )
}

export default LeftCenter;





