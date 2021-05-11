import { useContext,useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { userContext } from "../contexts/userContext";

const SignUp = () => {
  const {signUp} = useContext(userContext);

  const[name,setName] =useState()
  const[email,setEmail] =useState()
  const[phone,setPhone] =useState()
  const[password,setPassword]=useState()



  
  function handleSubmit(e){
    e.preventDefault();
    const signUpUser={
      email,
      name,
      phone,
      password,
    }
    signUp(signUpUser);
  }
  return (
    <Form className="p-4" onSubmit={handleSubmit}>
      <FormGroup>
        <Label>name</Label>
        <Input placeholder="enter name" type="text"value={name} onChange={(e)=>setName(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input placeholder="enter email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label>Phone</Label>
        <Input placeholder="enter phone" type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
      </FormGroup>
      <FormGroup>
        <Label>password</Label>
        <Input placeholder="enter password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </FormGroup>
      <Button className="mt-3 btn btn-dark" type="submit">Sign Up</Button>
    </Form>
  );
};

export default SignUp;
