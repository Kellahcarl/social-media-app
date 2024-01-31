import React from 'react'
import './RightCenter.scss'
import Avatar from '../assets/Avatar.png'
import video from '../assets/video.png'
import vectoround from '../assets/vectoround.png'
import vectorstar from '../assets/vectorstar.png'
import splash1 from '../assets/splash1.png'
import splash2 from '../assets/splash2.png'
import Vectorfour from '../assets/Vectorfour.png'
import Groupthree from '../assets/Groupthree.png'
import Groupfour from '../assets/Groupfour.png'
import smile from '../assets/smile.png'
import brief from '../assets/brief.png'

const RightCenter = () => {
  return (
    <div className='right-center'>
        <div className='vida'>
            <div className="top">
                <div className="pro">
                    <img src={Avatar} alt="" />
                </div>
                <div className="input" >
                    <input className='input-text' type="text" placeholder='Whats on your mind?' />
                </div>
            </div>
            <div className="bottom">

                <div className="img">
                    <img src={video} alt="" />
                    <p>Live Video</p>
                </div>

                <div  className="img">
                    <img src={vectorstar} alt="" />
                    <p>Image/Video</p>
                </div>

                <div className="img">
                    <img src={vectorstar} alt="" />
                    <p>Activity</p>
                </div>

            </div>
        </div>

        <div className="ground">
            <div className="pro">
                <img src={Avatar} alt="" />
                <div className="info">
                    <h4>Angela Lee</h4>
                    <p>56 mins ago</p>
                </div>
            </div>
            <div className="text">
                <p>Here are some photography works that i made on the weekend with<br /> some of my friends, happy for that!</p>
            </div>
            <div className="images">
                <img src={splash1} alt="" />
                <img src={splash2} alt="" />
            </div>
            <div className="likes">
                <div>
                    <img src={Vectorfour} alt="" />
                    <p>2.7K Likes</p>
                </div>

                <div>
                    <img src={Groupthree} alt="" />
                    <p>101 Comments</p>
                </div>

                <div>
                    <img src={Groupfour} alt="" />
                    <p>26 Share</p>
                </div>
                
            </div>
            <div className="text-message">
                <input type="text" placeholder='Write your message...'/>
                <div className='ics'>
                    <div>
                        <img src={smile} alt="" />
                    </div>
                    <div>
                        <img src={brief} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default RightCenter;


