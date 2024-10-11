import React, { useState } from 'react';
import { validateName, validateEmail, validatePostalCode, validateDOB } from '../validators/validators';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TextField, Button, Grid, Typography, Container } from '@mui/material';

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
        
        // Met à jour le champ modifié dans formData
        const newFormData = { ...formData, [name]: value };
        setFormData(newFormData);
    
        // Met à jour les erreurs de validation pour le champ modifié
        const newErrors = { ...errors };
        if (name === 'firstName' || name === 'lastName' || name === 'city') {
            newErrors[name] = validateName(value) ? '' : 'Invalid Name';
        } else if (name === 'email') {
            newErrors[name] = validateEmail(value) ? '' : 'Invalid Email';
        } else if (name === 'postalCode') {
            newErrors[name] = validatePostalCode(value) ? '' : 'Invalid postal code';
        } else if (name === 'dob') {
            newErrors[name] = validateDOB(value) ? '' : 'age < 18';
        }
        setErrors(newErrors);
    
        // Vérifie si tout le formulaire est valide (y compris le champ en cours)
        const isFormCurrentlyValid =
            validateName(newFormData.firstName) &&
            validateName(newFormData.lastName) &&
            validateEmail(newFormData.email) &&
            validatePostalCode(newFormData.postalCode) &&
            validateDOB(newFormData.dob);
    
        // Met à jour l'état isFormValid avec la nouvelle validation
        setIsFormValid(isFormCurrentlyValid);
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            onRegister(formData);
            toast.success('Inscription réussie');
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
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom align="center">
                Inscription
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Prénom"
                            name="firstName"
                            placeholder='First name'
                            value={formData.firstName}
                            onChange={handleChange}
                            error={!!errors.firstName}
                            helperText={errors.firstName}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Nom"
                            name="lastName"
                            placeholder='Last name'
                            value={formData.lastName}
                            onChange={handleChange}
                            error={!!errors.lastName}
                            helperText={errors.lastName}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Email"
                            type="email"
                            name="email"
                            placeholder='Email'
                            value={formData.email}
                            onChange={handleChange}
                            error={!!errors.email}
                            helperText={errors.email}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Date de naissance"
                            type="date"
                            name="dob"
                            placeholder='Date of birth'
                            value={formData.dob}
                            onChange={handleChange}
                            error={!!errors.dob}
                            helperText={errors.dob}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Ville"
                            name="city"
                            placeholder='City'
                            value={formData.city}
                            onChange={handleChange}
                            error={!!errors.city}
                            helperText={errors.city}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Code postal"
                            name="postalCode"
                            placeholder='Postal Code'
                            value={formData.postalCode}
                            onChange={handleChange}
                            error={!!errors.postalCode}
                            helperText={errors.postalCode}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled={!isFormValid}
                        >
                            Enregistrer
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default RegisterForm;
