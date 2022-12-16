const createPrototypeLessObj = () => {
  return Object.create(null);
};

const obj = createPrototypeLessObj();

console.log(obj);
