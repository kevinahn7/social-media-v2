import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const Details = () => {
  const cardStyles = {
    width: '345px'
  }
  const profileImageStyle = {
    height: '300px'
  }
  return(
    <div>
      <Card style={cardStyles}>
        <CardMedia
          image='https://www.geeksaresexy.net/wp-content/uploads/2011/09/cylon2.jpg'
          title='Contemplative Robot'
          style={profileImageStyle}
        />
        <CardContent>
          <h2>Joe Dirt</h2>
        </CardContent>
      </Card>
    </div>
  );
}

export default Details;
