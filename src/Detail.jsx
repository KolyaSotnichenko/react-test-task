import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import { useLocation } from 'react-router-dom'

const Detail = () => {

    const location = useLocation()
    const item = location.state


  return (
    <Container maxWidth="sm">
        <Typography>
            {item.name}
        </Typography>
    </Container>
  )
}

export default Detail