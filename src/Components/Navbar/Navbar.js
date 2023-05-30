import React, { useState } from 'react';
import "./Navbar.css"
import { MDBBadge, MDBCollapse, MDBContainer, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBIcon, MDBInput, MDBListGroup, MDBListGroupItem, MDBNavbar, MDBNavbarBrand, MDBNavbarItem, MDBNavbarLink, MDBNavbarNav, MDBNavbarToggler, MDBRipple, MDBDropdownLink } from 'mdb-react-ui-kit';
import Logout from '../Logout/Logout-btn';
import DashboardPage from '../Admin/Admin1';


export default function ResponsiveAppBar() {
  const [showShow, setShowShow] = useState(false);

  const toggleShow = () => setShowShow(!showShow);

  return (
    <>

      <MDBCollapse show={showShow} tag="nav" className="d-lg-block bg-white sidebar">
        <div className="position-sticky">
          <MDBListGroup flush className="mx-3 mt-4">
            <br />
            <MDBRipple rippleTag='span'>
              <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded rounded' style={{backgroundColor:"transparent"}}>
                <MDBIcon fas icon="tachometer-alt me-3" />
                Main Dashboard
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag='span' >
              <MDBListGroupItem style={{backgroundColor:"transparent"}} tag='a' href='#' action className='border-0 border-bottom rounded' aria-current='true'>
                <MDBIcon fas icon="chart-area me-3" />
                Website traffic
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag='span'>
              <MDBListGroupItem style={{backgroundColor:"transparent"}} tag='a' href='#' action className='border-0 border-bottom rounded'>
                <MDBIcon fas icon="lock me-3" />
                Password
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag='span'>
              <MDBListGroupItem style={{backgroundColor:"transparent"}} tag='a' href='#' action className='border-0 border-bottom rounded'>
                <MDBIcon fas icon="chart-line me-3" />
                Analitics
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag='span'>
              <MDBListGroupItem style={{backgroundColor:"transparent"}} tag='a' href='#' action className='border-0 border-bottom rounded'>
                <MDBIcon fas icon="chart-pie me-3" />
                SEO
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag='span'>
              <MDBListGroupItem style={{backgroundColor:"transparent"}} tag='a' href='#' action className='border-0 border-bottom rounded'>
                <MDBIcon far icon="chart-bar me-3" />
                Orders
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag='span'>
              <MDBListGroupItem style={{backgroundColor:"transparent"}} tag='a' href='#' action className='border-0 border-bottom rounded'>
                <MDBIcon fas icon="globe me-3" />
                International
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag='span'>
              <MDBListGroupItem style={{backgroundColor:"transparent"}} tag='a' href='#' action className='border-0 border-bottom rounded'>
                <MDBIcon fas icon="building me-3" />
                Partners
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag='span'>
              <MDBListGroupItem style={{backgroundColor:"transparent"}} tag='a' href='#' action className='border-0 border-bottom rounded'>
                <MDBIcon fas icon="calendar me-3" />
                Calendar
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag='span'>
              <MDBListGroupItem style={{backgroundColor:"transparent"}} tag='a' href='#' action className='border-0 border-bottom rounded'>
                <MDBIcon fas icon="users me-3" />
                User
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag='span'>
              <MDBListGroupItem style={{backgroundColor:"transparent"}} tag='a' href='#' action className='border-0 rounded'>
                <MDBIcon fas icon="money-bill me-3" />
                Sales
              </MDBListGroupItem>
            </MDBRipple>
             <div>
              <br />
              <br />
              <img src='https://karyar.kaaryar.ir/wp-content/uploads/2021/12/%D9%87%D9%85%DA%A9%D8%A7%D8%B1%DB%8C.jpg' style={{width:"100%"}} />
             </div>
          </MDBListGroup>
        </div>
      </MDBCollapse>

      <MDBNavbar expand='lg' light bgColor='light' style={{ position: "fixed" }}>
        <MDBContainer fluid>
          <MDBNavbarNav className="d-flex flex-row align-items-center w-auto">
            <MDBNavbarToggler
              type='button'
              aria-label='Toggle navigation'
              onClick={toggleShow}
            >
              <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>
            <MDBNavbarBrand href='#'>
              <img
                src='https://storage.irantalent.com/brand-data/brand_data_2474EUw_60c0ab8e8b322.jpeg?w=1140'
                height='30'
                alt=''
                loading='lazy'
              />
            </MDBNavbarBrand>

            <MDBCollapse navbar>
              <MDBNavbarItem className="d-flex align-items-center">
                <MDBInput label='Search (ctrl + "/" to focus)' id='form1' type='text' />
                <MDBIcon fas icon="search mx-2" />
              </MDBNavbarItem>
            </MDBCollapse>


          </MDBNavbarNav>
          <MDBNavbarNav className="d-flex flex-row justify-content-end w-auto">

            <MDBNavbarItem className='me-3 me-lg-0 d-flex align-items-center'>
              <MDBDropdown>

                <MDBDropdownToggle tag="a" href="#!" className="hidden-arrow nav-link">
                  <MDBIcon fas icon="bell" />
                  <MDBBadge color='danger' notification pill>
                    1
                  </MDBBadge>
                </MDBDropdownToggle>


              </MDBDropdown>
            </MDBNavbarItem>



            <MDBNavbarItem className='me-3 me-lg-0 d-flex align-items-center'>
              <MDBDropdown>

                <MDBDropdownToggle tag="a" href="#!" className="hidden-arrow nav-link">
               
                  <MDBDropdown>
                    
                    <MDBDropdownToggle style={{  backgroundColor: "white", boxShadow:"none" , height:"0%" }} >
                      <spam><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP_uoiis6txmxRX1Z-G_kauz4oSCEzI-A7oj_Deg4y0n3C3htOlSNv8F3Pp0n8peZG2Eg&usqp=CAU" className="rounded-circle" height="22" alt="" loading="lazy" /></spam> 
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                    <DashboardPage />
                      <MDBDropdownItem link>Action</MDBDropdownItem>
                      <MDBDropdownItem link>Another action</MDBDropdownItem>
                      <MDBDropdownItem link><Logout /></MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBDropdownToggle>


              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>

        </MDBContainer>
       
      </MDBNavbar>
    </>
  );
}