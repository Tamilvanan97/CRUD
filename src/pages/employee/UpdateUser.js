import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import './UpdateUser.css';

const UpdateUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        department: ''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/employee/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch employee data');
                }
                const data = await response.json();
                setFormData(data);
            } catch (error) {
                console.error('Error fetching employee:', error.message);
            }
        };

        fetchEmployee();
    }, [id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(`http://localhost:8080/api/employee/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error('Failed to update employee');
            }
            const data = await response.json();
            console.log('User Updated:', data);

            setLoading(false);
            navigate('/');
        } catch (error) {
            setLoading(false);
            setError(error.message);
            console.error('Error updating employee:', error.message);
        }
    };

    return (
        <div className="center-form">
            <h1>Edit Employee</h1>
            {error && <p className="error-message">{error}</p>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicName">
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPhone">
                    <Form.Control
                        type="text"
                        name="phone"
                        placeholder="Enter phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formBasicDepartment">
                    <Form.Control
                        type="text"
                        name="department"
                        placeholder="Enter department"
                        value={formData.department}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100" disabled={loading}>
                    {loading ? 'Updating...' : 'Edit Employee'}
                </Button>
            </Form>
        </div>
    );
};

export default UpdateUser;