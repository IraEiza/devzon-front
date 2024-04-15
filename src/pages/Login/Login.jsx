import { Email, Lock, Visibility, VisibilityOff } from '@mui/icons-material'

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

import { useState } from 'react'

import './Login.css'

const Login = () => {

  const [isPassVisible, setIsPassVisible]  = useState(false)

  return (
    <Card sx={{ maxWidth: '700px', backgroundColor: 'white' }} raised={true}>
      <CardHeader title="Login"></CardHeader>
      <CardContent>
        <TextField
          label="Email"
          type="text"
          variant="outlined"
          margin="dense"
          fullWidth={true}
          InputProps={{
            startAdornment: (
              <InputAdornment sx={{pr: 1}}>
                <Icon>
                  <Email />
                </Icon>
              </InputAdornment>
            )
          }}
        ></TextField>
        <TextField
          label="Password"
          type={ isPassVisible ? 'text' : 'password' }
          variant="outlined"
          margin="dense"
          fullWidth={true}
          InputProps={{
            startAdornment: (
              <InputAdornment sx={{pr: 1}}>
                <Icon>
                  <Lock />
                </Icon>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment>
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
        <Button size="medium" color="primary" variant="contained" margin="dense">
          Login
        </Button>
      </CardActions>
    </Card>
  )
}

export default Login