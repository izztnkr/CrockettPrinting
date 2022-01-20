import React from "react";
//this is the About Page which will render on click of both the company name and the "home" item in the nav bar"
const About = () => (
  <div>
    <h1>About</h1>
      <div>
        {/* IceBox feature */}
        {/* <img src = "" alt="">PICTURE OF ME</img> */}
        Welcome to Crockett Printing, Your One Stop Print Shop! We are a small local business located in Crockett, TX, with all your printing and design needs. Please contact us below or meet us in person. 
      </div>
      <div className="intro">
        
      </div>
    <h3 className="contact">Contact Us</h3>
      <div>
        <p>
          Phone: (936) 544-7661
        </p>
        <p>
          Email: <a href="mailto:crockettprinting@gmail.com">crockettprinting@gmail.com</a>
        </p>
        
      </div>
    <h3>Location</h3>
      <div>We are located at 520 E Goliad Ave, Crockett, TX 75835</div>
      <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1013.3486178316411!2d-95.45677703326342!3d31.317979568567285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8647c338118e1b5b%3A0xe413298bb39a679a!2sCrockett%20Printing%20Company!5e0!3m2!1sen!2sus!4v1642646965310!5m2!1sen!2sus"></iframe>
      </div>
  </div>
);

export default About;
