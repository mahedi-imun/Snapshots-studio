import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
import googleMap from '../../../images/GoogleMapTA.png'
const CheckOut = () => {
    const handleFromSubmit = (event) => {
        event.preventDefault()
        Swal.fire(
            'thanks for add shipping info',
            '',
            'success'
        )
    }
    return (
        <div style={{ height: '100vh' }} className='container'>
            <h3 className='text-center mt-3'>Please add your shipping information</h3>
            <div className='d-flex flex-wrap mt-5'>
                <div className='w-50 d-flex justify-content-center align-items-center'>
                    <Form className='w-100 ' onSubmit={handleFromSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Control className='mb-2' type="text" placeholder="Enter Full Name" />
                            <Form.Control className='mb-2' type="email" placeholder="Enter email" />
                            <Form.Control className='mb-2' type="text" placeholder="address" />
                            <Form.Control className='mb-2' type="text" placeholder="city" />
                            <Form.Control className='mb-2' type="number" placeholder="Phone number" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Add
                        </Button>
                    </Form>
                </div>
                <div className='w-50 d-flex justify-content-center align-items-center'>
                   <img style={{width:'70%'}} src={googleMap} alt="" />

                </div>
            </div>

        </div>
    );
};

export default CheckOut;