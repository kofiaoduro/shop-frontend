import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Loginform({ setUserFirstName }) {
    const apiUrl = import.meta.env.VITE_API_URL
    console.log(apiUrl)
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleUserLogin = async (e)=>{
        e.preventDefault()
        const data = {
            email,
            password
        };
        console.log(data)
        try {
            const response = await fetch(`${apiUrl}/userLogin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                 body: JSON.stringify(data), // Step 2: send data as JSON
            })
            const result = await response.json()
            if(result.status === 200){
              setUserFirstName(result.data.first_name)
              navigate('/')
            }
            console.log(result)
        } catch (error) {
            
        }
    }
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
            type="email" 
            placeholder="Enter email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleUserLogin}>
        Submit
      </Button>
    </Form>
  );
}

export default Loginform;