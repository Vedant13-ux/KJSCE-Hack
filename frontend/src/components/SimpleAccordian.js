import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '70%',
    boxShadow: '30px'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>What is bullying?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Bullying involves the repeated exposure of one person to physical and/or relational aggression where the victim is hurt with teasing, name calling, mockery, threats, harassment, taunting, social exclusion or rumors.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>What are the warning signs of bullying? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Some signs that may point to a bullying problem are: 
          <ul>
            <li>Unexplainable injuries</li>
            <li>Lost or destroyed clothing, books, electronics, or jewelry</li>
            <li>Difficulty sleeping or frequent nightmares</li>
            <li>Sudden loss of friends or avoidance of social situations</li>
          </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>What can I do if I am being bullied? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          If you’re being bullied or see someone being bullied, here are some things to do:
          <ul>
            <li>Try to stay calm.</li>
            <li>Don’t let hurtful words beat you down.</li>
            <li>Be a friend - listen, support and speak up (especially if the situation is unsafe).</li>
          </ul>
          And several more.. 

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>How can I avoid being bullied? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Bullying can be scary. Know that you are not alone. Follow these steps to help you avoid being in a bullying situation: 
          <ul>
            <li>Do not give bullies a chance. Take a different route to class or home from school. </li>
            <li>Avoid unsupervised areas of the school. </li>
            <li>Sit at the front of the bus. </li>
            <li>Find a buddy and stick together.</li>
          </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>What do I do if my child is bullied?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          When your child is being bullied, it is hard to concentrate on anything else. All you want to do is make it stop. Follow the steps below to be the best possible advocate for your child in a bullying situation: 
          <ul>
            <li><strong>Stay calm.</strong> If you get upset, your child may think you are upset with him instead of at the situation. A knee-jerk reaction to something your child has shared with you may close off the open line of communication. </li>
            <li><strong>Empathize with your child.</strong> It’s not their fault. No one deserves to be bullied. Tell them you are glad they had the courage to tell you. </li>
            <li><strong>Encourage your child to make new friends.</strong> Help them make new friends. Help get them involved in activities to make new friends.</li>
            <li><strong>Share your own experiences.</strong> Sharing your own experiences with a bully will help them understand that they are not alone. </li>
            <li><strong>Brainstorm ways to solve the problem nonviolently.</strong> Encouraging retaliation may get your child hurt or suspended. </li>
          </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}