import { Text , Input, Box, Spacer,Flex, Button ,Image } from "@chakra-ui/react";
import {  useNavigate } from "react-router-dom";
import { useState } from "react";
import CreateAccount from "./CreateAccount";


function Login () {

    const [emaillog, setEmaillog] = useState("");
    const [passwordlog, setPasswordlog] = useState("");
    const [flag, setFlag] = useState(false);
    const [home, setHome] = useState(true);
  
    const navigate = useNavigate();
  
    const handleLogin = (e) => {
      e.preventDefault();
  
      let userData = JSON.parse(localStorage.getItem("userData"));
  
      let email = userData.email;
      let pass = userData.password;
  
      if (!emaillog || !passwordlog) {
        setFlag(true);
        console.log("empty");
      } else if (!passwordlog !== pass || !emaillog !== email) {
        setFlag(true);
      } else {
        setHome(!home);
        setFlag(false);
      }
    };
  
    const handleClick = () => {
      navigate("/");
      alert("Login Successful")
      
    };
    const handleClick2 = () => {
        navigate("/create-account");
        
      };
  

    return (
        <>
        <div>
        <Box m='auto' w='30%' mt='30px'>
        <Box>
     <Image w='100px' m='auto' src='https://m.media-amazon.com/images/G/01/zappos/melody/zapposPBS._CB1509642213_.svg' />
     </Box>
    
     <form onSubmit={handleLogin}>
     <Box border='1px solid black' p='20px' textAlign='left'>
     
     
    
     <Text fontSize='3xl' textAlign='center'>LogIn</Text>
    
    
      <Text fontWeight='bold'>Email</Text>
      <Input  type='email' placeholder='' size='sm' mb='10px' onChange={(event) => setEmaillog(event.target.value)}/>
      <Flex>
      <Text fontWeight='bold'>Password</Text> <Spacer />
      <Text >Forgot Password?</Text>
      </Flex>
      <Input type='password' placeholder='' size='sm' mb='10px'  onChange={(event) => setPasswordlog(event.target.value)}/>
      
      
     
      <Button mt='20px' w='420px' mb='40px' colorScheme='blue' onClick={handleClick} type="submit">Log In</Button>

      <Text textAlign='center'>New to Zappos?</Text>
      <Button mt='10px' w='420px' mb='40px' colorScheme='blue' onClick={handleClick2} type="submit">Create your zappos Account</Button>
     </Box>
   
     </form>
     
     
     </Box>
        </div>
        </>
    )
}
export default Login;