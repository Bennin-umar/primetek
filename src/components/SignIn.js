import { useState ,useContext} from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { userContext } from "../contexts/userContext";

const SignIn = () => {

  const {signIn} = useContext(userContext);
  const[email,setEmail] =useState()
  const[password,setPassword]=useState()

  function handleSubmit(e){
    e.preventDefault();
    const signInUser={
      email,
      password,
    }
    signIn(signInUser);
  }
  return (
    <Form className="p-4" onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Email</Label>
        <Input placeholder="enter email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label>password</Label>
        <Input placeholder="enter password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      </FormGroup>
      <Button className="mt-3 btn btn-dark" type="submit">Sign in</Button>
    </Form>
  );
};

export default SignIn;
