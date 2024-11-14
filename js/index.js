let estudiantes = [
    {nombre: 'Luis', semestre: 5, nota: 14},
    {nombre: 'Maria', semestre: 6, nota: 5},
    {nombre: 'Pedro', semestre: 5, nota: 9},
    {nombre: 'Jose', semestre: 8, nota: 8},
    {nombre: 'David', semestre: 5, nota: 18},
    {nombre: 'Fernanda', semestre: 10, nota: 17},
]

let estudiantesaprobados = (estudiantes, nota) => {
    let estudiantesfiltrados = [];
    estudiantes.forEach(estudiantes => {
        if(estudiantes.nota >= nota){
            estudiantesfiltrados.push(estudiantes);
        }
    });
    return estudiantesfiltrados;
}

let salida = document.getElementById('salida');
let estudiantes10 = estudiantesaprobados(estudiantes, 10);
salida.innerHTML += '<h2>Personas aprobadas: <br></h2>'
estudiantes10.forEach(estudiante => {
    salida.innerHTML += `Nombre: ${estudiante.nombre} <br> Semestre: ${estudiante.semestre} <br> Nota: ${estudiante.nota} <br> <br>`
})