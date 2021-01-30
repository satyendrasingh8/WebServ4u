
import { useState,useEffect} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap' 
import firebase from '../../config/firebase'
import {useAuth} from './authContext'
import {useHistory,useLocation} from 'react-router-dom';

const SignIn =()=> {
    const history = useHistory();
    const location = useLocation();
   const [creds,setCreds] = useState({
       email:'',
       password:''
   })

  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null);
  const auth = useAuth();
 
 useEffect(()=> {
if(auth.user)   history.replace(location.state ? location.state.Form : '/')
 },[auth.user])

   const onChange = (e) => {
       setCreds((prevCreds)=>({
           ...prevCreds,
           [e.target.name]:e.target.value,
       }))
   } 

 const handleSubmit = async (e) => {
     e.preventDefault();
     setLoading(true);
     try {
  await auth.signIn(creds.email,creds.password);
 //    history.replace(location.state ? location.state.Form : '/')
  setLoading(false);
     } catch(e) {
console.error(e)
setError(e.message);
setLoading(false)
     }
 }


    return (
        <div>
  <Form onSubmit={handleSubmit}>
          <FormGroup controlId="formBasicquizType">
              <Label className="text-muted">Email</Label>
              <Input
                type="email"
                name="email"
                value={creds.email}
                className="text-primary"
                onChange={onChange}
                placeholder="email"
                required
              />
            </FormGroup>
            <FormGroup controlId="formBasicquizType">
              <Label className="text-muted">password</Label>
              <Input
                type="password"
                name="password"
                value={creds.password}
                className="text-primary"
               onChange={onChange}
                placeholder="password"
                required
              />
            </FormGroup>
            <Button variant="primary" type="submit" >
            {loading ? 'loading' : 'signIn'}
            </Button>
            <h5 style={{color:'red'}} > {error} </h5>
            </Form>
        </div>
    )
}

export default SignIn;