const optionalCatch = async () => {
  try {
    new Error("Test Error");
  } catch (err) {
    err;
  }
};

optionalCatch()
  .then((resp) => console.log(resp))
  .catch((error) => console.log(error));
