const materias = [
  // ---- Periodo 1 ----
  { nombre: "Bioquímica Básica", semestre: 1, area: "basica", creditos: 10, teoria: 4, practica: 2, otros: 0, prerequisitos: [] },
  { nombre: "Biología Molecular y Celular", semestre: 1, area: "basica", creditos: 5, teoria: 2, practica: 1, otros: 0, prerequisitos: [] },
  { nombre: "Anatomía Humana I", semestre: 1, area: "basica", creditos: 15, teoria: 6, practica: 3, otros: 0, prerequisitos: [] },
  { nombre: "Sociodemografía", semestre: 1, area: "basica", creditos: 6, teoria: 2, practica: 2, otros: 0, prerequisitos: [] },
  { nombre: "Pensamiento Crítico", semestre: 1, area: "basica", creditos: 4, teoria: 0, practica: 0, otros: 4, prerequisitos: [] },
  { nombre: "Lengua I", semestre: 1, area: "basica", creditos: 4, teoria: 0, practica: 0, otros: 6, prerequisitos: [] },

  // ---- Periodo 2 ----
  { nombre: "Bioquímica Clínica", semestre: 2, area: "basica", creditos: 10, teoria: 4, practica: 2, otros: 0, prerequisitos: ["Bioquímica Básica"] },
  { nombre: "Anatomía Humana II", semestre: 2, area: "basica", creditos: 15, teoria: 6, practica: 3, otros: 0, prerequisitos: ["Anatomía Humana I"] },
  { nombre: "Embriología", semestre: 2, area: "basica", creditos: 10, teoria: 4, practica: 2, otros: 0, prerequisitos: [] },
  { nombre: "Bioética", semestre: 2, area: "basica", creditos: 2, teoria: 0, practica: 2, otros: 0, prerequisitos: [] },
  { nombre: "Educación para la Salud", semestre: 2, area: "basica", creditos: 3, teoria: 0, practica: 3, otros: 0, prerequisitos: [] },
  { nombre: "Lengua II", semestre: 2, area: "basica", creditos: 4, teoria: 0, practica: 0, otros: 6, prerequisitos: ["Lengua I"] },

  // ---- Periodo 3 ----
  { nombre: "Histología", semestre: 3, area: "basica", creditos: 11, teoria: 4, practica: 3, otros: 0, prerequisitos: [] },
  { nombre: "Microbiología", semestre: 3, area: "basica", creditos: 12, teoria: 5, practica: 2, otros: 0, prerequisitos: [] },
  { nombre: "Genética", semestre: 3, area: "disciplinaria", creditos: 5, teoria: 2, practica: 1, otros: 0, prerequisitos: [] },
  { nombre: "Epidemiología y Ecología", semestre: 3, area: "basica", creditos: 6, teoria: 2, practica: 2, otros: 0, prerequisitos: [] },
  { nombre: "Lectura y Escritura", semestre: 3, area: "basica", creditos: 4, teoria: 0, practica: 0, otros: 4, prerequisitos: [] },
  { nombre: "Literacidad Digital", semestre: 3, area: "basica", creditos: 4, teoria: 0, practica: 0, otros: 6, prerequisitos: [] },

  // ---- Periodo 4 ----
  { nombre: "Fisiología General", semestre: 4, area: "basica", creditos: 10, teoria: 4, practica: 2, otros: 0, prerequisitos: [] },
  { nombre: "Parasitología", semestre: 4, area: "basica", creditos: 12, teoria: 5, practica: 2, otros: 0, prerequisitos: [] },
  { nombre: "Propedéutica Clínica", semestre: 4, area: "disciplinaria", creditos: 8, teoria: 4, practica: 0, otros: 0, prerequisitos: [] },
  { nombre: "Ciclo Clínico Actividades Comunitarias", semestre: 4, area: "disciplinaria", creditos: 1, teoria: 0, practica: 0, otros: 4, prerequisitos: [] },

  // ---- Periodo 5 ----
  { nombre: "Fisiología Sistémica", semestre: 5, area: "basica", creditos: 10, teoria: 4, practica: 2, otros: 0, prerequisitos: ["Fisiología General", "Anatomía Humana II"] },
  { nombre: "Farmacología", semestre: 5, area: "disciplinaria", creditos: 10, teoria: 4, practica: 2, otros: 0, prerequisitos: [] },
  { nombre: "Fisiopatología", semestre: 5, area: "disciplinaria", creditos: 10, teoria: 5, practica: 0, otros: 0, prerequisitos: ["Fisiología Sistémica"] },
  { nombre: "Ciclo Clínico Primer Nivel", semestre: 5, area: "disciplinaria", creditos: 2, teoria: 0, practica: 0, otros: 6, prerequisitos: [] },

  // ---- Periodo 6 ----
  { nombre: "Patología General", semestre: 6, area: "disciplinaria", creditos: 8, teoria: 3, practica: 2, otros: 0, prerequisitos: [] },
  { nombre: "Metodología de la Investigación", semestre: 6, area: "disciplinaria", creditos: 4, teoria: 0, practica: 4, otros: 0, prerequisitos: [] },
  { nombre: "Inmunología Clínica", semestre: 6, area: "disciplinaria", creditos: 6, teoria: 3, practica: 0, otros: 0, prerequisitos: [] },
  { nombre: "Patología Especial", semestre: 6, area: "disciplinaria", creditos: 8, teoria: 3, practica: 2, otros: 0, prerequisitos: ["Patología General"] },

  // ---- Periodo 7 ----
  { nombre: "Imagenología", semestre: 7, area: "disciplinaria", creditos: 3, teoria: 0, practica: 3, otros: 0, prerequisitos: [] },
  { nombre: "Psquiatría", semestre: 7, area: "disciplinaria", creditos: 4, teoria: 2, practica: 0, otros: 0, prerequisitos: [] },
  { nombre: "Pediatría", semestre: 7, area: "disciplinaria", creditos: 10, teoria: 5, practica: 0, otros: 0, prerequisitos: ["Propedéutica Clínica"] },
  { nombre: "Educación Quirúrgica", semestre: 7, area: "disciplinaria", creditos: 4, teoria: 1, practica: 2, otros: 0, prerequisitos: [] },

  // ---- Periodo 8 ----
  { nombre: "Ciclo Clínico Medicina Interna I", semestre: 8, area: "disciplinaria", creditos: 2, teoria: 0, practica: 0, otros: 6, prerequisitos: ["Propedéutica Clínica"] },
  { nombre: "Neumología", semestre: 8, area: "disciplinaria", creditos: 6, teoria: 3, practica: 0, otros: 0, prerequisitos: [] },
  { nombre: "Dermatología", semestre: 8, area: "disciplinaria", creditos: 5, teoria: 2, practica: 1, otros: 0, prerequisitos: [] },

  // ---- Periodo 9 ----
  { nombre: "Ciclo Clínico Medicina Interna II", semestre: 9, area: "disciplinaria", creditos: 2, teoria: 0, practica: 0, otros: 6, prerequisitos: ["Ciclo Clínico Medicina Interna I"] },
  { nombre: "Ciclo Clínico Pediatría", semestre: 9, area: "disciplinaria", creditos: 2, teoria: 0, practica: 0, otros: 6, prerequisitos: ["Pediatría"] },
  { nombre: "Ciclo Clínico Cirugía", semestre: 9, area: "disciplinaria", creditos: 2, teoria: 0, practica: 0, otros: 6, prerequisitos: ["Educación Quirúrgica"] },
  { nombre: "Ciclo Clínico Gineco-Obste", semestre: 9, area: "disciplinaria", creditos: 2, teoria: 0, practica: 0, otros: 6, prerequisitos: [] },

  // ---- Periodo 10 ----
  { nombre: "Internado de Pregrado", semestre: 10, area: "terminal", creditos: 6, teoria: 0, practica: 4, otros: 0, prerequisitos: ["Ciclo Clínico Medicina Interna II"] },

  // ---- Periodo 11 ----
  { nombre: "Servicio Social", semestre: 11, area: "terminal", creditos: 6, teoria: 0, practica: 2, otros: 0, prerequisitos: ["Internado de Pregrado"] },
  { nombre: "Experiencia Recepcional", semestre: 11, area: "terminal", creditos: 12, teoria: 4, practica: 0, otros: 0, prerequisitos: ["Internado de Pregrado"] },

  // ---- Optativas ----
  { nombre: "Optativa I", semestre: 4, area: "optativa", creditos: 3, teoria: 0, practica: 0, otros: 0, prerequisitos: [] },
  { nombre: "Optativa II", semestre: 6, area: "optativa", creditos: 3, teoria: 0, practica: 0, otros: 0, prerequisitos: [] },
  { nombre: "Electiva I", semestre: 7, area: "optativa", creditos: 3, teoria: 0, practica: 0, otros: 0, prerequisitos: [] },
  { nombre: "Electiva II", semestre: 8, area: "optativa", creditos: 3, teoria: 0, practica: 0, otros: 0, prerequisitos: [] }
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

  for (let s = 1; s <= 12; s++) {
    const col = document.createElement('div');
    col.className = "columna";

    const titulo = document.createElement('h3');
    titulo.textContent = `${s}° Periodo`;
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
