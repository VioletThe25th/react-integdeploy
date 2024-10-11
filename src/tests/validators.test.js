import { validateName, validateEmail, validatePostalCode, validateDOB } from "../validators/validators";

/**
 * Test suite for validation functions.
 */

 /**
  * Test that validates correct names.
  * 
  * This test ensures that the `validateName` function returns true for valid names,
  * including names with hyphens or special characters commonly found in names.
  */
test('valide un nom correct', () => {
    expect(validateName('Jean-Michel')).toBe(true);
    expect(validateName('Zack')).toBe(true);
});

/**
 * Test that invalidates incorrect names.
  * 
  * This test ensures that the `validateName` function returns false for invalid names,
  * such as those with numbers or invalid characters.
  */
test('Invalide un nom incorrect', () => {
    expect(validateName('DarkKevinDu69')).toBe(false);
    expect(validateName('')).toBe(false);
});

/**
 * Test that validates a correct email.
 * 
 * This test checks that the `validateEmail` function returns true for a properly formatted email.
 */
test('valide un email correct', () => {
    expect(validateEmail('zackfair@gmail.com')).toBe(true);
});

/**
 * Test that invalidates incorrect emails.
 * 
 * This test ensures that the `validateEmail` function returns false for invalid email formats,
 * such as incomplete domain names or missing elements.
 */
test('Invalide un email incorrect', () => {
    expect(validateEmail('test@.com')).toBe(false);
});

/**
 * Test that validates a correct French postal code.
 * 
 * This test checks that the `validatePostalCode` function returns true for a valid French postal code.
 */
test('valide un code postal français', () => {
    expect(validatePostalCode('34170')).toBe(true);
});

/**
 * Test that invalidates incorrect postal codes.
 * 
 * This test ensures that the `validatePostalCode` function returns false for incorrectly formatted or too short postal codes.
 */
test('Invalide un code postal incorrect', () => {
    expect(validatePostalCode('750')).toBe(false);
});

/**
 * Test that validates a date of birth that is over 18 years old.
 * 
 * This test checks that the `validateDOB` function correctly returns true for dates of birth where the age is 18 or above.
 */
test('valide une date de naissance supérieure à 18 ans', () => {
    const validDOB = '2000-01-01';
    expect(validateDOB(validDOB)).toBe(true);
});
  
/**
 * Test that invalidates a date of birth that is under 18 years old.
 * 
 * This test checks that the `validateDOB` function correctly returns false for dates of birth where the age is under 18.
 */
test('invalide une date de naissance inférieure à 18 ans', () => {
    const invalidDOB = '2010-01-01';
    expect(validateDOB(invalidDOB)).toBe(false);
});
