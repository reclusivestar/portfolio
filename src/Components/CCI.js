import React from 'react';
import './CCI.css'
import Login from './cci/page0.png'
import Codes from './cci/page1.jpg'
import Server from './cci/page2.jpg'
import End from './cci/page3.jpg'

export default function CCI(props) {

    return (
    <div className="all">
        <div className="main">
            <h1>Virtual Cybersecurity Challenge Website</h1>
            <p style={{width: "50%"}}> Developed a virtual hackathon platform for the California Cybersecurity Institute 
                who hosted the Cybersecurity challenge at the Global Hacker Convention 
                this year’s Biohacking Village at DEF CON, one of the world’s largest hacker conventions, 
                from Aug. 8-11 in Las Vegas.</p>
        </div>
        <div class="wrapper">
            <div class="row">
                <div class="column">
                    <a href={Login} target="_blank">
                        <div class="image_container">                       
                            <img src={Login}/>
                        </div>
                    </a>
                </div>
                <div class="column">
                    <p>Some text...</p>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <a href={Codes} target="_blank">
                        <div class="image_container">                       
                            <img src={Codes}/>
                        </div>
                    </a>
                </div>
                <div class="column">
                    <p>Some text...</p>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <a href={Server} target="_blank">
                        <div class="image_container">                       
                            <img src={Server}/>
                        </div>
                    </a>
                </div>
                <div class="column">
                    <p>Some text...</p>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <a href={End} target="_blank">
                        <div class="image_container">                       
                            <img src={End}/>
                        </div>
                    </a>
                </div>
                <div class="column">
                    <p>Some text...</p>
                </div>
            </div>
        </div>
    </div>
  );
}


