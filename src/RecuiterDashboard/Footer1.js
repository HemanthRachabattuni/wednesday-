import React, { Component } from 'react'
import { Layout, Menu, Divider, Icon } from 'antd';
import { SocialIcon } from 'react-social-icons';

const { Header, Content, Footer } = Layout;

export default class Footer1 extends Component {
    render() {
        return (
            <div>
                 <Footer style={{background:'#cfd8dc', height:200 , fontFamily:'Quicksand',}}>
                    
                    <div style={{display:'flex', flexDirection:'row' , marginLeft:450}}>
                        <div style={{display:'flex', flexDirection:'row'}}>
                    <text style={{color:'black' , fontSize:25, marginRight:30,marginTop:70, fontWeight:600, display:'flex', justifyContent:'center'}}> Hire your Job</text>
                    <Divider type="vertical"  style={{background:'black' , height:100, width:.75, marginTop:50 }}/>

                    </div>


                    <div  style={{display:'flex', flexDirection:'column' , marginLeft:30, marginTop:40}}>
                        <text style={{fontSize:25, color:'black', marginTop:3}}>info@hireyourJob.com</text>
                        <div style={{marginTop:15, marginLeft:30, fontSize:21}} >
                        <SocialIcon  className='social' fgColor="white" url="http://linkedin.com/in/MacropaceTechnologies" />
                        <SocialIcon  className='social' fgColor="white" url="http://facebook.com/in/MacropaceTechnologies" />
                        <SocialIcon network="twitter" className='social' fgColor="white"  url="http://twitter.com/in/MacropaceTechnologies"/>

                    
                    </div>
                    </div>
                    </div>
            
            </Footer>
            </div>
        )
    }
}
