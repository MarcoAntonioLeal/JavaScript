const usuarios = new Map();

usuarios.set("marco@email.com", { nome: "Marco", idade: 25 });
usuarios.set("ana@email.com", { nome: "Ana", idade: 30 });

console.log(usuarios.get("ana@email.com")); // { nome: "Ana", idade: 30 }
console.log(usuarios.has("marco@email.com")); // true

usuarios.delete("ana@email.com");

//Tem .set(), .get(), .has(), .delete(), .size, etc.