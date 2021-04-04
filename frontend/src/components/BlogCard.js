import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function BlogCard(props) {
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
            {props.blog.author.name.slice(0, 1)}
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={props.blog.author.name}
        subheader={new Date(props.blog.created).toDateString()}
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.blog.content.substring(0, 150)} <Link>....Read More</Link>
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Typography variant="body2" color="textSecondary" component="p">
          {/* <a href="/">Read More</a> */}
          <Button variant="outlined" size="small" color="primary">
            <Link to={"/blogcontent/" + props.blog._id}>Read More</Link>
          </Button>
        </Typography>
      </CardActions>
    </Card>
  );
}