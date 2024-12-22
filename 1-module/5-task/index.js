function truncate(str, maxlength) {
  let result = str;
  if (String(str).length > maxlength) {
    result = str.substr(0, maxlength - 1)+'…';
  }
  return result;
}
