import { validateName, validateEmail, validatePostalCode, validateDOB } from "./validators";

test('valide un nom corect', () => {
    expect(validateName('Jean-Michel')).toBe(true);
    expect(validateName('Luc')).toBe(true);
});

test('Invalide un nom incorrect', () => {
    expect(validateName('DarkKevinDu69')).toBe(false);
    expect(validateName('')).toBe(false);
});

test('valide un email correct', () => {
    expect(validateEmail('test@email.com')).toBe(true);
});

test('Invalide un email incorrect', () => {
    expect(validateEmail('test@.com')).toBe(false);
});

test('valide un code postal francais', () => {
    expect(validatePostalCode('34170')).toBe(true);
});

test('Invalide un code postal incorrect', () => {
    expect(validatePostalCode('1234')).toBe(false);
});

test('valide une date de naissance supérieure à 18 ans', () => {
    const validDOB = '2000-01-01';
    expect(validateDOB(validDOB)).toBe(true);
});
  
  test('invalide une date de naissance inférieure à 18 ans', () => {
    const invalidDOB = '2010-01-01';
    expect(validateDOB(invalidDOB)).toBe(false);
});