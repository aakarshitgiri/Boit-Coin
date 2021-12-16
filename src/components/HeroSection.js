import React, {useEffect, useState} from 'react';
import '../App.css';
import $ from 'jquery';
import Tooltip from "@material-ui/core/Tooltip";
import './HeroSection.css';

import logo from '../img/Token Image.png';
import text from '../img/text-1.png';
import dex from '../img/Group 49.png';
import circle1 from '../img/Ellipse 38.png';
import circle2 from '../img/Ellipse 37.png';
import circle3 from '../img/Ellipse 38m.png';
import circle4 from '../img/Ellipse 38n.png';



import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import zIndex from '@material-ui/core/styles/zIndex';

  
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




function HeroSection() {
  const classes = useStyles();
  $(window).on("load resize scroll", function() {
    $(".bg-static").each(function() {
      var windowTop = $(window).scrollTop();
      var elementTop1 = $(this).offset().top;
      var topPosition = elementTop1 - windowTop;
      
        $(this)
          .find(".bg-move")
          .css({ top: topPosition });
    });
  });
  
  
  $(window).on("load resize scroll", function() {
    $(".bg-static1").each(function() {
      var windowTop = $(window).scrollTop();
      var elementTop = $(this).offset().top;
      var topPosition1 = windowTop - elementTop;
      
        $(this)
          .find(".bg-move1")
          .css({ top: topPosition1 });
    });
  });

  const [scroll, setScroll] = useState(false);
 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 300);
   });
 }, []);
  



  return (




    
    <div id='herosection' className='hero-container'>
       
      <div className="section bg-static">
  <div className="bg-move"><img className='bg2' src={circle1} alt="text" /></div>
      </div>
      <div className="section bg-static1">
  <div className={scroll ? "bg-move12" : "bg-move1" }>  <img className='bg1' src={circle2} alt="text" /></div>
</div>
      <div className='circle4'>
                   <img className='cir4' src={circle4} alt="text" />
  </div>
<div className='circle3'>
                   <img className='cir3' src={circle3} alt="text" />
      </div>
     
     

      <div className="diiv" style={{ width: '100%', padding: '30px', zIndex: '1' }}>
        <Grid container spacing={3}>
           <Grid  item xs={12} md={5} sm={6}>
           <div className='logo-1'>
                   <img className='logo2' src={logo} alt="text" />
               </div>
           </Grid>
           
           <Grid item xs={12} md={7} sm={6}>
               <div className='text-1'>
                   <img className='text' src={text} alt="text" />
               </div>
            
           </Grid>
         </Grid>
      </div>
        
      <div className="rectangle-50" style={{ width: '100%', padding: '30px', marginTop: '5%' , zIndex: '1' }}>
        <Grid className="container-rectangle" container spacing={5}>
          <Grid item xs={12} md={3} sm={3}>
            <div className="h3h">
            <h3 className="h3">Total Supply</h3>
            </div>
            <Button className="button2" variant="outlined"  style={{backgroundColor: 'black', color: 'white', borderRadius: '50px', borderColor: 'white', width: '219px', marginTop: '20px', marginBottom: '20px' }}><h5 className="h5">100,000,000</h5></Button>
           </Grid>
           
          <Grid item xs={12} md={3} sm={3}>
          <div className="h3h">
           <h3 className="h3">Holders</h3>  
           </div>
           <Button className="button2" variant="outlined" style={{backgroundColor: 'black', color: 'white', borderRadius: '50px', borderColor: 'white', width: '219px', marginTop: '20px', marginBottom: '20px' }}><h5 className="h5">204</h5></Button>
          </Grid>
          <Grid item xs={12} md={3} sm={3}>
          <div className="h3h">
            <h3 className="h3">Price</h3>
            </div>
          <Button className="button2" variant="outlined"  style={{backgroundColor: 'black', color: 'white', borderRadius: '50px', borderColor: 'white', width: '219px', marginTop: '20px', marginBottom: '20px' }}><h5  className="h5">0.1 USD</h5></Button>
          </Grid>
          <Grid item xs={12} md={3} sm={3}>
          <div className="h3h">
            <h3 className="h3">Burned</h3>
            </div>
          <Button className="button2" variant="outlined"  style={{backgroundColor: 'black', color: 'white', borderRadius: '50px', borderColor: 'white', width: '219px', marginTop: '20px', marginBottom: '20px' }}><h5  className="h5">1,234</h5></Button> 
           </Grid>
         </Grid>
      </div>
      
      <div id='dex' style={{ width: '100%', padding: '10px', marginTop: '5%',textAlign: 'center', zIndex: '1' }}>
              
               <div className='dex-1'>
               <Tooltip title="Coming Soon" placement="top" >
                   <img className='dex' src={dex} alt="dex" />
                   </Tooltip>
               </div>
      
      </div>

          
    </div>

  );
}

export default HeroSection;
