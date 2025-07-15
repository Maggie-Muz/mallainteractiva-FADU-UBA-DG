const materias = [
  // CBC
  { id: 'IPC', nombre: 'Introd. al Pensamiento Científico', año: 1, correlativas: [] },
  { id: 'ICSE', nombre: 'Introd. al Conocimiento de la Sociedad y el Estado', año: 1, correlativas: [] },
  { id: 'M', nombre: 'Matemática', año: 1, correlativas: [] },
  { id: 'S', nombre: 'Semiología', año: 1, correlativas: [] },
  { id: 'P1', nombre: 'Introd. al Conocimiento Proyectual 1', año: 1, correlativas: [] },
  { id: 'P2', nombre: 'Introd. al Conocimiento Proyectual 2', año: 1, correlativas: [] },
  { id: 'D', nombre: 'Taller de Dibujo', año: 1, correlativas: [] },

  // Nivel 1
  {
    id: 'DG1', nombre: 'Diseño Gráfico I', año: 2,
    correlativas: [['IPC'], ['ICSE'], ['M'], ['S'], ['P1'], ['P2'], ['D']]
  },
  {
    id: 'TIP1', nombre: 'Tipografía I', año: 2,
    correlativas: [['IPC'], ['ICSE'], ['M'], ['S'], ['P1'], ['P2'], ['D']]
  },
  {
    id: 'M1', nombre: 'Morfología I', año: 2,
    correlativas: [['IPC'], ['ICSE'], ['M'], ['S'], ['P1'], ['P2'], ['D']]
  },
  {
    id: 'H1', nombre: 'Historia I', año: 2,
    correlativas: [['IPC'], ['ICSE'], ['M'], ['S'], ['P1'], ['P2'], ['D']]
  },
  {
    id: 'C1', nombre: 'Comunicación I', año: 2,
    correlativas: [['IPC'], ['ICSE'], ['M'], ['S'], ['P1'], ['P2'], ['D']]
  },
  {
    id: 'TEC1', nombre: 'Tecnología I', año: 2,
    correlativas: [['IPC'], ['ICSE'], ['M'], ['S'], ['P1'], ['P2'], ['D']]
  },
  {
    id: 'ELEC1', nombre: 'Fotografía / Ilustración', año: 2,
    correlativas: [['IPC'], ['ICSE'], ['M'], ['S'], ['P1'], ['P2'], ['D']]
  },

  // Nivel 2
  { id: 'DG2', nombre: 'Diseño Gráfico II', año: 3, correlativas: [['DG1'], ['TIP1'], ['M1']] },
  { id: 'TIP2', nombre: 'Tipografía II', año: 3, correlativas: [['TIP1']] },
  { id: 'M2', nombre: 'Morfología II', año: 3, correlativas: [['M1']] },
  { id: 'H2', nombre: 'Historia II', año: 3, correlativas: [['H1']] },
  { id: 'C2', nombre: 'Comunicación II', año: 3, correlativas: [['C1']] },
  { id: 'TEC2', nombre: 'Tecnología II', año: 3, correlativas: [['TEC1']] },
  { id: 'ME1', nombre: 'Medios Expresivos I', año: 3, correlativas: [['ELEC1']] },

  // Nivel 3
  {
    id: 'DG3', nombre: 'Diseño Gráfico III', año: 4,
    correlativas: [['DG2'], ['TIP2'], ['M2'], ['H1'], ['C1'], ['TEC1'], ['ELEC1']]
  },
  { id: 'ME2', nombre: 'Medios Expresivos II', año: 4, correlativas: [['ME1']] },
  {
    id: 'LPP', nombre: 'Legislación y Práctica Profesional', año: 4,
    correlativas: [['DG2'], ['TIP2'], ['M2'], ['H1'], ['C1'], ['TEC1'], ['ELEC1']],
    aceptaCursada: ['M2', 'H2']
  },
  {
    id: 'SH', nombre: 'Electiva Socio-Humanística', año: 4,
    correlativas: [['DG2'], ['TIP2'], ['M2'], ['H1'], ['C1'], ['TEC1'], ['ELEC1']],
    aceptaCursada: ['M2', 'H2']
  },

  // Nivel 4
  {
    id: 'DG4', nombre: 'Diseño Gráfico IV', año: 5,
    correlativas: [['DG3'], ['TIP2'], ['M2'], ['ME1'], ['H2'], ['C2'], ['TEC2']]
  },
  {
    id: 'FO1', nombre: 'Electiva de Formación Orientada 1', año: 5,
    correlativas: [['DG3'], ['TIP2'], ['M2'], ['ME1'], ['TEC2']],
    aceptaCursada: ['M2', 'H2']
  },
  {
    id: 'FO2', nombre: 'Electiva de Formación Orientada 2', año: 5,
    correlativas: [['DG3'], ['TIP2'], ['M2'], ['ME1'], ['TEC2']],
    aceptaCursada: ['M2', 'H2']
  },
  {
    id: 'MO', nombre: 'Materias Optativas / Seminarios (180hs)', año: 5,
    correlativas: [['DG2'], ['ME1'], ['TEC2'], ['TIP2', 'M2']],
    aceptaCursada: ['M2', 'H2']
  }
];

export default materias;

export function correlativasCumplidas(materia, estados) {
  return materia.correlativas.every(grupo =>
    grupo.some(id => {
      const estado = estados[id];
      const aceptaCursada = materia.aceptaCursada?.includes(id);
      return estado === 'aprobada' || (aceptaCursada && estado === 'cursada');
    })
  );
}
