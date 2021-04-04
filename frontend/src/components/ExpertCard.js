import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import { Link } from 'react-router-dom'


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

export default function ExpertCard(props) {
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
            {props.expert.name.slice(0, 1)}
          </Avatar>
        }
        title={props.expert.name}
        subheader={props.expert.field}
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <Button variant="outlined" size="small" color="primary">
          <Link className="watch_btn" to="#" target="_blank">Make an appointment</Link>
        </Button>
      </CardActions>
    </Card>
  );
}