import React, { useState } from 'react';
import { validateName, validateEmail, validatePostalCode, validateDOB } from '../validators/validators';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterForm = ({ onRegister }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        dob: '',
        city: '',
        postalCode: '',
    });

    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value});

        //Validation des champs
        let newErrors = { ...errors };
        if(name === 'firstName' || name === 'lastName' || name === 'city') {
            newErrors[name] = validateName(value) ? '' : 'Invalid Name';
        } else if(name === 'email') {
            newErrors[name] = validateEmail(value) ? '' : 'Invalid Email';
        } else if(name === 'postalCode') {
            newErrors[name] = validatePostalCode(value) ? '' : 'Invalid postal code';
        } else if(name === 'dob') {
            newErrors[name] = validateDOB(value) ? '' : 'age < 18';
        }
        setErrors(newErrors);

        //Verification si tous les champs sont valides
        setIsFormValid(
            validateName(formData.firstName) &&
            validateName(formData.lastName) &&
            validateEmail(formData.email) &&
            validatePostalCode(formData.postalCode) &&
            validateDOB(formData.dob)
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isFormValid) {
            onRegister(formData);
            toast.success('Inscription success');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                dob: '',
                city: '',
                postalCode: '',
            });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='firstName'
                placeholder='First name'
                value={formData.firstName}
                onChange={handleChange}
            />
            <span>{errors.firstName}</span>

            <input
                type='text'
                name='lastName'
                placeholder='Last name'
                value={formData.lastName}
                onChange={handleChange}
            />
            <span>{errors.lastName}</span>

            <input
                type='email'
                name='email'
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
            />
            <span>{errors.email}</span>

            <input
                type='date'
                name='dob'
                placeholder='Date of birth'
                value={formData.dob}
                onChange={handleChange}
            />
            <span>{errors.dob}</span>

            <input
                type="text"
                name="city"
                placeholder="Ville"
                value={formData.city}
                onChange={handleChange}
            />
            <span>{errors.city}</span>
            
            <input
                type="text"
                name="postalCode"
                placeholder="Code postal"
                value={formData.postalCode}
                onChange={handleChange}
            />
            <span>{errors.postalCode}</span>

            <button type='submit' disabled={!isFormValid}>
                Enregistrer
            </button>
        </form>
    );
};

export default RegisterForm;