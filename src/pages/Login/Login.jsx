import './Login.css'

import { Email, Lock, Visibility, VisibilityOff } from '@mui/icons-material'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { 
  Button,
  Card, 
  CardActions, 
  CardContent,
  CardHeader,
  Divider,
  Icon,
  IconButton,
  InputAdornment,
  TextField, 
} from '@mui/material'
import { useContext } from 'react'
import { UserContext } from '../../context/userContext'

import { login } from "../../services/auth.service"

const Login = () => {

  const navigate = useNavigate()

  const {user, setUser} = useContext(UserContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isPassVisible, setIsPassVisible]  = useState(false)

  const handleLogin = async () => {
    const data = await login(email, password)
    console.log(data)

    if(data) {
      localStorage.setItem('token', data.token)
      setUser(data.user)
      navigate("/")
    }
  }

  return (
    <UserContext.Provider value={{user, setUser}}>
    <div id="login">
      <Link to="/">
        <img src="https://res.cloudinary.com/dyxqi2emg/image/upload/v1713219884/Devzon/white_logo_a4uyjs.webp" alt="" />
      </Link>
      <Card sx={{ maxWidth: '700px', backgroundColor: 'white' }} raised={true}>
        <CardHeader title="Login"></CardHeader>
        <CardContent>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            type="text"
            variant="outlined"
            margin="dense"
            fullWidth={true}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon>
                    <Email />
                  </Icon>
                </InputAdornment>
              )
            }}
          ></TextField>
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            type={ isPassVisible ? 'text' : 'password' }
            variant="outlined"
            margin="dense"
            fullWidth={true}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon>
                    <Lock />
                  </Icon>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton 
                    disableFocusRipple={true}
                    disableRipple={true}
                    style={{outline: 'none'}}
                    onClick={() => setIsPassVisible((oldState) => !oldState)}
                  >
                    {isPassVisible ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          ></TextField>
        </CardContent>
        <Divider />
        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
          <Button 
            size="medium" 
            color="primary" 
            variant="contained" 
            margin="dense"
            onClick={handleLogin}
          >
            Login
          </Button>
        </CardActions>
      </Card>
    </div>
    </UserContext.Provider>
  )
}

export default Login
