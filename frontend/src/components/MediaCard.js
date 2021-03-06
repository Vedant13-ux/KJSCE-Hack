import React from 'react';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../index2.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minHeight: 410,
    maxHeight: 410
  },
});
function youtube_parser(url){
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return (match&&match[7].length==11)? match[7] : false;
}

function truncate(str, n){
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
export default function MediaCard(props) {
  const classes = useStyles();

  

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="175"
          image={"https://img.youtube.com/vi/"+youtube_parser(props.data.path)+"/0.jpg"}
          title={props.data.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {/* {props.data.description} */}
            {truncate(props.data.description, 100)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div className="bottom_btn">
          <Button 
            variant="outlined" size="small" color="primary">
            <a className="watch_btn" href={props.data.path} target="_blank">Watch Now</a>
          </Button>
        </div>
        
      </CardActions>
    </Card>
  );
}