
/* TODO: Promise : Promesas*/
// Manejar asincronismo

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    const number = Math.random() * 10;

    if (number > 5) {
      resolve("Hi!");
    } else {
      reject("Hmmmmm!");
    }
  });
};

helloPromise()
  .then((resp) => console.log(resp))
  .then(() => console.log("Otra acción que deseo realizar"))
  .then(() => console.log("Y otra más"))
  .catch((err) => console.log(err));

for (let index = 0; index < 10; index++) {
  console.log("Ejecutando de forma random la promesa x 10");
  helloPromise()
    .then((resp) => console.log(resp))
    .catch((err) => console.log(err));
}

const truePromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Siempre True!");
    } else {
      reject("Hmmmmm!");
    }
  });
};

truePromise()
  .then((resp) => console.log(resp))
  .then(() => console.log("Otra acción que deseo realizar"))
  .then(() => console.log("Y otra más"))
  .then(() =>
    console.log('Tantos "Thens" como quiera porque la promesa se resuelve')
  )
  .catch((err) => console.log(err));

const falsePromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve("Siempre True!");
    } else {
      reject("Hmmmmm!");
    }
  });
};

// Solo permite un catch
falsePromise()
  .then((resp) => console.log(resp))
  .catch((err) => console.log(err))
  .catch(() => console.log("Otra acción que deseo realizar"))
  .catch(() => console.log("Y otra más"))
  .catch(() =>
    console.log('Tantos "Thens" como quiera porque la promesa se resuelve')
  );
