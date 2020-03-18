import React from 'react'
import { Layout } from 'antd'
import Header from './Header'
import { Button } from 'antd';
import Tables from './Tables';
import Footer from '../CandidateDashboard/Footer/Footer';

const Managejobs = () => {

    return (
      <div >
                         < Header/>
                         <text style={{color:'black', fontSize:17, fontWeight:600, }}> <u>Managejobs </u></text>
        <div style={{}}>
         
          <Tables/>
          <div style={{marginTop:300}}>
               

               <Footer />
               </div>
        </div>
      </div>
    )
  }
export default Managejobs;
