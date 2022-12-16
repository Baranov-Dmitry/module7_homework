const findKeyInObj = (key, object) => {
  if (object.hasOwnProperty(key)) {
    return true;
  } else {
    return false;
  }
};
