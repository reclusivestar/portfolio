import 'react-awesome-slider/dist/styles.css';
import './TMC.css';
import { FullPage, Slide } from 'react-full-page';
import cms from '../../media/tmc/cms.gif';
import events from '../../media/tmc/events.mp4';
import traffic from '../../media/tmc/traffic_events.jpg';
import visualizer from '../../media/tmc/visualizer.mp4';
import { useMediaQuery } from 'react-responsive';

export default function TMC(props) {
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    return (
        isMobile ?
        <div>
            <div className="tmc_box tmc_cover vertical"> 
                <div style={{padding: "1em", marginTop: "2em"}}> 
                    <video controls loop muted>
                        <source src={events} type='video/mp4' />
                    </video>
                </div>
                <div className="tmc_box">
                    <div style={{fontSize: "1.1em"}} className="text">Developed a web based GUI tool in JavaScript that allows you to place traffic markers 
                    on Google Maps and assign colors to them, which then can be saved into an XML file to be used by the Visualizer tool. 
                    The overall project significantly reduced time to view and create traffic events by 80%. <br /><br />
                    Please <a href="/#contact">contact me</a> to see the code and/or a live demo.
                    </div>
                    <div id="tmc_xml" className="tmc_box vertical">
                        <img style={{padding: "1em"}} src={traffic} alt="traffic" className="xml" />
                        <p>Converted File</p>
                    </div>
                </div>  
            </div>
            <div className="tmc_box tmc_cover vertical">
                <div style={{padding: "1em", marginTop: "9em"}}> 
                    <video controls loop muted>
                        <source src={visualizer} type='video/mp4' />
                    </video>
                </div>
                <div className="tmc_box">
                    <div style={{fontSize: "1.1em"}} className="text">
                    Developed a web based Visualizer tool in JavaScript to represent traffic markers on Google Maps from an XML file 
                    with the ability to scroll through time to see future changes, instead of manually having to input data in XML to 
                    visualize each change, thus providing a visual overview and automating the manual process.
                    </div>   
                </div>
            </div>
            <div style={{marginTop: "-6em"}} className="tmc_box vertical tmc_cover">
                <div> 
                    <img style={{padding: "1em"}} src={cms} alt="cms" className="cms" />
                </div>
                <div style={{fontSize: "1.1em", marginTop: "-0.7em"}} className="text">
                Developed a web based Visualizer tool in JavaScript to represent traffic markers on Google Maps from an XML file 
                with the ability to scroll through time to see future changes, instead of manually having to input data in XML to 
                visualize each change, thus providing a visual overview and automating the manual process.
                </div>   
            </div>
        </div>
        :
        <FullPage>
            <Slide>
                <div className="tmc_box tmc_cover vertical"> 
                    <div style={{width:"50%", marginTop: "2em"}}> 
                        <video controls loop muted>
                            <source src={events} type='video/mp4' />
                        </video>
                    </div>
                    <div className="tmc_box">
                        <div className="text">Developed a web based GUI tool in JavaScript that allows you to place traffic markers 
                        on Google Maps and assign colors to them, which then can be saved into an XML file to be used by the Visualizer tool. 
                        The overall project significantly reduced time to view and create traffic events by 80%. <br /><br />
                        Please <a href="/#contact">contact me</a> to see the code and/or a live demo.
                        </div>
                        <div className="tmc_box vertical">
                            <img src={traffic} alt="traffic" className="xml" />
                            <p>Sample Output File</p>
                        </div>
                    </div>  
                </div>
            </Slide>
            <Slide>
                <div className="tmc_box tmc_cover vertical">
                    <div style={{width:"50%", marginTop: "2em"}}> 
                        <video controls loop muted>
                            <source src={visualizer} type='video/mp4' />
                        </video>
                    </div>
                    <div className="tmc_box">
                    <div className="tmc_box vertical">
                        <img src={traffic} alt="traffic" className="xml" />
                            <p>Sample Input File</p>
                        </div>
                        <div className="text">
                        Developed a web based Visualizer tool in JavaScript to represent traffic markers on Google Maps from an XML file 
                        with the ability to scroll through time to see future changes, instead of manually having to input data in XML to 
                        visualize each change, thus providing a visual overview and automating the manual process.
                        </div>   
                    </div>
                </div>
            </Slide>
            <Slide>
                <div className="tmc_box vertical tmc_cover">
                    <div> 
                        <img src={cms} alt="cms" className="cms" />
                    </div>
                    <div className="text">
                    Developed a web based Visualizer tool in JavaScript to represent traffic markers on Google Maps from an XML file 
                    with the ability to scroll through time to see future changes, instead of manually having to input data in XML to 
                    visualize each change, thus providing a visual overview and automating the manual process.
                    </div>   
                </div>
            </Slide>
        </FullPage>
    );
}