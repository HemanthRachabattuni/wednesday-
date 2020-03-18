import React, { Component } from 'react'
import Header from './Header';
import { Layout, Icon } from 'antd';
import './Toolbar.css'
import PostJobs from './PostJobs';
import { Link } from 'react-router-dom'
import Footer from '../CandidateDashboard/Footer/Footer';




const { Content } = Layout;

export default class Dashboard extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#eceff1', height: "100%", fontFamily: 'Quicksand' }}>
        <div>
          <Header />
          <text style={{color:'black', fontSize:17, fontWeight:600, }}> <u>Dashboard </u></text>

          <div>
            <Layout >
              <Content style={{ backgroundColor: '#eceff1', }}>
                <div style={{ background: '#cfd8dc', borderRadius: 25, height: 175, width: 1200, marginLeft: 33, marginTop: 25, top: 400, paddingBottom: 50, paddingTop: 50, paddingRight: 150, display: 'flex', flexDirection: "row", alignItems: 'space-around' }}>



                  <Link style={{ background: '#ffab40', height: 90, width: 200, marginLeft: 100, cursor: 'pointer', boxShadow: 10 }} to='/recruiter-dashboard/Managejobs' >
                    <div className='myjobs' >
                      <Icon type="user" style={{ fontSize: 25, color: 'black', marginTop: 19 }} />
                      <text style={{ color: 'black', fontSize: 25, marginTop: 0, }}>My Jobs</text>
                    </div>
                  </Link>

                  <Link style={{ background: '#00e676', height: 90, width: 200, marginLeft: 100, cursor: 'pointer' }} to='/recruiter-dashboard/Applicants' >
                    <div className='applicants' >
                      <Icon type='usergroup-add' style={{ fontSize: 25, color: 'black', marginTop: 19 }} />
                      <text style={{ color: 'black', fontSize: 25, marginTop: 0, }}>Applicants</text>
                    </div>
                  </Link>

                  <Link style={{ background: '#ff5252', height: 90, width: 200, marginLeft: 100, cursor: 'pointer' }} to='/recruiter-dashboard/Settings' >
                    <div className='myprofile' >
                      <Icon type="bar-chart" style={{ fontSize: 25, color: 'black', marginTop: 19 }} />
                      <text style={{ color: 'black', fontSize: 25, marginTop: 0, }}>My profile</text>
                    </div>
                  </Link>

                  <Link style={{ background: '#536dfe', height: 90, width: 200, marginLeft: 100, cursor: 'pointer' }} to='/recruiter-dashboard/PostJobs' >
                    <div className='postajob' >
                      <Icon type="folder-add" style={{ fontSize: 25, color: 'black', marginTop: 19 }} />
                      <text style={{ color: 'black', fontSize: 25, marginTop: 0, }}>Post a job</text>
                    </div>
                  </Link>

                </div>
                <div style={{ }}>
                  <Layout style={{ height: 250, width: 600 , background: '#ffffff', marginLeft: 300, borderRadius: 25, marginTop: 50 }}>

                  </Layout>
                  <div style={{marginTop:50 }}>

                    <Footer />
                  </div>

                </div>
              </Content>
            </Layout>


          </div>
        </div>


      </div>
    )
  }
}
