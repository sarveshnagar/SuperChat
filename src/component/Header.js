import React, { useState } from 'react';

import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse
  } from 'mdb-react-ui-kit';

export const Header = (props) => {
    const [showBasic, setShowBasic] = useState(true);
    const isLoggedIn = props.auth.currentUser;
    if(isLoggedIn)
      return (
        <MDBNavbar className='font' expand='lg' dark bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>SuperChat🔥</MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='/'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/about'>About</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='https://www.buymeacoffee.com/sarveshnagar'>☕</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem onClick={() => props.auth.signOut()}>
                <MDBNavbarLink href='/'>Sign Out</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>

          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      )
    else
      return (
        <MDBNavbar expand='lg' dark bgColor='dark' className='font'>
          <MDBContainer fluid>
            <MDBNavbarBrand href='/'>SuperChat🔥</MDBNavbarBrand>

            <MDBNavbarToggler
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setShowBasic(!showBasic)}
            >
              <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>

            <MDBCollapse navbar show={showBasic}>
              <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                <MDBNavbarItem>
                  <MDBNavbarLink active aria-current='page' href='/'>
                    Home
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='/about'>About</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='https://www.buymeacoffee.com/sarveshnagar'>☕</MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>

            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      )    
}
