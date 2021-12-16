import React from 'react';
import './Footer.css';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import twitter from '../img/twi.png';
import telegram from '../img/tele.png';
import linkedin from '../img/link.png';
import instagram from '../img/insta.png';
import discord from '../img/dis.png';
import copyright from '../img/copyright.png'
  
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    root: {
      flexGrow: 1,
    },
  }),
);

function Footer() {
  const classes = useStyles();
  return (
    <div id='footer' className='footer-container'>
      <div className='contact'>
        <div className='contact-color'>
      <div className='contact-us'>
      <div style={{ width: '100%'}}>
      <Grid container spacing={3}>
        
        
        <Grid item xs={3} sm={3}>
                  <div className='icon'>
                    <a href={"https://discord.gg/a8xMwgAxDy"}>
        <img className='icon1' src={discord} alt="r1" />  
        </a>
      </div>
        </Grid>
        <Grid item xs={2} sm={2}>
                  <div className='icon'>
                  <a href={"https://t.me/joinchat/iXZvrKFQpVE1ZjU9"}>
        <img className='icon1' src={telegram} alt="r1" />  
        </a>
      </div>
        </Grid>
        <Grid item xs={2} sm={2}>
                  <div className='icon'>
                  <a href={"https://twitter.com/BoitClub"}>
        <img className='icon1' src={twitter} alt="r1" /> 
        </a> 
      </div>
        </Grid>
        <Grid item xs={2} sm={2}>
                  <div className='icon'>
                  <a href={"https://instagram.com/boit.club"}>
        <img className='icon1' src={instagram} alt="r1" />  
        </a>
      </div>
        </Grid>
        <Grid item xs={3} sm={3}>
                  <div className='icon'>
                  <a href={"https://www.linkedin.com/company/boit-club"}>
        <img className='icon1' src={linkedin} alt="r1" />  
        </a>
      </div>
        </Grid>
        
      </Grid>
    </div>
        </div>
        </div>
      </div>
      

      <div className='bottom-footer'>
      <div className='footer'>
        <img className='footer-img' src={copyright} alt="copyright" />  
      </div>
</div>

    </div>
  );
}

export default Footer;
