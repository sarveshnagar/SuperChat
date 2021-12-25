import React from 'react'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';


export const About = () => {
    return (
        <div className="d-flex align-items-center justify-content-center" style={{minHeight: '100vh'}}>
            <MDBCard style={{ maxWidth: '50rem'}} className='m-3 font'>
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay' style={{backgroundColor: '#2E2E2E'}}>
                    <MDBCardImage src='https://avatars.githubusercontent.com/u/40837929?s=400&u=fff5c3d912bc9c581461e4b4e8e4b6ce9c83c1bd&v=4' style={{maxWidth: '7rem', borderRadius: '50%'}} className='img-fluid shadow-2-strong m-2' fluid position='top' alt='...' />
                    <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </a>
                </MDBRipple>
                <MDBCardBody>
                    <MDBCardTitle className="text-center">Hey!</MDBCardTitle>
                    <MDBCardText style={{color: 'black'}}>
                        I'm Sarvesh. I've developed this Chat App using React ⚛️ with ❤️. Wanna know more about me? Hit below button 😉 <br /> <br />
                        Happy Coding ✌️ 
                    </MDBCardText>
                    <MDBBtn rounded style={{backgroundColor: '#2E2E2E'}} href='https://www.linkedin.com/in/sarvesh-nagar/'>Know More</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </div>
    )
}
