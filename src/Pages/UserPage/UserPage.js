
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import "./User.css"
import React, { useState, useEffect } from 'react';
import axiosInstance from '../../Components/axios/axios';
import Cookies from 'js-cookie';


export default function PersonalProfile() {

    const [userData, setUserData] = useState({});
    const [userImage, setUserImage] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const ID = localStorage.getItem('userId');
            const authorization = Cookies.get('authorization');
            const response = await axiosInstance.get(`moodle/user/${ID}`, {
                headers: {
                    Authorization: authorization,
                },
            });
            setUserData(response.data);
            // localStorage.removeItem('userId');
        };

        fetchData();
    }, []);


    useEffect(() => {
        const fetchImage = async () => {
            const ID = localStorage.getItem('userId');
            const authorization = Cookies.get('authorization');
            const response22 = await axiosInstance.get(`moodle/user/image/${ID}`, {
                headers: {
                    Authorization: authorization,
                },
            });
            // console.log(response22.data.imageAddress);
            setUserImage(response22.data.imageAddress);
        };
        fetchImage();

    }, []);
    return (
        <section  style={{direction:"rtl"}}>
            <MDBContainer className="py-5 h-100" style={{backgroundColor:"white"}} >
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol lg="6" className="mb-4 mb-lg-0">
                        <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                            <MDBRow className="g-0">
                                <MDBCol md="4" className="gradient-custom text-center text-white"
                                    style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                                    <MDBCardImage src="https://www.pngmart.com/files/21/Admin-Profile-PNG-Isolated-Pic.png"
                                        alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                                    <MDBTypography tag="h5"> {userData.id}</MDBTypography>
                                    <MDBTypography tag="h5">{userData.username}</MDBTypography>
                                    <MDBCardText> {userData.firstName} {userData.family}</MDBCardText>
                                    <MDBIcon far icon="edit mb-5" />
                                </MDBCol>
                                <MDBCol md="8">
                                    <MDBCardBody className="p-4">
                                        <MDBTypography tag="h6">
                                            {userData.roles?.map((role) => (
                                                <li key={role.id}>{role.name} ({role.userRole})</li>
                                            ))}
                                        </MDBTypography>
                                        <hr className="mt-0 mb-4" />
                                        <MDBRow className="pt-1">
                                            <MDBCol size="6" className="mb-3">
                                                {userData?.infoData?.map((item) => (<li key={item.field.id}>
                                                    {item.field.name} : {item.data}
                                                </li>
                                                ))}
                                            </MDBCol>
                                        </MDBRow>

                                        <MDBTypography tag="h6">

                                        </MDBTypography>
                                        <hr className="mt-0 mb-4" />
                                       

                                        <div className="d-flex justify-content-start">
                                            <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                                            <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                                            <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                                        </div>
                                        
                                    </MDBCardBody>

                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}