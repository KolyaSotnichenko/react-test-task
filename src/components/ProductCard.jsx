import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = ({item}) => {


    return (
        <Card sx={{ maxWidth: 200, flex: '50%', }}>
            <Link style={{textDecoration: 'none', color: 'black'}} to={`/product/${item.id}`} state={item} >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image={item.colors[0].images[0]}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography 
                            gutterBottom 
                            variant="h5"
                        >
                            {item.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    )
}

export default ProductCard