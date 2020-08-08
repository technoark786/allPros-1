export function getLocalDateString(date) {
  return new Date(date).toString().substring(0, 24);
}
export function getDateString(date) {
  return new Date(date).toString().substring(4, 15);
}
export function toTitleString(str) {
  var result = str.charAt(0).toUpperCase();
  for (var i = 1; i < str.length; i++) {
    if (str.charAt(i) === str.charAt(i).toUpperCase()) {
      result += ' ' + str.charAt(i);
    } else {
      result += str.charAt(i);
    }
  }
  return result;
}
