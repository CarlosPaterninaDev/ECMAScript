const promesa = () => {
  return new Promise((resolve, reject) => {
    true ? setTimeout(() => {
      resolve("¨Promesa resuelta") 
    }, 3000) : reject(new Error("Test Error"));
  });
};

promesa()
  .then((resp) => console.log(resp))
  .catch((err) => console.log(err))
  .finally(() => console.log("Finalizo Promesa"));
