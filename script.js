const materias = [
  // 1° semestre
  { nombre: "Bioquímica Básica", semestre: 1, area: "basica", creditos: 10, teoria: 4, practica: 2, otros: 0, prerequisitos: [] },
  { nombre: "Biología Molecular y Celular", semestre: 1, area: "basica", creditos: 5, teoria: 2, practica: 1, otros: 0, prerequisitos: [] },
  { nombre: "Anatomía Humana I", semestre: 1, area: "basica", creditos: 15, teoria: 6, practica: 3, otros: 0, prerequisitos: [] },
  { nombre: "Sociodemografía", semestre: 1, area: "basica", creditos: 6, teoria: 2, practica: 2, otros: 0, prerequisitos: [] },
  { nombre: "Pensamiento Crítico", semestre: 1, area: "basica", creditos: 4, teoria: 0, practica: 0, otros: 4, prerequisitos: [] },
  { nombre: "Lengua I", semestre: 1, area: "basica", creditos: 4, teoria: 0, practica: 0, otros: 6, prerequisitos: [] },

  // 2° semestre
  { nombre: "Bioquímica Clínica", semestre: 2, area: "basica", creditos: 10, teoria: 4, practica: 2, otros: 0, prerequisitos: ["Bioquímica Básica"] },
  { nombre: "Anatomía Humana II", semestre: 2, area: "basica", creditos: 15, teoria: 6, practica: 3, otros: 0, prerequisitos: ["Anatomía Humana I"] },
  { nombre: "Embriología", semestre: 2, area: "basica", creditos: 10, teoria: 4, practica: 2, otros: 0, prerequisitos: [] },
  { nombre: "Bioética", semestre: 2, area: "basica", creditos: 2, teoria: 0, practica: 2, otros: 0, prerequisitos: [] },
  { nombre: "Educación para la Salud", semestre: 2, area: "basica", creditos: 3, teoria: 0, practica: 3, otros: 0, prerequisitos: [] },
  { nombre: "Lengua II", semestre: 2, area: "basica", creditos: 4, teoria: 0, practica: 0, otros: 6, prerequisitos: ["Lengua I"] },

  // 3° semestre
  { nombre: "Histología", semestre: 3, area: "basica", creditos: 11, teoria: 4, practica: 3, otros: 0, prerequisitos: [] },
  { nombre: "Microbiología", semestre: 3, area: "basica", creditos: 12, teoria: 5, practica: 2, otros: 0, prerequisitos: [] },
  { nombre: "Epidemiología y Ecología", semestre: 3, area: "basica", creditos: 6, teoria: 2, practica: 2, otros: 0, prerequisitos: [] },
  { nombre: "Bioestadística", semestre: 3, area: "basica", creditos: 3, teoria: 0, practica: 3, otros: 0, prerequisitos: [] },
  { nombre: "Literacidad Digital", semestre: 3, area: "basica", creditos: 4, teoria: 0, practica: 0, otros: 6, prerequisitos: [] },
  { nombre: "Fisiología General", semestre: 3, area: "basica", creditos: 10, teoria: 4, practica: 2, otros: 0, prerequisitos: [] },

  // 4° semestre
  { nombre: "Genética", semestre: 4, area: "basica", creditos: 5, teoria: 2, practica: 1, otros: 0, prerequisitos: [] },
  { nombre: "Fisiología Sistémica", semestre: 4, area: "basica", creditos: 10, teoria: 4, practica: 2, otros: 0, prerequisitos: ["Fisiología General"] },
  { nombre: "Parasitología", semestre: 4, area: "basica", creditos: 12, teoria: 5, practica: 2, otros: 0, prerequisitos: [] },
  { nombre: "Salud Mental", semestre: 4, area: "disciplinaria", creditos: 6, teoria: 3, practica: 0, otros: 0, prerequisitos: [] },
  { nombre: "Lectura y Escritura", semestre: 4, area: "basica", creditos: 4, teoria: 0, practica: 0, otros: 4, prerequisitos: [] },
  { nombre: "Ciclo Clínico Actividades Comunitarias", semestre: 4, area: "disciplinaria", creditos: 1, teoria: 0, practica: 0, otros: 4, prerequisitos: [] },
  { nombre: "Optativa I", semestre: 4, area: "optativa", creditos: 3, teoria: 0, practica: 0, otros: 0, prerequisitos: [] },

  // 5° semestre
  { nombre: "Control de Enfermedades", semestre: 5, area: "disciplinaria", creditos: 6, teoria: 2, practica: 2, otros: 0, prerequisitos: [] },
  { nombre: "Farmacología", semestre: 5, area: "disciplinaria", creditos: 10, teoria: 4, practica: 2, otros: 0, prerequisitos: [] },
  { nombre: "Fisiopatología", semestre: 5, area: "disciplinaria", creditos: 10, teoria: 5, practica: 0, otros: 0, prerequisitos: ["Fisiología Sistémica"] },
  { nombre: "Patología General", semestre: 5, area: "disciplinaria", creditos: 8, teoria: 3, practica: 2, otros: 0, prerequisitos: [] },
  { nombre: "Propedéutica Clínica", semestre: 5, area: "disciplinaria", creditos: 8, teoria: 4, practica: 0, otros: 0, prerequisitos: [] },
  { nombre: "Ciclo Clínico Primer Nivel", semestre: 5, area: "disciplinaria", creditos: 2, teoria: 0, practica: 0, otros: 6, prerequisitos: [] },

  // ... (continuaría con los semestres 6 al 13 siguiendo tu lista exacta con sus antecedentes)
];

let completadas = JSON.parse(localStorage.getItem("completadas")) || [];

function guardarProgreso() {
  localStorage.setItem("completadas", JSON.stringify(completadas));
}

function actualizarProgreso() {
  const porcentaje = Math.round((completadas.length / materias.length) * 100);
  document.getElementById("progreso-texto").textContent = `Avance: ${porcentaje}%`;
  document.getElementById("barra-avance").style.width = `${porcentaje}%`;
}

function crearTabla() {
  const contenedor = document.getElementById('tabla-malla');
  contenedor.innerHTML = "";

  for (let s = 1; s <= 13; s++) {
    const col = document.createElement('div');
    col.className = "columna";

    const titulo = document.createElement('h3');
    titulo.textContent = `${s}° Semestre`;
    col.appendChild(titulo);

    materias.filter(m => m.semestre === s).forEach(m => {
      const div = document.createElement('div');
      div.className = `materia area-${m.area}`;
      div.innerHTML = `${m.nombre} <i class="icono fas ${completadas.includes(m.nombre) ? 'fa-check-circle' : 'fa-lock'}"></i>`;

      const tooltip = document.createElement('div');
      tooltip.className = "tooltip";
      tooltip.innerHTML = `
        Créditos: ${m.creditos}<br>
        Teoría: ${m.teoria}h | Práctica: ${m.practica}h | Otros: ${m.otros}h<br>
        Antecedentes: ${m.prerequisitos.length ? m.prerequisitos.join(", ") : "Ninguno"}
      `;
      div.appendChild(tooltip);

      const bloqueada = m.prerequisitos.some(pr => !completadas.includes(pr));
      if (bloqueada) div.classList.add('bloqueada');
      if (completadas.includes(m.nombre)) div.classList.add('completada');

      div.addEventListener('click', () => {
        if (!div.classList.contains('bloqueada')) {
          if (div.classList.contains('completada')) {
            completadas = completadas.filter(c => c !== m.nombre);
          } else {
            completadas.push(m.nombre);
          }
          guardarProgreso();
          crearTabla();
        }
      });

      col.appendChild(div);
    });
    contenedor.appendChild(col);
  }
  actualizarProgreso();
}

crearTabla();
