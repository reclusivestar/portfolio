import React, { useState, useEffect } from 'react';
import warning from './warning.png';
import emailRegex from 'email-regex';

export default function Contact()  {
   const url = "http://localhost:3001/";

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [subject, setSubject] = useState("");
   const [message, setMessage] = useState("");
   const [error, setError] = useState({name: false, email: false, 
      message: false});
   // don't validate if form has not been touched
   const [touched, setTouched] = useState(false);
   // helper text for email field
   const [invalidEmail, setInvalidEmail] = useState("Email cannot be empty");
   // 0 is default (when not sent), 1 is successfully sent and -1 is fail
   const SUCCESS = 1;
   const FAIL = -1;
   const DEFAULT = 0;
   const [sent, setSent] = useState(DEFAULT);
   const [loading, setLoading] = useState(false);
   const [errorText, setErrorText] = useState("");
   
   const errorStyle =  {border: "1px solid #D72828"}

   async function handleSubmit(e){
      e.preventDefault();
      let formData = {
         name: name, 
         email: email,
         subject: subject, 
         message: message
      };
      setLoading(true);
      const response = await fetch(url + "sendEmail", {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
            },
         body: JSON.stringify(formData)
      });
      setLoading(false);
      if (!response.ok) {    
         const responseObj = await response.json();
         const message = `An error has occured: ${responseObj.message}`; 
         setSent(FAIL);   
         setErrorText(responseObj.message);
         return;
      }
      const result = await response.json();
      setSent(SUCCESS);
      console.log(result);
   }
  
   function errorPresent(error){
      return !(error.name === false && error.email === false 
      && error.message === false);
   }

   // monitors constantly for errors
   useEffect(() => {
      if (touched) 
         setError({...error, 
                  name: name === "", 
                  email: email === "" ||
                  !(emailRegex({exact: true}).test(email)),
                  message: message === ""
         });
   }, [name, email, message, touched]);

   // email validation text
   useEffect(() => {
      if (email === ""){
         setInvalidEmail("Email cannot be empty");
      }
      else if (!(emailRegex({exact: true}).test(email))) {
         setInvalidEmail("Please enter a valid email");  
      }
   }, [email]);

   return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">I'm currently open to full-time opportunities. 
                  Please see contact details below.</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form onClick={() => setTouched(true)} onSubmit={handleSubmit} id="contactForm" name="contactForm">
					<fieldset>

                  <div>
                     {error.name? <div className="helper">
                        <span><img src={warning} /> Name cannot be empty</span>
                        </div> : ""}
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
                     <input style={error.name? errorStyle: {}} type="text" size="35" id="contactName" 
                     name="contactName" onChange={e => setName(e.target.value)}/>               
                  </div>

                  <div>
                     {error.email? <div className="helper">
                        <span><img src={warning} /> {invalidEmail}</span>
                        </div> : ""}
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                     <input style={error.email? errorStyle: {}} type="email" size="35" id="contactEmail" 
                     name="contactEmail" onChange={e => setEmail(e.target.value)}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
                     <input type="text" size="35" id="contactSubject" 
                     name="contactSubject" onChange={e => setSubject(e.target.value)}/>
                  </div>

                  <div>
                     {error.message? <div className="helper">
                        <span><img src={warning} /> Message cannot be empty</span>
                        </div> : ""}
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea style={error.message? errorStyle: {}} cols="50" rows="15" id="contactMessage" 
                     name="contactMessage" onChange={e => setMessage(e.target.value)}></textarea>
                  </div>

                  <div>
                     <button type="submit" className="submit" disabled={!touched || errorPresent(error)}>Submit</button>
                     {loading? 
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span> : ""}
                  </div>
					</fieldset>
				   </form>
               {sent !== 0 ? 
               sent === 1 ? <div id="message-success">
                            <i className="fa fa-check"></i>
                            Your message was sent, thank you!<br />
                           </div> 
               : <div id="message-warning">{errorText}</div>
               : ""}	   
           </div>


            <aside className="four columns">

					   <h4>Address and Phone</h4>
					   <p className="address">
                     Tanmay Kumar<br />
						   San Luis Obispo, CA<br />
                     tanmaysk1@gmail.com <br />
						   <span>805-602-1511</span>
					   </p>
			
                  <p>
                     <a href="/"><i className="fa fa-download"></i> Download Resume</a>
                  </p>

            </aside>
      </div>
   </section>
   );
}
