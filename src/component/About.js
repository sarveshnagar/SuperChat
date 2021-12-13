import React from 'react'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';


export const About = () => {
    return (
        <div className="d-flex align-items-center justify-content-center" style={{minHeight: '100vh', backgroundColor: '#064635'}}>
            <MDBCard style={{ maxWidth: '50rem', backgroundColor: '#5F7A61' }} className='m-3'>
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage src='https://avatars.githubusercontent.com/u/40837929?s=400&u=fff5c3d912bc9c581461e4b4e8e4b6ce9c83c1bd&v=4' style={{maxWidth: '7rem', borderRadius: '50%'}} className='img-fluid shadow-2-strong m-2' fluid position='top' alt='...' />
                    <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </a>
                </MDBRipple>
                {/* <MDBCardImage className='bg-image hover-overlay' src='https://avatars.githubusercontent.com/u/40837929?s=400&u=fff5c3d912bc9c581461e4b4e8e4b6ce9c83c1bd&v=4' fluid position='top' alt='...' /> */}
                <MDBCardBody>
                    {/* <MDBCardTitle style={{color: '#D5EEBB'}}>About Me</MDBCardTitle> */}
                    <MDBCardText>
                        Hey! I'm Sarvesh. I've developed this Chat App using React with ❤️. Wanna know more about me? Hit below button 😉 <br /> <br />
                        Happy Coding ✌️ 
                    </MDBCardText>
                    <MDBBtn rounded style={{backgroundColor: '#F0BB62', color: 'black'}} href='https://www.linkedin.com/in/sarvesh-nagar/'>Know More</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </div>
    )
}
