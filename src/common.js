const getRandomInt = (min = 0, max = 1000) => {
  const random = Math.ceil(Math.random() * max + min);

  return random;
};

export default getRandomInt;
