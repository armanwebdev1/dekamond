/**
 * Validates Iranian mobile phone numbers.
 * Accepted formats:
 *  - 09xxxxxxxxx
 *  - +989xxxxxxxxx
 *  - 00989xxxxxxxxx
 */
export const iranPhoneRegex = /^(?:\+98|0098|0)?9\d{9}$/;

/**
 * Checks if a given string is a valid Iranian mobile number.
 * @param phone - The phone number string to validate
 * @returns true if valid, false otherwise
 */
export function validatePhone(phone: string): boolean {
  return iranPhoneRegex.test(phone.trim());
}
