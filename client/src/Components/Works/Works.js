import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from 'uuid';
import { config } from "react-spring";
import cci from './cci.jpg';
import juvenile from './juvenile.png';
import chp from './chp.jpg';
import movie from './movie.png'

export default function Works(props) {

    const slides = [
    {
      key: uuidv4(),
      content:  <a href="/pbis" title="Commissary App">
                    <div className="columns portfolio-item">
                        <div className="item-wrap">  
                            <img src={juvenile} alt="1" />
                            <div className="overlay">
                                <div className="portfolio-item-meta">
                                <h5>Comissary App</h5>
                                    <p>Developed a full-stack scalable and secure web application for the San Luis Obispo Juvenile Hall.</p>
                                    <p style={{fontFamily: "'Courier New', monospace", position: "absolute",
                                    bottom: "0", paddingRight: "0.1em", fontSize: "1em"}}>Front-End: React + Redux | Material UI
                                    <br />
                                    Back-End: MySQL | REST |
                                    AWS Cognito | AWS API Gateway | AWS Lambda | AWS RDS | AWS S3 | AWS CloudFront | 
                                    AWS CloudWatch | AWS EC2</p>
                                </div>
                            </div>
                            <div className="link-icon"><i className="fa fa-link"></i></div>
                        </div>
                    </div>
                </a>
    },
    {
        key: uuidv4(),
        content:<a href="/cci" title="Virtual Cybersecurity Hackathon">
                    <div className="columns portfolio-item">
                        <div className="item-wrap">
                            <img src={cci} alt="2" />
                            <div className="overlay">
                                <div className="portfolio-item-meta">
                                <h5>Virtual Cybersecurity Hackathon</h5>
                                    <p>A website developed using AWS Amplify and React.</p>
                                    <p style={{fontFamily: "'Courier New', monospace", position: "absolute",
                                    bottom: "0", paddingRight: "0.1em", fontSize: "1em"}}>Front-End: React + Redux 
                                    <br />
                                    Back-End: AWS Amplify | 
                                    AWS Cognito | AWS API Gateway | AWS Lambda | AWS S3 | AWS CloudFront | 
                                    AWS CloudWatch | AWS EC2</p>
                                </div>
                            </div>
                            <div className="link-icon"><i className="fa fa-link"></i></div>
                        </div>
                    </div>
                </a> 
    },
    {
        key: uuidv4(),
        content:<a href="/tmc" title="Traffic Management Center">
                    <div className="columns portfolio-item">
                        <div className="item-wrap">
                            <img src={chp} alt="2" />
                            <div className="overlay">
                                <div className="portfolio-item-meta">
                                <h5>Traffic Management Center</h5>
                                    <p>Developed several javascript web tools for the Traffic Management Center at Cal Poly
                                    to help train Cal Trans and CHP employees.
                                    </p>
                                    <p style={{fontFamily: "'Courier New', monospace", position: "absolute",
                                    bottom: "0", paddingRight: "0.1em", fontSize: "1em"}}>Front-End: HTML | CSS | JavaScript 
                                    <br />
                                    Back-End: Python | XML | Google Maps API</p>
                                </div>
                            </div>
                            <div className="link-icon"><i className="fa fa-link"></i></div>
                        </div>
                    </div>
                </a>
    },
    {
        key: uuidv4(),
        content:<div>
                    <a href="https://moviesapp1.azurewebsites.net/" title="Movie List Maker">
                        <div className="columns portfolio-item">
                            <div className="item-wrap">
                                <img src={movie} alt="2" />
                                <div className="overlay">
                                    <div className="portfolio-item-meta">
                                    <h5>Movie List Maker</h5>
                                        <p>Developed a full-stack web app that allows users to create unlimited lists, 
                                            search movies and add/delete movies in the list. Users can also click on 
                                            the added movie to go the IMDB page.
                                        </p>
                                        <p style={{fontFamily: "'Courier New', monospace", position: "absolute",
                                        bottom: "0", paddingRight: "0.1em", fontSize: "1em"}}>Front-End: Angular 6.0 | TypeScript 
                                        <br />
                                        Back-End: SQL Server | C# ASP.Net Core (Entity Framework)</p>
                                    </div>
                                </div>
                                <div className="link-icon"><i className="fa fa-link"></i></div>
                            </div>
                        </div>
                    </a>
                    <div style={{marginLeft:"1.4em"}}>
                        <ul className="social-links">
                            <li key="github"><a style={{fontSize: "1.1em"}} href="https://github.com/reclusivestar/MoviesApp">Code <i className="fa fa-github"></i></a></li>
                        </ul>
                    </div>
                </div>
    }
    ]
    return (
        <div id="carousel" style={{height: "26em"}}>
            <Carousel
                slides={slides}
                showNavigation={true}
                animationConfig={config.slow}
            />
        </div>
    );
}
