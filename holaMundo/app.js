const {otroMensaje} = require("./hola")

console.log("Este es el punto de entrada")
console.log(otroMensaje)

const tareas = [
  {
    nombre: "Estudiar para el examen de Backend",
    fecha: "2024-09-23",
    hecho: false
  },
  {
    nombre: "Ir de compras",
    fecha: "2024-09-24",
    hecho: false
  },
  {
    nombre: "Hacer tarea",
    fecha: "2024-09-22",
    hecho: true
  },
];

const tareasPorRealizar = tareas.filter(tarea => !tarea.hecho);
console.log(tareasPorRealizar);