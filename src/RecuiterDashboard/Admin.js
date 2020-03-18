import React, { Component }from "react";
import { BrowserRouter as Router, Route, Link, Redirect, NavLink } from "react-router-dom";
import Dashboard from "./Dashboard";
import "./Toolbar.css"
import "../App.css"
import PostJobs from "./PostJobs";
import Settings from "./Settings";
import Managejobs from "./Managejobs";
import { Layout, Menu, Icon } from 'antd';


import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Applicants from "./Applicants";




class Admin extends Component{
    render(){
        return(
            <Router>
                <div className="App">
            <Route render={({ location, history }) => (
                <React.Fragment>
                    <SideNav className="toolbar" style={{color:"black", background:"#bdbdbd" ,fontFamily:'Quicksand'  }}
                        onSelect={(selected) => {
                            const to = '/recruiter-dashboard/' + selected;
                            if (location.pathname !== to) {
                                history.push(to);
                            }
                        }}
                    >
                        
                        <SideNav.Nav defaultSelected="Dashboard" style={{ paddingTop:55}}>
                            <NavItem eventKey="">
                               
                                <NavText style={{color:'black', fontSize:17, fontWeight:500}}> 
                                <Icon type="user" className="icon" />
                                    Dashboard
                                </NavText>
                            </NavItem>
                           
                            <NavItem eventKey="PostJobs">
                               
                                <NavText style={{color:'black', fontSize:17, fontWeight:500}}>
                                <Icon type="upload" className="icon" />
                                    PostJobs
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="Managejobs">
                               
                               <NavText style={{color:'black', fontSize:17, fontWeight:500}}>
                               <Icon type="laptop"  className="icon" />

                                   Managejobs
                               </NavText>
                           </NavItem>
                           <NavItem eventKey="Applicants" >
                               
                               <NavText style={{color:'black', fontSize:17, fontWeight:500}}>
                               <Icon type="bar-chart"  className="icon" />

                                   Applicants
                               </NavText>
                           </NavItem>
                            <NavItem eventKey="Settings">
                               
                                <NavText style={{color:'black', fontSize:17, fontWeight:500}}>
                                <Icon type="appstore-o" className="icon" />

                                    Settings
                                </NavText>
                            </NavItem>
                           
                        </SideNav.Nav>
                    </SideNav>
                    <main>
                        {/* <Route path="/" exact component={Dashboard} /> */}
                        <Route path="/recruiter-dashboard" exact component={Dashboard} />
                        <Route path="/recruiter-dashboard/PostJobs" component={PostJobs} />
                        <Route path="/recruiter-dashboard/Managejobs" component={Managejobs} />
                        <Route path="/recruiter-dashboard/Settings" component={Settings} />
                        <Route path="/recruiter-dashboard/Applicants" component={Applicants} />

                    </main>
                </React.Fragment>
            )}
            />
            </div>
            

        </Router>
        
    
        )
    }
}
export default Admin;