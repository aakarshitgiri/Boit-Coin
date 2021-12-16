import React from "react";
import ReactDOM from "react-dom";
import './tokenOmics.css';

import circle6 from '../img/Ellipse 37b.png';
import circle7 from '../img/Ellipse 37c.png';
import circle8 from '../img/Ellipse 37d.png';
import p1 from '../img/p-1.png';

var data = [
  {
    name: "<span>(1.57%) Presale</span>",
    y: 1.57,
    
    color: '#D2DBDD',
    
  },{
    name: "<span>(20%) Boit Foundation</span>",
    y: 20,
    
    color: '#3A3C3D'
  },
  {
  name: "<span>(0.10%) Airdrops</span>",
  y: 0.10,
  
  color: '#42494A'
  },
  {
  name: "<span>(3.41%) Whitelist Sale</span>",
  y: 3.14,
  
  color: '#99A0A1'
  },
  {
  name: "<span>(5%) Seed Investor</span>",
  y: 5,
  
  color: '#5B6466'
  },
  
  {
    name: "<span>(20%) Boit Foundation</span>",
    y: 20,
    
    color: '#3A3C3D'
  },{
  name: "<span>(2%) CEX Liquidity</span>",
  y: 2,
  
  color: '#637B80'
  },{
  name: "<span>(10%) Vendor Network</span>",
  y: 10,
  
  color: '#212121'
  },
  
    {
  name: "<span>Advisors (2.83%)</span>",
  y: 2.83,
  
  color: '#949494'
  },{
    name: "<span>Staking rewards ( 28.50%)</span>",
    y: 28.05,
    
    color: '#C5D0D2'
    },{
  name: "<span>Strategic Partnership (3%)</span>",
  y: 3,
  
  color: '#696F71'
  },{
  name: "<span>Marketing (12%)</span>",
  y: 12,
  
  color: '#70868A'
  },
    {
  name: "<span>Dev Allocation (10%)</span>",
  y: 10,
  
  color: '#333C3E'
  },{
  name: "<span>Public IDO (1.5%)</span>",
  y: 1.5,
  
  color: '#42494A'
  },{
    name: "<span>(20%) Boit Foundation</span>",
    y: 20,
    
    color: '#3A3C3D'
  },{
  name: "<span>Partner Allocation (0.09%)</span>",
  y: 1.57,
  
  color: '#C5D0D2'
  }
]




var Chart = require("./Chart",),
  options = {
    chart: {

      backgroundColor: 'none',
      width: 1300,
      height: 700,
      type: "pie"
    },
    plotOptions: {
      pie: {
        size: '50%',
          startAngle: 90,
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              
              alignTo: 'plotEdges'
          },

      },
      series: {
        point: {
            events: {
                mouseOver: function () {
                    this.slice();
                },
                mouseOut: function () {
                    this.slice();
                }
            }
        }
    }
  },
  
 
    tooltip: { enabled: false },
    title: {
      text: ''
  },
  accessibility: {
    enabled: false,
    point: {

      valueSuffix: '%'
    }
  },
    series: [{
       dataLabels: {
        connectorShape: 'crookedLine',
        crookDistance: '85%'
    },
        data: data.slice(), 
       
    }]
  };

class Tokenomics extends React.Component {
  refresh = () => {
    
    this.setState({});
  };
  render() {
    const opts = { container: "chart", options: options };
    return (
      
   
         <div id="tokenomics" className='cards'>
            <div className="container-2">
        <h1 className="t5"><span style={{color: '#0064E5', zIndex: "2"}}>Token</span><span style={{zIndex: "2"}}>omics</span></h1>
      </div>
    
      <div className='circle6'>
                   <img className='cir6' src={circle6} alt="text" />
      </div>
      <div className='circle7'>
                   <img className='cir7' src={circle7} alt="text" />
      </div>
      
     
      <div className='circle8'>
                   <img className='cir8' src={circle8} alt="text" />
      </div>
     
     
    <div className="div456"> <Chart {...opts} /> </div>
       
        <div className="box" />
      </div> 
    );
  }
}

export default Tokenomics;
