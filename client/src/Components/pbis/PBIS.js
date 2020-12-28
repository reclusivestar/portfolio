import 'react-awesome-slider/dist/styles.css';
import './PBIS.css';
import login from '../../media/pbis/login.mp4';
import entire from '../../media/pbis/entire.mp4';
import { FullPage, Slide } from 'react-full-page';
import { useMediaQuery } from 'react-responsive';

export default function PBIS(props) {
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    return (
        isMobile ? 
        <div className="box mobile_cover">
            <div style={{padding: "1em", width:"100%", marginTop: "2em"}}> 
                <video controls loop muted>
                    <source src={entire} type='video/mp4' />
                </video>
            </div>
            <div style={{fontSize: "1.1em"}} className="text">
            Worked with Officers at San Luis Obispo Juvenile Hall to develop a React Comissary
                    web app for the juveniles to cash in on points they would receive for good behavior. 
                    Officers can also view/search user transactions and adjust user data. <br /><br />
            The site is hosted using an AWS S3 bucket <a href="https://pbiscommissary.calpoly.io/">here. </a>
            Please contact me to receive test authentication details (which you'll need in order to login and use the site).
            </div>   
            <div style={{padding: "1em", width:"100%", marginTop: "2em"}}> 
                <video controls loop muted>
                    <source src={login} type='video/mp4' />
                </video>
            </div>
            <div style={{fontSize: "1.1em"}} className="text">
                Added authorization for the officers with AWS Cognito Authentication with user pools to all end points 
                (in order to restrict access to certain officers and admins) in the form of a secure log in page.
            </div>   
        </div>
        :
        <FullPage>
            <Slide>
                <div className="box cover">
                    <div style={{width:"50%", marginTop: "2em"}}> 
                        <video controls loop muted>
                            <source src={entire} type='video/mp4' />
                        </video>
                    </div>
                    <div className="text">Worked with Officers at San Luis Obispo Juvenile Hall to develop a React Comissary
                    web app for the juveniles to cash in on points they would receive for good behavior. 
                    Officers can also view/search user transactions and adjust user data. <br /><br />
                    Wrote the REST API and worked with the back-end developer to set up the AWS API Gateway which 
                    then communicated with the AWS Lambda functions in order to handle requests and retrieve data 
                    from the AWS RDS layer. The RDS layer was in a private and secure subnet and used a MySQL Database <br /><br />
                    The site is hosted using an AWS S3 bucket <a href="https://pbiscommissary.calpoly.io/">here. </a>
                    Please contact me to receive test authentication details (which you'll need in order to login and use the site).
                    </div>   
                </div>
            </Slide>
            <Slide>
                <div className="box cover">
                    <div style={{width:"50%", marginTop: "2em"}}> 
                        <video controls loop muted>
                            <source src={login} type='video/mp4' />
                        </video>
                    </div>
                    <div className="text">
                        Added authorization for the officers with AWS Cognito Authentication with user pools to all end points 
                        (in order to restrict access to certain officers and admins) in the form of a secure log in page.
                    </div>   
                </div>
            </Slide>
        </FullPage>
    );
}