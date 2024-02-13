import React, { useState } from 'react';
import { Card, Col, Row, Container } from 'reactstrap';
import { GithubUserType } from '../types';
import SocialLinks from './SocialLinks';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'; // Import axios

const GithubProfileCard = ({ avatar_url, bio, location }: GithubUserType) => {
  const [fullname, setFullname] = useState('');
  const [phone, setPhoneNo] = useState('');
  const [email, setEmail] = useState('');

  const handleFullnameChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setFullname(event.target.value);
  };

  const handlePhoneChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setPhoneNo(event.target.value);
  };

  const handleEmailChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    // Construct the data object to send
    const data = {
      "name": fullname,
      "email": email,
      "phone": phone
    };

    try {
      // Send the data to the backend
      const response = await axios.post('https://portfolio-panel-libb.onrender.com/contacts', data);
      console.log(response.data);
      // Handle response if needed
    } catch (error) {
      console.error('Error while submitting data:', error);
      // Handle error if needed
    }
  };



  return (
    <Card className="section-lg bg-gradient-info shadow-lg border-0">
      <Container className="">
        <div className="p-2">
          <Row className="">
            <Col className="order-lg-2" lg="4">
              <img
                src={avatar_url}
                style={{ width: '200px' }}
                alt=""
                className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
              />
            </Col>
            <Col lg="8" className="order-lg-1">
              <h2 className="text-white">Reach Out to me!</h2>
              <div>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="fullname" style={{ width:'50%'}}>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      required
                      placeholder="Enter full name"
                      type="text"
                      name="fullname" 
                      value={fullname}
                      onChange={handleFullnameChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="phone" style={{ width:'50%'}}>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      required
                      placeholder="Enter phone number"
                      type="text"
                      name="phone" 
                      value={phone}
                      onChange={handlePhoneChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width:'50%'}}>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                      type="email" 
                      placeholder="Enter email" 
                      name="email" 
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
                <br></br>
              </div>
              <SocialLinks />
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
