import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { lightGreen, red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { light } from '@material-ui/core/styles/createPalette';
import '../index2.css';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minHeight: 230,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ExpertCard() {
  const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    // setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Name"
        subheader="Profession"
      />
    
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Add Short Description of the person
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
      <Button  variant="outlined" size="small" color="primary">
            <a className="watch_btn" href="#" target="_blank">Watch Now</a>
          </Button>
      </CardActions>
    </Card>
  );
}