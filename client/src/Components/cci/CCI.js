import React from 'react';
import './CCI.css'
import Login from './imgs/page0.png'
import Codes from './imgs/page1.jpg'
import Server from './imgs/page2.jpg'
import End from './imgs/page3.jpg'
import { FullPage, Slide } from 'react-full-page';
import { useMediaQuery } from 'react-responsive';

export default function CCI(props) {
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    return (
    isMobile ?
    <div>
         <div className="cci_cover">
                <div className="cci_box" style={{paddingTop: "10%"}}>
                    <p className="cci_text" style={{width: "80%", fontSize: "1.1em"}}> Developed the front-end app for the California Cybersecurity Institute 
                        for their Cybersecurity challenge hosted at the Global Hacker Convention - 
                        this year’s Biohacking Village at DEF CON, one of the world’s largest hacker conventions, 
                        from Aug. 8-11 in Las Vegas. <br /> <br />
                        The app was made using React and AWS Amplify framework in less than 5 weeks notice with the ability to handle upto 5000 users. 
                        <a href="https://ceng.calpoly.edu/connection/2020/07/cal-poly-students-create-space-cybercrime-for-this-years-virtual-def-con-hacker-convention/" target="_blank"> Here's </a>
                        an article if you want to know more about the challenge. <br /><br />
                        I also had to incorporate these contraints throughtout the app - 
                        The entire challenge was timed at 6 hours and you were not able to progress unless the clues were found at each stage.</p>
                </div>
            </div>
            <div className="cci_cover cci_box">
                <div style={{width:"90%"}}> 
                    <a href={Login} target="_blank">
                        <div className="image_container">                       
                            <img src={Login}/>
                        </div>
                    </a>
                </div>
                <p className="cci_text" style={{width: "80%", fontSize: "1.1em"}}>Made a secure login screen by integrating  AWS Amplify framework with React.  
                All end points are secured using AWS Cognito.</p>
            </div>
            <div className="cci_cover cci_box">
                <div style={{width:"90%", marginTop: "-80%"}}> 
                    <a href={Codes} target="_blank">
                        <div className="image_container">                       
                            <img src={Codes}/>
                        </div>
                    </a>
                </div>
                <div style={{marginTop: "5%"}}>
                    <p className="cci_text" style={{width: "80%", fontSize: "1.1em", marginLeft: "10%"}}>In this page, students can enter the codes to clues they found after
                    entering each of the virtual rooms and progress to the next step. I make constant validation checks by fetching endpoints from AWS API Gateway.</p>
                </div>
            </div>
            <div className="cci_cover cci_box">
                <div style={{width:"90%"}}> 
                    <a href={Server} target="_blank">
                        <div className="image_container">                       
                            <img src={Server}/>
                        </div>
                    </a>
                </div>
                <div style={{marginTop: "5%"}}>
                    <p className="cci_text" style={{width: "80%", fontSize: "1.1em", marginLeft: "10%"}}>The challenge would continue into a remote server room 
                    (the crashed satellite). 
                    Students would start up an AWS EC2 instance and wait for their password in order to login. The EC2 instance is a remote Windows computer. 
                    After they are done
                    with the session they can terminate the instance. <br/> <br />
                    I make requests to start, stop and receive passwords from EC2 instances using API Gateway and AWS Lambda from my React App. I had take into consideration
                    scalability as up to thousands of users would concurrently start and stop instances.</p>
                </div>
            </div>
            <div className="cci_cover cci_box" style={{marginTop: "120%"}}>
             <div style={{width:"90%"}}> 
                 <a href={End} target="_blank">
                     <div className="image_container">                       
                         <img src={End}/>
                     </div>
                 </a>
             </div>
             <div style={{marginTop: "2%", marginLeft: "10%"}}>
             <p className="cci_text" style={{width: "80%", fontSize: "1.1em"}}>You would only arrive at this stage after completing the entire challenge. 
                There is a feedback form attached as well.</p>
             </div>
         </div>
        
    </div>
    :
    <FullPage>
        <Slide>
            <div className="cci_cover">
                <div className="cci_box" style={{paddingTop: "10%"}}>
                    <p className="cci_text" style={{width: "50%"}}> Developed the front-end app for the California Cybersecurity Institute 
                        for their Cybersecurity challenge hosted at the Global Hacker Convention - 
                        this year’s Biohacking Village at DEF CON, one of the world’s largest hacker conventions, 
                        from Aug. 8-11 in Las Vegas. <br /> <br />
                        The app was made using React and AWS Amplify framework in less than 5 weeks notice with the ability to handle upto 5000 users. 
                        <a href="https://ceng.calpoly.edu/connection/2020/07/cal-poly-students-create-space-cybercrime-for-this-years-virtual-def-con-hacker-convention/" target="_blank"> Here's </a>
                        an article if you want to know more about the challenge. <br /><br />
                        I also had to incorporate these contraints throughtout the app - 
                        The entire challenge was timed at 6 hours and you were not able to progress unless the clues were found at each stage.</p>
                </div>
            </div>
        </Slide>
        <Slide>
            <div className="cci_cover cci_box">
                <div style={{width:"50%", marginTop: "2em"}}> 
                    <a href={Login} target="_blank">
                        <div className="image_container">                       
                            <img src={Login}/>
                        </div>
                    </a>
                </div>
                <p className="cci_text" style={{width: "50%", marginTop:"2%"}}>Made a secure login screen by integrating  AWS Amplify framework with React.  
                All end points are secured using AWS Cognito.</p>
            </div>
        </Slide>
        <Slide>
           <div className="cci_cover cci_row">
                <div style={{width:"22%", marginTop: "5%", marginLeft: "25%"}}> 
                    <a href={Codes} target="_blank">
                        <div className="image_container">                       
                            <img src={Codes}/>
                        </div>
                    </a>
                </div>
                <div style={{marginTop: "5%"}}>
                <p className="cci_text"  style={{width: "50%"}}>In this page, students can enter the codes to clues they found after
                entering each of the virtual rooms and progress to the next step. I make constant validation checks by fetching endpoints from AWS API Gateway.</p>
                </div>
            </div>
        </Slide>
        <Slide>
            <div className="cci_cover cci_row">
                <div style={{width:"26%", marginTop: "5%", marginLeft: "25%"}}> 
                    <a href={Server} target="_blank">
                        <div className="image_container">                       
                            <img src={Server}/>
                        </div>
                    </a>
                </div>
                <div style={{marginTop: "5%"}}>
                <p className="cci_text"  style={{width: "50%"}}>The challenge would continue into a remote server room (the crashed satellite). 
                Students would start up an AWS EC2 instance and wait for their password in order to login. The EC2 instance is a remote Windows computer. After they are done
                with the session they can terminate the instance. <br/> <br />
                I make requests to start, stop and receive passwords from EC2 instances using API Gateway and AWS Lambda from my React App. I had take into consideration
                scalability as up to thousands of users would concurrently start and stop instances.</p>
                </div>
            </div>
        </Slide>
         <Slide>
         <div className="cci_cover cci_box">
             <div style={{width:"30%", marginTop: "5%"}}> 
                 <a href={End} target="_blank">
                     <div className="image_container">                       
                         <img src={End}/>
                     </div>
                 </a>
             </div>
             <div style={{marginTop: "2%", marginLeft: "28%"}}>
                <p className="cci_text" style={{width: "50%"}}>You would only arrive at this stage after completing the entire challenge. 
                There is a feedback form attached as well.</p>
             </div>
         </div>
     </Slide>
    </FullPage>
  );
}


