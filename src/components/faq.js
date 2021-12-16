import React, {Fragment} from 'react';
import './faq.css';
import { Link } from 'react-router-dom';

import Faq from "react-faq-component";
import data from "./data";




function FaQ() {
   
  
 
    return  (
     
      <Fragment>
   
    

    <div id='faq' className='cards1'>
          <div className="heading1">
          <h2 className="heading2"> FAQ's </h2>      
       </div>
    <div className="faq-container">
    <Faq
        data={data}
        styles={{
          
          titleTextColor: "#48482a",
          rowTitleColor: "#78789a",
          rowTitleTextSize: "large",
          rowContentColor: "#48484a",
          rowContentTextSize: "16px",
          rowContentPaddingTop: "10px",
          rowContentPaddingBottom: "10px",
          rowContentPaddingLeft: "50px",
          rowContentPaddingRight: "150px",
          arrowColor: "white"
        }}
        config={{
          animate: true
        }}
      />
     
    </div>
     
        </div>
        </Fragment>  
  );
}

export default FaQ;
