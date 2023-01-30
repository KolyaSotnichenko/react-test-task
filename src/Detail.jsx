import { Typography } from '@mui/material'
import { Container, Box } from '@mui/system'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getSizes } from './services/api'

const Detail = () => {

    const [sizes, setSizes] = useState([])
    const [formatedSizes, setFormatedSizes] = useState([])
    const [selectedColor, setSelectedColor] = useState(0)
    const [selectedSize, setSelectedSize] = useState()

    const location = useLocation()
    const item = location.state

    const active = {color: 'green'}
    const inactive = {}

    useEffect(() => {

        getSizes()
            .then(data => {
                setSizes(data)
            })

    }, [sizes])

    useEffect(() => {
        if(!sizes) return

        setFormatedSizes(item.colors[selectedColor].sizes.map(size => sizes[size - 1]))

    }, [selectedColor, sizes])




  return (
    <Container maxWidth="md" sx={{paddingTop: '50px'}}>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: '20px',
            }}
        >
            <Box>
                <Box
                    component="img"
                    sx={{
                        height: 233,
                        width: 350,
                        maxHeight: { xs: 233, md: 350 },
                        maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="Product Images"
                    src={item.colors[selectedColor].images[0]}
                />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Box
                    sx={{
                        marginBottom: '50px'
                    }}
                >
                    <Typography
                        variant='h4'
                        sx={{
                            fontWeight: 700
                        }}
                    >
                        {item.name}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        marginBottom: '30px'
                    }}
                >
                    <Typography
                        variant='h6'
                    >
                        {item.colors[selectedColor].description}
                    </Typography>
                </Box>
                <Box>
                    <Box
                        component="ul"
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '20px',
                            paddingLeft: 0
                        }}
                    >
                        {item.colors.map((color, index) => (
                            <Box
                                component="li"
                                onClick={() => setSelectedColor(index)}
                                key={index}
                                sx={{
                                    listStyle: 'none',
                                    cursor: 'pointer',
                                    color: selectedColor == color?.id - 1 ? active : inactive,
                                    ':hover': {
                                        color: "red"
                                    }
                                }}
                            >
                                {color.name}
                            </Box>
                        ))}
                    </Box>
                </Box>
                <Box>
                    {formatedSizes.length !== 0 ? (
                        <Box
                            component="ul"
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '20px',
                                paddingLeft: 0
                            }}
                        >
                            {formatedSizes.map((size, index) => (
                                <Box
                                    component="li"
                                    onClick={() => setSelectedSize(index)}
                                    key={index}
                                    sx={{
                                        listStyle: 'none',
                                        cursor: 'pointer',
                                        color: selectedSize == size?.id - 1 ? active : inactive,
                                        ':hover': {
                                            color: 'red'
                                        }
                                    }}
                                >
                                    {size?.label}
                                </Box>
                            ))}
                        </Box>
                    ) : (
                        <Typography
                            variant='h6'

                        >
                            Немає розмірів!
                        </Typography>
                    )}
                </Box>
                <Box>
                    <Typography
                        variant='h5'
                    >
                        {item.colors[selectedColor].price}
                    </Typography>
                </Box>
            </Box>
        </Box>
    </Container>
  )
}

export default Detail