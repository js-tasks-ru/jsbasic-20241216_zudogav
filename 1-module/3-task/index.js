function ucFirst(str) {
  let result;
  if (str.length > 0) {
    if (str.length === 1) {
      result = String(str)[0].toUpperCase();
    } else {
      result = String(str)[0].toUpperCase() + String(str).slice(1); 
    }
  } else {
    result = '';
  }
  return result;
}
