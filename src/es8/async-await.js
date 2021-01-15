//  TODO: Async - Await

// Antes
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    const resultado = {
      nombre: "Carlos",
      edad: 29,
    };
    true ? setTimeout(() => resolve(resultado), 2000) : reject("bye world");
  });
};

// helloWorld()
//   .then((res) => console.log(res))
//   .then(() => console.log("Promesa resuelta"))
//   .catch((error) => console.log(error));

// Ahora

const helloAsync = async () => {
  try {
    const respuesta = await helloWorld();
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log("Error", error);
  }
};

helloAsync();

