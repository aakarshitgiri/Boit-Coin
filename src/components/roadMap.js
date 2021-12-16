import React from 'react';
import './roadMap.css';


import r1 from '../img/r-1.png';
import r2 from '../img/r-2.png';
import r3 from '../img/r-3.png';
import r4 from '../img/r-4.png';
import circle5 from '../img/Ellipse 37a.png';
import $ from 'jquery';





class RoadMap extends React.Component {
  
  constructor(){
    super()
    this.scroll = this.scroll.bind(this)
  }


  scroll(direction){
    let far = $( '.image-container' ).width()/2*direction;
    let pos = $('.image-container').scrollLeft() + far;
    $('.image-container').animate( { scrollLeft: pos }, 1000)
  }
  

  render() {
    return <div id='roadmap' className="main">
      
      <div className="container-1">
        <h1 className="t5">Road<span style={{color: '#0064E5'}}>map</span></h1>
      </div>

     
       <div className="container">
    
       <a className="prev" onClick={this.scroll.bind(null, -1)}>&#10094;</a>
          <div className="image-container">
        <img className='image' src={r1} alt="2021" />  
        <img className='image' src={r2} alt="2022" />  
        <img className='image' src={r3} alt="2023" />  
        <img className='image' src={r4} alt="2024" />  
        </div>
        <a className="next" onClick={this.scroll.bind(null,1)}>&#10095;</a>
        </div> 
     
     
            <div className='circle5'>
                   <img className='cir5' src={circle5} alt="text" />
      </div>
       
      </div>;
  }
}

export default RoadMap;
