import React from 'react';
import './Cards.css';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import img1 from '../img/Group 605.png';
import img2 from '../img/Group 601.png';
import img3 from '../img/Group 600.png';
import img4 from '../img/Group 603.png';
import img5 from '../img/Group 602.png';
import img6 from '../img/Group 13.png';
import img7 from '../img/Group 60.png';

  
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


function Cards() {
  const classes = useStyles();
  return (
    



    <div id='cards' className='cards2'>
            
        <div style={{ width: '100%', marginTop: '50px' }}>
           <div className="div-card">
      <Grid className='highlight' container spacing={0}>
      
        <Grid item xs={12} sm={6} md={3} style={{textAlign: 'center'}}>
             <div className="flip-card-inner ">
          <div className="flip-card-front change1" style={{justifyContent: 'left', display: 'block'}} >
             <h2 className="text2">Token <br /><span style={{color: 'white'}}>Highlights</span></h2>
             <h2 className="text3">Hover to <br /> know more </h2> 
          </div>
          
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <div className="flip-card" tabIndex="0">
       <div className="flip-card-inner">
          <div className="flip-card-front change2" style={{backgroundColor: '#25355C'}}>
             <div className='text-123'>
                 <img src={img6} alt="Token Highlights" />
                 <br />
                 <h2 style={{color: 'white'}}>Capped Max<br /> Supply</h2>
             </div>

          </div>
          <div className="flip-card-back change2" style={{backgroundColor: '#25355C'}}>
             <div>
             <h3 className="t1">Capped Max <br />
 Supply</h3>
 <p className="t2">Max supply<br />
capped to 1 billion<br /> $BOIT Tokens</p>
</div>
          </div>
       </div>
   </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
           <div className="flip-card" tabIndex="0">
       <div className="flip-card-inner">
          <div className="flip-card-front change3">
            <div className='text-123'>
                 <img src={img7} alt="Token Highlights" />
                  <br />
                 <h2 style={{color: 'white'}}>Deflationary</h2>
             </div>
          </div>
          <div className="flip-card-back change3">
              <div>
             <h3 className="t1">Deflationary</h3>
 <p className="t2">Burned on usage to<br /> reduce token supply,<br /> making tokens worth<br /> more over time</p>
</div>
          </div>
       </div>
   </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <div className="flip-card" tabIndex="0">
       <div className="flip-card-inner">
          <div className="flip-card-front change4" style={{backgroundColor: '#25355C'}}>
             <div className='text-123'>
                 <img src={img3} alt="Token Highlights" />
                  <br />
                 <h2 style={{color: 'white'}}>DEX</h2>
             </div>
          </div>
          <div className="flip-card-back change4" style={{backgroundColor: '#25355C'}}>
             <div>
             <h3 className="t1">DEX</h3>
 <p className="t2">Swap, Farm or Pool<br /> tokens and earn<br />
$BOIT</p>
</div>
          </div>
       </div>
   </div>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
           <div className="flip-card" tabIndex="0">
       <div className="flip-card-inner">
          <div className="flip-card-front change5" style={{backgroundColor: '#25355C'}}>
             <div className='text-123'>
                 <img src={img1} alt="Token Highlights" />
                  <br />
                 <h2 style={{color: 'white'}}>Staking</h2>
             </div>
          </div>
          <div className="flip-card-back change5" style={{backgroundColor: '#25355C'}}>
            <div>
             <h3 className="t1">Staking</h3>
 <p className="t2">Stake tokens for<br /> rewards & gain<br /> governance<br />
powers</p>
</div>
          </div>
       </div>
   </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
           <div className="flip-card" tabIndex="0">
       <div className="flip-card-inner">
          <div className="flip-card-front change6">
            <div className='text-123'>
                 <img src={img5} alt="Token Highlights" />
                  <br />
                 <h2 style={{color: 'white'}}>Utility</h2>
             </div>
          </div>
          <div className="flip-card-back change6">
              <div>
             <h3 className="t1">Utility</h3>
 <p className="t2">The Real-World-Assets<br /> (RWA) protocol enables<br /> the tokens to have a vast<br /> utility across rentals of<br /> Supercars, Private Jets<br /> and Yachts, NFT’s and<br /> Internal Defi protocol</p>
</div>
          </div>
       </div>
   </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <div className="flip-card" tabIndex="0">
       <div className="flip-card-inner">
          <div className="flip-card-front change7" style={{backgroundColor: '#25355C'}}>
             <div className='text-123'>
                 <img src={img4} alt="Token Highlights" />
                  <br />
                 <h2 style={{color: 'white'}}>NFT</h2>
             </div>
          </div>
          <div className="flip-card-back change7" style={{backgroundColor: '#25355C'}}>
             <div>
             <h3 className="t1">NFT</h3>
 <p className="t2">Use tokens to buy/sell<br /> NFT’s. Boit’s Supercar<br /> NFT Trump cards<br /> collection coming soon</p>
</div>
          </div>
       </div>
   </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3} style={{textAlign: 'center'}}>
             <div className="flip-card-inner ">
          <div className="flip-card-front change1" style={{justifyContent: 'left', display: 'block'}} >
             <h2 className="text2">Token <br /><span style={{color: 'white'}}>Highlights</span></h2>
             <h2 className="text3">Hover to <br /> know more </h2> 
          </div>
          
          </div>
        </Grid> 
        
              </Grid>
              </div>
    </div>
    </div>
  );
}

export default Cards;
