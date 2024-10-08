/**
 * Validate the name field
 * @param {*} name 
 * @returns 
 */
export const validateName = (name) => {
    const regex = /^[a-zA-Zà-ÿÀ-ÿ\- ]+$/;
    return regex.test(name);
};

/**
 * validate the email field
 * @param {*} email 
 * @returns 
 */
export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

/**
 * Validate the postal code
 * @param {*} postalCode 
 * @returns 
 */
export const validatePostalCode = (postalCode) => {
    const regex = /^[0-9]{5}$/;
    return regex.test(postalCode);
};

/**
 * Validate the date of birth
 * @param {*} dob 
 * @returns 
 */
export const validateDOB = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    return age > 18 || (age === 18 && month >= 0);
};