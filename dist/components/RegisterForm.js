'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _validatorsValidators = require('../validators/validators');

var _reactToastify = require('react-toastify');

require('react-toastify/dist/ReactToastify.css');

var _muiMaterial = require('@mui/material');

/**
 * RegisterForm component allows users to input their personal information
 * and validates the form before submission.
 * 
 * @param {Object} props - The component props.
 * @param {Function} props.onRegister - A callback function to handle registration. It is called when the form is successfully submitted.
 * @returns {JSX.Element} A form component with fields for first name, last name, email, date of birth, city, and postal code.
 */
var RegisterForm = function RegisterForm(_ref) {
    var onRegister = _ref.onRegister;

    /**
     * formData state holds the values of the form fields.
     * @typedef {Object} formData
     * @property {string} firstName - The user's first name.
     * @property {string} lastName - The user's last name.
     * @property {string} email - The user's email.
     * @property {string} dob - The user's date of birth (YYYY-MM-DD format).
     * @property {string} city - The user's city.
     * @property {string} postalCode - The user's postal code.
     */

    var _useState = (0, _react.useState)({
        firstName: '',
        lastName: '',
        email: '',
        dob: '',
        city: '',
        postalCode: ''
    });

    var _useState2 = _slicedToArray(_useState, 2);

    var formData = _useState2[0];
    var setFormData = _useState2[1];

    /**
     * errors state holds validation error messages for form fields.
     * @typedef {Object} errors
     * @property {string} firstName - Error message for the first name field.
     * @property {string} lastName - Error message for the last name field.
     * @property {string} email - Error message for the email field.
     * @property {string} dob - Error message for the date of birth field.
     * @property {string} city - Error message for the city field.
     * @property {string} postalCode - Error message for the postal code field.
     */

    var _useState3 = (0, _react.useState)({});

    var _useState32 = _slicedToArray(_useState3, 2);

    var errors = _useState32[0];
    var setErrors = _useState32[1];

    /**
     * isFormValid state controls whether the submit button should be enabled or disabled.
     * @type {boolean}
     */

    var _useState4 = (0, _react.useState)(false);

    var _useState42 = _slicedToArray(_useState4, 2);

    var isFormValid = _useState42[0];
    var setIsFormValid = _useState42[1];

    /**
     * Handle form field changes and update the formData state.
     * It also performs field-level validation for each field.
     * 
     * @param {Event} e - The change event triggered by the input fields.
     */
    var handleChange = function handleChange(e) {
        var _e$target = e.target;
        var name = _e$target.name;
        var value = _e$target.value;

        // Met à jour le champ modifié dans formData
        var newFormData = _extends({}, formData, _defineProperty({}, name, value));
        setFormData(newFormData);

        // Met à jour les erreurs de validation pour le champ modifié
        var newErrors = _extends({}, errors);
        if (name === 'firstName' || name === 'lastName' || name === 'city') {
            newErrors[name] = (0, _validatorsValidators.validateName)(value) ? '' : 'Invalid Name';
        } else if (name === 'email') {
            newErrors[name] = (0, _validatorsValidators.validateEmail)(value) ? '' : 'Invalid Email';
        } else if (name === 'postalCode') {
            newErrors[name] = (0, _validatorsValidators.validatePostalCode)(value) ? '' : 'Invalid postal code';
        } else if (name === 'dob') {
            newErrors[name] = (0, _validatorsValidators.validateDOB)(value) ? '' : 'age < 18';
        }
        setErrors(newErrors);

        // Vérifie si tout le formulaire est valide (y compris le champ en cours)
        var isFormCurrentlyValid = (0, _validatorsValidators.validateName)(newFormData.firstName) && (0, _validatorsValidators.validateName)(newFormData.lastName) && (0, _validatorsValidators.validateEmail)(newFormData.email) && (0, _validatorsValidators.validatePostalCode)(newFormData.postalCode) && (0, _validatorsValidators.validateDOB)(newFormData.dob);

        // Met à jour l'état isFormValid avec la nouvelle validation
        setIsFormValid(isFormCurrentlyValid);
    };

    /**
     * Handle form submission, and if the form is valid, pass the form data
     * to the onRegister callback and reset the form.
     * 
     * @param {Event} e - The submit event.
     */
    var handleSubmit = function handleSubmit(e) {
        e.preventDefault();
        if (isFormValid) {
            onRegister(formData);
            _reactToastify.toast.success('Inscription réussie');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                dob: '',
                city: '',
                postalCode: ''
            });
        } else {
            return false;
        }
    };

    return _react2['default'].createElement(
        _muiMaterial.Container,
        { maxWidth: 'sm' },
        _react2['default'].createElement(
            _muiMaterial.Typography,
            { variant: 'h4', gutterBottom: true, align: 'center' },
            'Inscription'
        ),
        _react2['default'].createElement(
            'form',
            { onSubmit: handleSubmit },
            _react2['default'].createElement(
                _muiMaterial.Grid,
                { container: true, spacing: 2 },
                _react2['default'].createElement(
                    _muiMaterial.Grid,
                    { item: true, xs: 12, sm: 6 },
                    _react2['default'].createElement(_muiMaterial.TextField, {
                        fullWidth: true,
                        label: 'Prénom',
                        name: 'firstName',
                        placeholder: 'First name',
                        value: formData.firstName,
                        onChange: handleChange,
                        error: !!errors.firstName,
                        helperText: errors.firstName
                    })
                ),
                _react2['default'].createElement(
                    _muiMaterial.Grid,
                    { item: true, xs: 12, sm: 6 },
                    _react2['default'].createElement(_muiMaterial.TextField, {
                        fullWidth: true,
                        label: 'Nom',
                        name: 'lastName',
                        placeholder: 'Last name',
                        value: formData.lastName,
                        onChange: handleChange,
                        error: !!errors.lastName,
                        helperText: errors.lastName
                    })
                ),
                _react2['default'].createElement(
                    _muiMaterial.Grid,
                    { item: true, xs: 12 },
                    _react2['default'].createElement(_muiMaterial.TextField, {
                        fullWidth: true,
                        label: 'Email',
                        type: 'email',
                        name: 'email',
                        placeholder: 'Email',
                        value: formData.email,
                        onChange: handleChange,
                        error: !!errors.email,
                        helperText: errors.email
                    })
                ),
                _react2['default'].createElement(
                    _muiMaterial.Grid,
                    { item: true, xs: 12 },
                    _react2['default'].createElement(_muiMaterial.TextField, {
                        fullWidth: true,
                        label: 'Date de naissance',
                        type: 'date',
                        name: 'dob',
                        placeholder: 'Date of birth',
                        value: formData.dob,
                        onChange: handleChange,
                        error: !!errors.dob,
                        helperText: errors.dob,
                        InputLabelProps: {
                            shrink: true
                        }
                    })
                ),
                _react2['default'].createElement(
                    _muiMaterial.Grid,
                    { item: true, xs: 12 },
                    _react2['default'].createElement(_muiMaterial.TextField, {
                        fullWidth: true,
                        label: 'Ville',
                        name: 'city',
                        placeholder: 'City',
                        value: formData.city,
                        onChange: handleChange,
                        error: !!errors.city,
                        helperText: errors.city
                    })
                ),
                _react2['default'].createElement(
                    _muiMaterial.Grid,
                    { item: true, xs: 12 },
                    _react2['default'].createElement(_muiMaterial.TextField, {
                        fullWidth: true,
                        label: 'Code postal',
                        name: 'postalCode',
                        placeholder: 'Postal Code',
                        value: formData.postalCode,
                        onChange: handleChange,
                        error: !!errors.postalCode,
                        helperText: errors.postalCode
                    })
                ),
                _react2['default'].createElement(
                    _muiMaterial.Grid,
                    { item: true, xs: 12 },
                    _react2['default'].createElement(
                        _muiMaterial.Button,
                        {
                            fullWidth: true,
                            variant: 'contained',
                            color: 'primary',
                            type: 'submit',
                            disabled: !isFormValid
                        },
                        'Enregistrer'
                    )
                )
            )
        )
    );
};

exports['default'] = RegisterForm;
module.exports = exports['default'];