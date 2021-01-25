import React from "react";
import emailjs from 'emailjs-com';
import { Button,Card, Form } from 'reactstrap'

function Contact() {
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_3n1l1az', e.target, 'user_L2Z2ywkryGueLdp5ICquh')
      .then((result) => {
          alert("success",result.text);
      }, (error) => {
          alert("error",error.text);
      });
    e.target.reset();
   }
  return (
    <div>
   <h1>Contact us </h1>
   <Card>
        <section className="colorlib-about" data-section="contact">
        <div>
        
<div className="container" style={{justifyContent:  'center',width:'80%',backgroundColor:''}} >
    <form className="contact-form" onSubmit={{sendEmail}}>
<div className="row pt-5 mx-auto">
    <div className="col-8 form-group pt-2 mx-auto" >
   <input type="text" className="form-control" placeholder="Name" name="name" />
    </div>

    <div className="col-8 form-group pt-2 mx-auto" >
   <input type="email" className="form-control" placeholder="Email Address" name="email" />
    </div>

    <div className="col-8 form-group pt-2 mx-auto" >
   <input type="text" className="form-control" placeholder="Subject" name="subject" />
    </div>

    <div className="col-8 form-group pt-2 mx-auto" >
   <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message" />
    </div>

    <div className="col-8 pt-3 mx-auto">
   <input type="submit" className="btn btn-info" value="Send Message" />
    </div>

  
</div>

    </form>
    </div>

</div>
    

    
       </section>       </Card>
       <br></br>
   </div>
  );
}

export default Contact;
