import React from 'react'
import Header from './Header'
import Footer from '../CandidateDashboard/Footer/Footer';
import TableApplicants from './TableApplicants';

const Applicants = () => {

    return (
                        

        <div style={{}}>
        < Header/>
        <text style={{color:'black', fontSize:17, fontWeight:600, }}> <u>Postjobs </u></text>
        <TableApplicants/>

          <div style={{marginTop:300}}>

               <Footer/>
               </div>
        </div>
    )
  }
export default Applicants;
