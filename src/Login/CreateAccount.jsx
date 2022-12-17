import { Box, Image, Input, Text, Button,Flex, Alert, AlertDescription, AlertIcon,AlertTitle } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useState } from "react";
import Login from "./Login"
import {useNavigate} from "react-router-dom"

function CreateAccount() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!name || !email || !password || !cpassword) {
        setFlag(true);
      } else if (!password == !cpassword) {
        setFlag(true);
      } else {
        setFlag(false);
        localStorage.setItem("userData", JSON.stringify({email,password}));
  
        setLogin(!login);
      }
    };
  
    const handleClick = () => {
      setLogin(!login);
      navigate('/login')
    };
return (
    <>
    <div>
     <Box m='auto' w='30%' mt='30px'>
     <Box>
     <Image w='100px' m='auto' src='https://m.media-amazon.com/images/G/01/zappos/melody/zapposPBS._CB1509642213_.svg' />
     </Box>

     {login ? (
     <form onSubmit={handleSubmit}>
     <Box border='1px solid black' p='20px' textAlign='left'>
     
     <Box >
    
     <Text fontSize='3xl' textAlign='center'>Create Account</Text>
     </Box>
      <Text fontWeight='bold'>Your Name</Text>
      <Input type='email' placeholder='' size='sm' mb='10px' onChange={(event) => setName(event.target.value)} />
      <Text fontWeight='bold' >Email</Text>
      <Input placeholder='' size='sm' mb='10px' onChange={(event) => setEmail(event.target.value)}/>
      <Text fontWeight='bold' >Password</Text>
      <Input type='password' placeholder='At least 6 Characters' size='sm' mb='10px' onChange={(event) => setPassword(event.target.value)}/>
      <p>Password must be at least 6 characters</p>
      <Text fontWeight='bold'>Re-enter Password</Text>
      <Input type='password' placeholder='' size='sm'  onChange={(event) => setCpassword(event.target.value)}/>
      <Button mt='20px' w='420px' mb='40px' colorScheme='blue'  onClick={handleClick} type="submit">Create your Zappos Account</Button>

      <p style={{ fontSize: "12px" }}>
      Don't have an email address or need additional help? Don't worry!
      Give us a call at (800) 927-7671
    </p>
    <p style={{ fontSize: "12px" }}>
      Registering means you agree to the Zappos terms of use and privacy
      policy
    </p>
    <Flex  mt='20px'>
    <Text fontSize='md'>Already have an account?</Text>
    <Button  colorScheme='blue' variant='link'  onClick={handleClick}>Sign-In <ChevronRightIcon /></Button>
    </Flex>
     </Box>
     {flag && (
        <Alert status='error'>
      <AlertIcon />
      <AlertTitle>Incomplete</AlertTitle>
      <AlertDescription>Please fill all details</AlertDescription>
     </Alert>
      )}
     </form>
     ) : (
       <Login />
     )}
     </Box>
     
    </div>
    </>
)
}
export default CreateAccount;