/* TODO: Multiline : "Multilinea statement" */

// Antes
let multilineStatement =
  "Lorem Ipsum is simply dummy text \n" +
  "of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy tex\n";

// Ahora
let multilineStatementES6 = `Lorem Ipsum is simply dummy text
of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy tex
`;

console.log(multilineStatement);
console.log(multilineStatementES6);
