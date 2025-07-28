const materias = [
  { nombre: "Literacidad Digital", semestre: 1, prerequisitos: [] },
  { nombre: "Lengua I", semestre: 1, prerequisitos: [] },
  { nombre: "Lengua II", semestre: 2, prerequisitos: ["Lengua I"] },
  { nombre: "Bioquímica Básica", semestre: 2, prerequisitos: [] },
  { nombre: "Bioquímica Clínica", semestre: 4, prerequisitos: ["Bioquímica Básica"] },
  { nombre: "Anatomía Humana I", semestre: 1, prerequisitos: [] },
  { nombre: "Anatomía Humana II", semestre: 3, prerequisitos: ["Anatomía Humana I"] },
  { nombre: "Fisiología General", semestre: 3, prerequisitos: [] },
  { nombre: "Fisiología Sistémica", semestre: 4, prerequisitos: ["Fisiología General", "Anatomía Humana II"] },
  { nombre: "Propedéutica Clínica", semestre: 4, prerequisitos: [] },
  { nombre: "Ciclo Clínico Medicina Interna I", semestre: 7, prerequisitos: ["Propedéutica Clínica"] },
  { nombre: "Ciclo Clínico Medicina Interna II", semestre: 8, prerequisitos: ["Ciclo Clínico Medicina Interna I"] }
];

let completadas = [];

function crearTabla() {
  const contenedor = document.getElementById('tabla-malla');
  contenedor.innerHTML = "";

  for (let s = 1; s <= 12; s++) {
    const col = document.createElement('div');
    col.className = "columna";

    const titulo = document.createElement('h3');
    titulo.textContent = `${s}° Semestre`;
    col.appendChild(titulo);

    materias.filter(m => m.semestre === s).forEach(m => {
      const div = document.createElement('div');
      div.className = "materia";
      div.textContent = m.nombre;

      // Bloquear si tiene prerequisitos no completados
      const bloqueada = m.prerequisitos.some(pr => !completadas.includes(pr));
      if (bloqueada) div.classList.add('bloqueada');

      div.addEventListener('click', () => {
        if (!div.classList.contains('bloqueada')) {
          if (div.classList.contains('completada')) {
            completadas = completadas.filter(c => c !== m.nombre);
            div.classList.remove('completada');
          } else {
            completadas.push(m.nombre);
            div.classList.add('completada');
          }
          crearTabla();
        }
      });

      col.appendChild(div);
    });

    contenedor.appendChild(col);
  }
}

crearTabla();
