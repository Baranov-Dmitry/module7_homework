const getKeysFromObj = (obj) => {
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`Ключ - ${key} значение - ` + obj[key]);
    }
  }
};

getKeysFromObj({
  a: 10,
  b: "srfsg",
  k: null,
  some: {
    f: 10,
    y: "utyng",
  },
});
