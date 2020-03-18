import React, { Component } from 'react'
import { Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPowerOff } from 'react-icons/fa';


export default class Header extends Component {
    render() {
        return (
            <div style={{}}>
                <div style={{ width: '100%' ,}}>
                    <Navbar style={{ backgroundColor: '#78909c', fontFamily:'Quicksand' ,display:'flex', flexDirection:'row' }} >
                        <Navbar.Brand style={{ color: 'white' }}>Recruiters Dashboard</Navbar.Brand>
                        <Link variant="secondary" size="sm" style={{marginLeft:900, marginTop:0 , backgroundColor:'white', color:'black' , fontFamily:'Quicksand', borderRadius:5}} to="/">
                        <FaPowerOff style={{ marginLeft:5, marginRight:5  }} />
                       <text style={{fontSize:15, fontFamily:'Quicksand', fontWeight:600 , marginRight:10}}> Logout </text>
                    </Link>
                    </Navbar>
                    
                    
                
                </div>
               
            </div>
        )
    }
}
