const materias = [
    // ==== 1er Semestre ====
    { nombre: "Literacidad Digital", semestre: 1, area: "básica", teoria: 0, practica: 0, otros: 6, creditos: 4, antecedentes: "Ninguno" },
    { nombre: "Pensamiento Crítico para la Solución de Problemas", semestre: 1, area: "básica", teoria: 0, practica: 0, otros: 4, creditos: 4, antecedentes: "Ninguno" },
    { nombre: "Lengua I", semestre: 1, area: "básica", teoria: 0, practica: 0, otros: 6, creditos: 4, antecedentes: "Ninguno" },
    { nombre: "Lectura y Escritura de Textos Académicos", semestre: 1, area: "básica", teoria: 0, practica: 0, otros: 4, creditos: 4, antecedentes: "Ninguno" },
    { nombre: "Biología Molecular y Celular", semestre: 1, area: "básica", teoria: 2, practica: 1, otros: 0, creditos: 5, antecedentes: "Ninguno" },
    { nombre: "Anatomía Humana I", semestre: 1, area: "básica", teoria: 6, practica: 3, otros: 0, creditos: 15, antecedentes: "Ninguno" },

    // ==== 2do Semestre ====
    { nombre: "Lengua II", semestre: 2, area: "básica", teoria: 0, practica: 0, otros: 6, creditos: 4, antecedentes: "Lengua I" },
    { nombre: "Bioquímica Básica", semestre: 2, area: "básica", teoria: 4, practica: 2, otros: 0, creditos: 10, antecedentes: "Ninguno" },
    { nombre: "Embriología", semestre: 2, area: "básica", teoria: 4, practica: 2, otros: 0, creditos: 10, antecedentes: "Ninguno" },
    { nombre: "Histología", semestre: 2, area: "básica", teoria: 4, practica: 3, otros: 0, creditos: 11, antecedentes: "Ninguno" },
    { nombre: "Socio-Demografía", semestre: 2, area: "básica", teoria: 2, practica: 2, otros: 0, creditos: 6, antecedentes: "Ninguno" },

    // ==== 3er Semestre ====
    { nombre: "Anatomía Humana II", semestre: 3, area: "básica", teoria: 6, practica: 3, otros: 0, creditos: 15, antecedentes: "Anatomía Humana I" },
    { nombre: "Fisiología General", semestre: 3, area: "básica", teoria: 4, practica: 2, otros: 0, creditos: 10, antecedentes: "Ninguno" },
    { nombre: "Microbiología", semestre: 3, area: "básica", teoria: 5, practica: 2, otros: 0, creditos: 12, antecedentes: "Ninguno" },
    { nombre: "Parasitología", semestre: 3, area: "básica", teoria: 5, practica: 2, otros: 0, creditos: 12, antecedentes: "Ninguno" },

    // ==== 4to Semestre ====
    { nombre: "Fisiología Sistémica", semestre: 4, area: "básica", teoria: 4, practica: 2, otros: 0, creditos: 10, antecedentes: "Fisiología General, Anatomía Humana II" },
    { nombre: "Bioquímica Clínica", semestre: 4, area: "básica", teoria: 4, practica: 2, otros: 0, creditos: 10, antecedentes: "Bioquímica Básica" },
    { nombre: "Patología General", semestre: 4, area: "disciplinaria", teoria: 3, practica: 2, otros: 0, creditos: 8, antecedentes: "Ninguno" },
    { nombre: "Propedéutica Clínica", semestre: 4, area: "disciplinaria", teoria: 4, practica: 0, otros: 0, creditos: 8, antecedentes: "Ninguno" },

    // ==== 5to Semestre ====
    { nombre: "Fisiopatología", semestre: 5, area: "disciplinaria", teoria: 5, practica: 0, otros: 0, creditos: 10, antecedentes: "Fisiología Sistémica" },
    { nombre: "Farmacología", semestre: 5, area: "disciplinaria", teoria: 4, practica: 2, otros: 0, creditos: 10, antecedentes: "Ninguno" },
    { nombre: "Patología Especial", semestre: 5, area: "disciplinaria", teoria: 3, practica: 2, otros: 0, creditos: 8, antecedentes: "Patología General" },

    // ==== 6to Semestre ====
    { nombre: "Terapéutica", semestre: 6, area: "disciplinaria", teoria: 3, practica: 3, otros: 0, creditos: 9, antecedentes: "Farmacología" },
    { nombre: "Genética", semestre: 6, area: "disciplinaria", teoria: 2, practica: 1, otros: 0, creditos: 5, antecedentes: "Ninguno" },
    { nombre: "Imagenología", semestre: 6, area: "disciplinaria", teoria: 0, practica: 3, otros: 0, creditos: 3, antecedentes: "Ninguno" },

    // ==== 7° al 12° Semestres (área clínica y final) ====
    { nombre: "Ciclo Clínico Medicina Interna I", semestre: 7, area: "disciplinaria", teoria: 0, practica: 0, otros: 6, creditos: 2, antecedentes: "Propedéutica Clínica" },
    { nombre: "Ciclo Clínico Medicina Interna II", semestre: 8, area: "disciplinaria", teoria: 0, practica: 0, otros: 6, creditos: 2, antecedentes: "Medicina Interna I" },
    { nombre: "Ciclo Clínico Pediatría", semestre: 8, area: "disciplinaria", teoria: 0, practica: 0, otros: 6, creditos: 2, antecedentes: "Pediatría" },
    { nombre: "Ciclo Clínico Cirugía", semestre: 9, area: "disciplinaria", teoria: 0, practica: 0, otros: 6, creditos: 2, antecedentes: "Educación Quirúrgica" },
    { nombre: "Ciclo Clínico Ginecología y Obstetricia", semestre: 9, area: "disciplinaria", teoria: 0, practica: 0, otros: 6, creditos: 2, antecedentes: "Ginecología, Obstetricia" },
    { nombre: "Internado de Pregrado", semestre: 11, area: "terminal", teoria: 0, practica: 4, otros: 0, creditos: 6, antecedentes: "Ciclos Clínicos" },
    { nombre: "Servicio Social", semestre: 12, area: "terminal", teoria: 0, practica: 2, otros: 0, creditos: 6, antecedentes: "Internado" },
    { nombre: "Experiencia Recepcional", semestre: 12, area: "terminal", teoria: 4, practica: 0, otros: 0, creditos: 12, antecedentes: "Internado" },
    { nombre: "Optativas", semestre: 12, area: "terminal", teoria: 0, practica: 0, otros: 0, creditos: 15, antecedentes: "Ninguno" },
    { nombre: "Elección Libre", semestre: 12, area: "libre", teoria: 0, practica: 0, otros: 0, creditos: 8, antecedentes: "Ninguno" },
];

function mostrarMaterias(semestre, filtro = "") {
    const contenedor = document.getElementById('malla');
    contenedor.innerHTML = "";

    let filtradas = semestre === "todos" ? materias : materias.filter(m => m.semestre == semestre);

    if (filtro !== "") {
        filtradas = filtradas.filter(m => m.nombre.toLowerCase().includes(filtro.toLowerCase()));
    }

    filtradas.forEach(m => {
        const div = document.createElement('div');
        div.className = `materia sem-${m.semestre}`;
        div.innerHTML = `
            <h3>${m.nombre}</h3>
            <p><b>Semestre:</b> ${m.semestre}</p>
            <p><b>Área:</b> ${m.area}</p>
            <p><b>Créditos:</b> ${m.creditos}</p>
            <p><b>Teoría:</b> ${m.teoria} | <b>Práctica:</b> ${m.practica} | <b>Otros:</b> ${m.otros}</p>
            <p><b>Antecedentes:</b> ${m.antecedentes}</p>
        `;
        contenedor.appendChild(div);
    });
}

document.getElementById('semestreSelect').addEventListener('change', e => {
    mostrarMaterias(e.target.value, document.getElementById('buscador').value);
});

document.getElementById('buscador').addEventListener('input', e => {
    mostrarMaterias(document.getElementById('semestreSelect').value, e.target.value);
});

mostrarMaterias("todos");
