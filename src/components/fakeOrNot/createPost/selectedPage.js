import React from 'react';
import Q1 from './Q1';
import Q2 from './Q2';
import Q3 from './Q3';
import Q4 from './Q4';
import Q5 from './Q5';

const SelectedPage = (props) => {
    const selectedValue = props.selectedValue;

    
      if(selectedValue==1){
          return <Q1 />;
      }else if(selectedValue==2){
          return <Q2 />;
      }
      else if(selectedValue==3){
        return <Q3 />;
    }
    else if(selectedValue==4){
        return <Q4 />;
    }
      else{
          return <Q5 />
      }
      
}


export default (SelectedPage);
