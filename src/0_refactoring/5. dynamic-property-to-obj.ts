export const dynamicPropToObj = () => {
  const obj = {};

  if (true) {
    obj.a = 1;
  }
  console.log(obj);

  // ---VS---

  const b = {
    ...(true && { a: 1 }),
  };
  console.log(b);
};
