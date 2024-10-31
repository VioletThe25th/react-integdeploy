/**
 * Validate the name field
 * @param {*} name 
 * @returns a boolean depending on the regex
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var validateName = function validateName(name) {
  var regex = /^[a-zA-Zà-ÿÀ-ÿ\- ]+$/;
  return regex.test(name);
};

exports.validateName = validateName;
/**
 * validate the email field
 * @param {*} email 
 * @returns a boolean depending on the regex
 */
var validateEmail = function validateEmail(email) {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

exports.validateEmail = validateEmail;
/**
 * Validate the postal code
 * @param {*} postalCode 
 * @returns a boolean depending on the regex
 */
var validatePostalCode = function validatePostalCode(postalCode) {
  var regex = /^[0-9]{5}$/;
  return regex.test(postalCode);
};

exports.validatePostalCode = validatePostalCode;
/**
 * Validate the date of birth
 * @param {*} dob 
 * @returns a boolean depending on the regex
 */
var validateDOB = function validateDOB(dob) {
  var birthDate = new Date(dob);
  var today = new Date();
  var age = today.getFullYear() - birthDate.getFullYear();
  return age > 18;
};
exports.validateDOB = validateDOB;