export default function isValidPhoneNumber(value) {
  /**
   * Taken from here
   * https://stackoverflow.com/a/4147641
   */
  return /^\d{7,}$/.test(value.replace(/[\s()+\-\.]|ext/gi, ''));
}
