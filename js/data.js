// =============================================================================
// js/data.js — Datos Base, Simulación de Reuniones y Estado Global
// =============================================================================

// 1. Datos Reales Declarados por Nivel Académico (Reunión de Abril)
var aprilData = {
  "7": {
    "name": "7° Año",
    "groups": [
      {
        "name": "7°1",
        "sinBajas": 17,
        "entre1y3": 5,
        "cuatroOMas": 3,
        "insuficiencias": {
          "Biologia": 1,
          "Com Visual": 4,
          "Ed Fisica": 0,
          "Ed Musical": 1,
          "Geografia": 4,
          "Historia": 4,
          "Id Esp": 1,
          "Ingles": 0,
          "Matematicas": 5,
          "Informática": 5,
          "Cs. Fis/Quim": 3
        }
      },
      {
        "name": "7°2",
        "sinBajas": 11,
        "entre1y3": 5,
        "cuatroOMas": 6,
        "insuficiencias": {
          "Biologia": 0,
          "Com Visual": 2,
          "Ed Fisica": 0,
          "Ed Musical": 1,
          "Geografia": 6,
          "Historia": 6,
          "Id Esp": 2,
          "Ingles": 2,
          "Matematicas": 8,
          "Informática": 9,
          "Cs. Fis/Quim": 9
        }
      },
      {
        "name": "7°3",
        "sinBajas": 12,
        "entre1y3": 8,
        "cuatroOMas": 3,
        "insuficiencias": {
          "Biologia": 2,
          "Com Visual": 0,
          "Ed Fisica": 4,
          "Ed Musical": 0,
          "Geografia": 5,
          "Historia": 5,
          "Id Esp": 0,
          "Ingles": 0,
          "Matematicas": 6,
          "Informática": 5,
          "Cs. Fis/Quim": 2
        }
      },
      {
        "name": "7°4",
        "sinBajas": 11,
        "entre1y3": 11,
        "cuatroOMas": 3,
        "insuficiencias": {
          "Biologia": 3,
          "Com Visual": 1,
          "Ed Fisica": 2,
          "Ed Musical": 0,
          "Geografia": 2,
          "Historia": 2,
          "Id Esp": 0,
          "Ingles": 1,
          "Matematicas": 8,
          "Informática": 10,
          "Cs. Fis/Quim": 3
        }
      },
      {
        "name": "7°5",
        "sinBajas": 11,
        "entre1y3": 7,
        "cuatroOMas": 6,
        "insuficiencias": {
          "Biologia": 6,
          "Com Visual": 5,
          "Ed Fisica": 0,
          "Ed Musical": 0,
          "Geografia": 6,
          "Historia": 6,
          "Id Esp": 3,
          "Ingles": 5,
          "Matematicas": 6,
          "Informática": 6,
          "Cs. Fis/Quim": 8
        }
      },
      {
        "name": "7°6",
        "sinBajas": 12,
        "entre1y3": 3,
        "cuatroOMas": 10,
        "insuficiencias": {
          "Biologia": 4,
          "Com Visual": 5,
          "Ed Fisica": 2,
          "Ed Musical": 4,
          "Geografia": 6,
          "Historia": 6,
          "Id Esp": 8,
          "Ingles": 7,
          "Matematicas": 5,
          "Informática": 8,
          "Cs. Fis/Quim": 11
        }
      },
      {
        "name": "7°7",
        "sinBajas": 11,
        "entre1y3": 7,
        "cuatroOMas": 5,
        "insuficiencias": {
          "Biologia": 5,
          "Com Visual": 4,
          "Ed Fisica": 5,
          "Ed Musical": 2,
          "Geografia": 6,
          "Historia": 6,
          "Id Esp": 4,
          "Ingles": 5,
          "Matematicas": 6,
          "Informática": 8,
          "Cs. Fis/Quim": 4
        }
      }
    ]
  },
  "8": {
    "name": "8° Año",
    "groups": [
      {
        "name": "8°1",
        "sinBajas": 13,
        "entre1y3": 7,
        "cuatroOMas": 3,
        "insuficiencias": {
          "Biologia": 5,
          "Com Visual": 1,
          "Ed Fisica": 0,
          "Ed Musical": 3,
          "Ciudadana": 4,
          "Geografia": 2,
          "Historia": 2,
          "Id Esp": 2,
          "Ingles": 8,
          "Matematicas": 3,
          "Informática": 3,
          "Cs. Fis/Quim": 5
        }
      },
      {
        "name": "8°2",
        "sinBajas": 8,
        "entre1y3": 9,
        "cuatroOMas": 6,
        "insuficiencias": {
          "Biologia": 7,
          "Com Visual": 2,
          "Ed Fisica": 2,
          "Ed Musical": 2,
          "Ciudadana": 4,
          "Geografia": 2,
          "Historia": 5,
          "Id Esp": 9,
          "Ingles": 8,
          "Matematicas": 7,
          "Informática": 5,
          "Cs. Fis/Quim": 4
        }
      },
      {
        "name": "8°3",
        "sinBajas": 9,
        "entre1y3": 6,
        "cuatroOMas": 9,
        "insuficiencias": {
          "Biologia": 9,
          "Com Visual": 6,
          "Ed Fisica": 4,
          "Ed Musical": 4,
          "Ciudadana": 7,
          "Geografia": 3,
          "Historia": 6,
          "Id Esp": 11,
          "Ingles": 7,
          "Matematicas": 7,
          "Informática": 0,
          "Cs. Fis/Quim": 13
        }
      },
      {
        "name": "8°4",
        "sinBajas": 12,
        "entre1y3": 5,
        "cuatroOMas": 5,
        "insuficiencias": {
          "Biologia": 6,
          "Com Visual": 5,
          "Ed Fisica": 0,
          "Ed Musical": 2,
          "Ciudadana": 3,
          "Geografia": 0,
          "Historia": 3,
          "Id Esp": 9,
          "Ingles": 5,
          "Matematicas": 6,
          "Informática": 2,
          "Cs. Fis/Quim": 2
        }
      },
      {
        "name": "8°5",
        "sinBajas": 4,
        "entre1y3": 9,
        "cuatroOMas": 7,
        "insuficiencias": {
          "Biologia": 7,
          "Com Visual": 1,
          "Ed Fisica": 8,
          "Ed Musical": 7,
          "Ciudadana": 4,
          "Geografia": 5,
          "Historia": 6,
          "Id Esp": 7,
          "Ingles": 7,
          "Matematicas": 5,
          "Informática": 0,
          "Cs. Fis/Quim": 7
        }
      },
      {
        "name": "8°6",
        "sinBajas": 5,
        "entre1y3": 6,
        "cuatroOMas": 8,
        "insuficiencias": {
          "Biologia": 6,
          "Com Visual": 5,
          "Ed Fisica": 0,
          "Ed Musical": 4,
          "Ciudadana": 4,
          "Geografia": 6,
          "Historia": 8,
          "Id Esp": 6,
          "Ingles": 1,
          "Matematicas": 5,
          "Informática": 6,
          "Cs. Fis/Quim": 9
        }
      },
      {
        "name": "8°7",
        "sinBajas": 5,
        "entre1y3": 5,
        "cuatroOMas": 9,
        "insuficiencias": {
          "Biologia": 9,
          "Com Visual": 10,
          "Ed Fisica": 4,
          "Ed Musical": 8,
          "Ciudadana": 6,
          "Geografia": 6,
          "Historia": 9,
          "Id Esp": 6,
          "Ingles": 1,
          "Matematicas": 8,
          "Informática": 5,
          "Cs. Fis/Quim": 6
        }
      }
    ]
  },
  "9": {
    "name": "9° Año",
    "groups": [
      {
        "name": "9°1",
        "sinBajas": 4,
        "entre1y3": 8,
        "cuatroOMas": 12,
        "insuficiencias": {
          "Biologia": 5,
          "Com Visual": 2,
          "Ed Fisica": 3,
          "Ed Musical": 0,
          "Ciudadana": 1,
          "Fisica": 6,
          "Geografia": 3,
          "Historia": 9,
          "Id Español": 5,
          "Ingles": 0,
          "Literatura": 14,
          "Matemática": 6,
          "Quimica": 12,
          "Informatica": 17
        }
      },
      {
        "name": "9°2",
        "sinBajas": 6,
        "entre1y3": 10,
        "cuatroOMas": 8,
        "insuficiencias": {
          "Biologia": 8,
          "Com Visual": 4,
          "Ed Fisica": 2,
          "Ed Musical": 0,
          "Ciudadana": 2,
          "Fisica": 8,
          "Geografia": 1,
          "Historia": 5,
          "Id Español": 7,
          "Ingles": 2,
          "Literatura": 11,
          "Matemática": 3,
          "Quimica": 8,
          "Informatica": 14
        }
      },
      {
        "name": "9°3",
        "sinBajas": 6,
        "entre1y3": 8,
        "cuatroOMas": 11,
        "insuficiencias": {
          "Biologia": 11,
          "Com Visual": 2,
          "Ed Fisica": 4,
          "Ed Musical": 0,
          "Ciudadana": 4,
          "Fisica": 7,
          "Geografia": 5,
          "Historia": 6,
          "Id Español": 10,
          "Ingles": 0,
          "Literatura": 14,
          "Matemática": 6,
          "Quimica": 12,
          "Informatica": 18
        }
      },
      {
        "name": "9°4",
        "sinBajas": 1,
        "entre1y3": 12,
        "cuatroOMas": 10,
        "insuficiencias": {
          "Biologia": 9,
          "Com Visual": 2,
          "Ed Fisica": 0,
          "Ed Musical": 0,
          "Ciudadana": 4,
          "Fisica": 5,
          "Geografia": 4,
          "Historia": 5,
          "Id Español": 8,
          "Ingles": 0,
          "Literatura": 14,
          "Matemática": 7,
          "Quimica": 12,
          "Informatica": 14
        }
      },
      {
        "name": "9°5",
        "sinBajas": 3,
        "entre1y3": 12,
        "cuatroOMas": 7,
        "insuficiencias": {
          "Biologia": 3,
          "Com Visual": 3,
          "Ed Fisica": 6,
          "Ed Musical": 0,
          "Ciudadana": 5,
          "Fisica": 6,
          "Geografia": 4,
          "Historia": 3,
          "Id Español": 3,
          "Ingles": 3,
          "Literatura": 5,
          "Matemática": 8,
          "Quimica": 6,
          "Informatica": 17
        }
      },
      {
        "name": "9°6",
        "sinBajas": 3,
        "entre1y3": 9,
        "cuatroOMas": 9,
        "insuficiencias": {
          "Biologia": 12,
          "Com Visual": 7,
          "Ed Fisica": 11,
          "Ed Musical": 0,
          "Ciudadana": 13,
          "Fisica": 10,
          "Geografia": 10,
          "Historia": 11,
          "Id Español": 8,
          "Ingles": 2,
          "Literatura": 12,
          "Matemática": 7,
          "Quimica": 9,
          "Informatica": 16
        }
      },
      {
        "name": "9°7",
        "sinBajas": 4,
        "entre1y3": 12,
        "cuatroOMas": 6,
        "insuficiencias": {
          "Biologia": 4,
          "Com Visual": 3,
          "Ed Fisica": 11,
          "Ed Musical": 2,
          "Ciudadana": 5,
          "Fisica": 5,
          "Geografia": 3,
          "Historia": 5,
          "Id Español": 3,
          "Ingles": 1,
          "Literatura": 4,
          "Matemática": 9,
          "Quimica": 6,
          "Informatica": 13
        }
      }
    ]
  },
  "EMS": {
    "name": "1° EMS",
    "groups": [
      {
        "name": "1°EMS 1",
        "sinBajas": 8,
        "entre1y3": 7,
        "cuatroOMas": 8,
        "insuficiencias": {
          "Atronomia": 0,
          "Biologia": 3,
          "Com. Visual": 2,
          "Deporte y Rec": 0,
          "Ed Fisica": 0,
          "Ed Musical": 0,
          "Part Juvenil": 2,
          "Filosofia": 10,
          "Arg y debate": 0,
          "Fisica": 4,
          "Geografia": 0,
          "Historia": 1,
          "Patrimonio": 0,
          "Ingles": 10,
          "Literatura": 10,
          "Matemáticas": 7,
          "Quimica": 9
        }
      },
      {
        "name": "1° EMS 2",
        "sinBajas": 10,
        "entre1y3": 7,
        "cuatroOMas": 2,
        "insuficiencias": {
          "Atronomia": 3,
          "Biologia": 7,
          "Com. Visual": 0,
          "Deporte y Rec": 0,
          "Ed Fisica": 0,
          "Ed Musical": 0,
          "Part Juvenil": 1,
          "Filosofia": 8,
          "Arg y debate": 0,
          "Fisica": 4,
          "Geografia": 0,
          "Historia": 1,
          "Patrimonio": 0,
          "Ingles": 8,
          "Literatura": 5,
          "Matemáticas": 6,
          "Quimica": 12
        }
      },
      {
        "name": "1°EMS 3",
        "sinBajas": 8,
        "entre1y3": 8,
        "cuatroOMas": 7,
        "insuficiencias": {
          "Atronomia": 7,
          "Biologia": 5,
          "Com. Visual": 0,
          "Deporte y Rec": 0,
          "Ed Fisica": 0,
          "Ed Musical": 0,
          "Part Juvenil": 3,
          "Filosofia": 10,
          "Arg y debate": 0,
          "Fisica": 3,
          "Geografia": 0,
          "Historia": 4,
          "Patrimonio": 0,
          "Ingles": 11,
          "Literatura": 6,
          "Matemáticas": 6,
          "Quimica": 8
        }
      },
      {
        "name": "1°EMS 4",
        "sinBajas": 15,
        "entre1y3": 5,
        "cuatroOMas": 5,
        "insuficiencias": {
          "Atronomia": 0,
          "Biologia": 2,
          "Com. Visual": 1,
          "Deporte y Rec": 0,
          "Ed Fisica": 3,
          "Ed Musical": 0,
          "Part Juvenil": 1,
          "Filosofia": 0,
          "Arg y debate": 0,
          "Fisica": 5,
          "Geografia": 0,
          "Historia": 1,
          "Patrimonio": 0,
          "Ingles": 5,
          "Literatura": 7,
          "Matemáticas": 5,
          "Quimica": 4
        }
      },
      {
        "name": "1°EMS 5",
        "sinBajas": 7,
        "entre1y3": 7,
        "cuatroOMas": 9,
        "insuficiencias": {
          "Atronomia": 0,
          "Biologia": 7,
          "Com. Visual": 2,
          "Deporte y Rec": 0,
          "Ed Fisica": 5,
          "Ed Musical": 0,
          "Part Juvenil": 6,
          "Filosofia": 10,
          "Arg y debate": 0,
          "Fisica": 8,
          "Geografia": 0,
          "Historia": 1,
          "Patrimonio": 0,
          "Ingles": 10,
          "Literatura": 4,
          "Matemáticas": 3,
          "Quimica": 11
        }
      },
      {
        "name": "1°EMS 6",
        "sinBajas": 11,
        "entre1y3": 12,
        "cuatroOMas": 15,
        "insuficiencias": {
          "Atronomia": 0,
          "Biologia": 9,
          "Com. Visual": 3,
          "Deporte y Rec": 0,
          "Ed Fisica": 10,
          "Ed Musical": 0,
          "Part Juvenil": 11,
          "Filosofia": 5,
          "Arg y debate": 0,
          "Fisica": 13,
          "Geografia": 0,
          "Historia": 3,
          "Patrimonio": 0,
          "Ingles": 11,
          "Literatura": 12,
          "Matemáticas": 7,
          "Quimica": 13
        }
      }
    ]
  }
};

// =============================================================================
// 2. Función determinista para calcular inasistencias consistentes por grupo
// =============================================================================
function populateInasistencias(group) {

  // Si el grupo ya tiene distribucionInasistencias cargada con datos reales, no sobreescribir
  if (group.distribucionInasistencias) return;

  // ===========================================================================
  // DATOS REALES — 7° AÑO (Reunión de Abril)
  // Columnas: sinBajas | entre1y3 (Rend. Medio) | cuatroOMas (Rend. Crítico)
  // Filas:    regular (0-5 faltas) | moderado (6-10) | critico (>10)
  // ===========================================================================

  // 7°1
  if (group.name === "7°1") {
    group.distribucionInasistencias = {
      "sinBajas":   { "regular": 16, "moderado": 1, "critico": 0 },
      "entre1y3":   { "regular": 4,  "moderado": 1, "critico": 0 },
      "cuatroOMas": { "regular": 1,  "moderado": 1, "critico": 1 }
    };
    return;
  }

  // 7°2
  if (group.name === "7°2") {
    group.distribucionInasistencias = {
      "sinBajas":   { "regular": 11, "moderado": 0, "critico": 0 },
      "entre1y3":   { "regular": 5,  "moderado": 0, "critico": 0 },
      "cuatroOMas": { "regular": 6,  "moderado": 0, "critico": 0 }
    };
    return;
  }

  // 7°3
  if (group.name === "7°3") {
    group.distribucionInasistencias = {
      "sinBajas":   { "regular": 12, "moderado": 0, "critico": 0 },
      "entre1y3":   { "regular": 7,  "moderado": 1, "critico": 0 },
      "cuatroOMas": { "regular": 0,  "moderado": 2, "critico": 1 }
    };
    return;
  }

  // 7°4
  if (group.name === "7°4") {
    group.distribucionInasistencias = {
      "sinBajas":   { "regular": 10, "moderado": 1, "critico": 0 },
      "entre1y3":   { "regular": 9,  "moderado": 1, "critico": 1 },
      "cuatroOMas": { "regular": 2,  "moderado": 0, "critico": 1 }
    };
    return;
  }

  // 7°5
  if (group.name === "7°5") {
    group.distribucionInasistencias = {
      "sinBajas":   { "regular": 11, "moderado": 0, "critico": 0 },
      "entre1y3":   { "regular": 5,  "moderado": 2, "critico": 0 },
      "cuatroOMas": { "regular": 3,  "moderado": 1, "critico": 2 }
    };
    return;
  }

  // 7°6
  if (group.name === "7°6") {
    group.distribucionInasistencias = {
      "sinBajas":   { "regular": 11, "moderado": 1, "critico": 0 },
      "entre1y3":   { "regular": 1,  "moderado": 2, "critico": 0 },
      "cuatroOMas": { "regular": 4,  "moderado": 2, "critico": 4 }
    };
    return;
  }

  // 7°7
  if (group.name === "7°7") {
    group.distribucionInasistencias = {
      "sinBajas":   { "regular": 11, "moderado": 0, "critico": 0 },
      "entre1y3":   { "regular": 6,  "moderado": 1, "critico": 0 },
      "cuatroOMas": { "regular": 2,  "moderado": 2, "critico": 1 }
    };
    return;
  }

  // ===========================================================================
  // DATOS REALES — 8° AÑO (Reunión de Abril)
  // ===========================================================================

  // 8°1
  if (group.name === "8°1") {
    group.distribucionInasistencias = {
      "sinBajas":   { "regular": 10, "moderado": 3, "critico": 0 },
      "entre1y3":   { "regular": 4,  "moderado": 2, "critico": 1 },
      "cuatroOMas": { "regular": 1,  "moderado": 1, "critico": 1 }
    };
    return;
  }

  // 8°2
  if (group.name === "8°2") {
    group.distribucionInasistencias = {
      "sinBajas":   { "regular": 8, "moderado": 0, "critico": 0 },
      "entre1y3":   { "regular": 8, "moderado": 1, "critico": 0 },
      "cuatroOMas": { "regular": 1, "moderado": 0, "critico": 5 }
    };
    return;
  }

  // 8°3
  if (group.name === "8°3") {
    group.distribucionInasistencias = {
      "sinBajas":   { "regular": 9, "moderado": 0, "critico": 0 },
      "entre1y3":   { "regular": 6, "moderado": 0, "critico": 0 },
      "cuatroOMas": { "regular": 0, "moderado": 4, "critico": 5 }
    };
    return;
  }

  // 8°4
  if (group.name === "8°4") {
    group.distribucionInasistencias = {
      "sinBajas":   { "regular": 9, "moderado": 3, "critico": 0 },
      "entre1y3":   { "regular": 3, "moderado": 2, "critico": 0 },
      "cuatroOMas": { "regular": 1, "moderado": 1, "critico": 3 }
    };
    return;
  }

  // 8°5
  if (group.name === "8°5") {
    group.distribucionInasistencias = {
      "sinBajas":   { "regular": 1, "moderado": 2, "critico": 1 },
      "entre1y3":   { "regular": 2, "moderado": 6, "critico": 1 },
      "cuatroOMas": { "regular": 4, "moderado": 2, "critico": 1 }
    };
    return;
  }

  // 8°6
  if (group.name === "8°6") {
    group.distribucionInasistencias = {
      "sinBajas":   { "regular": 3, "moderado": 2, "critico": 0 },
      "entre1y3":   { "regular": 5, "moderado": 1, "critico": 0 },
      "cuatroOMas": { "regular": 1, "moderado": 4, "critico": 3 }
    };
    return;
  }

  // 8°7
  if (group.name === "8°7") {
    group.distribucionInasistencias = {
      "sinBajas":   { "regular": 3, "moderado": 2, "critico": 0 },
      "entre1y3":   { "regular": 3, "moderado": 2, "critico": 0 },
      "cuatroOMas": { "regular": 0, "moderado": 0, "critico": 9 }
    };
    return;
  }

  // ===========================================================================
  // DATOS REALES — 9° AÑO (Reunión de Abril)
  // ===========================================================================

  // 9°1
  if (group.name === "9°1") {
    group.distribucionInasistencias = {
      "sinBajas":   { "regular": 4, "moderado": 0, "critico": 0 },
      "entre1y3":   { "regular": 6, "moderado": 2, "critico": 0 },
      "cuatroOMas": { "regular": 4, "moderado": 6, "critico": 2 }
    };
    return;
  }

  // 9°2
  if (group.name === "9°2") {
    group.distribucionInasistencias = {
      "sinBajas":   { "regular": 5, "moderado": 1, "critico": 0 },
      "entre1y3":   { "regular": 8, "moderado": 2, "critico": 0 },
      "cuatroOMas": { "regular": 2, "moderado": 3, "critico": 3 }
    };
    return;
  }

  // 9°3
  if (group.name === "9°3") {
    group.distribucionInasistencias = {
      "sinBajas":   { "regular": 6, "moderado": 0, "critico": 0 },
      "entre1y3":   { "regular": 4, "moderado": 4, "critico": 0 },
      "cuatroOMas": { "regular": 4, "moderado": 5, "critico": 2 }
    };
    return;
  }

  // 9°4
  if (group.name === "9°4") {
    group.distribucionInasistencias = {
      "sinBajas":   { "regular": 1, "moderado": 0, "critico": 0 },
      "entre1y3":   { "regular": 8, "moderado": 3, "critico": 1 },
      "cuatroOMas": { "regular": 3, "moderado": 4, "critico": 3 }
    };
    return;
  }

  // ===========================================================================
  // DATOS REALES — 9° AÑO VESPERTINOS (Reunión de Abril)
  // ===========================================================================

  // 9°5
  if (group.name === "9°5") {
    group.distribucionInasistencias = {
      "sinBajas":   { "regular": 3, "moderado": 0, "critico": 0 },
      "entre1y3":   { "regular": 7, "moderado": 5, "critico": 0 },
      "cuatroOMas": { "regular": 1, "moderado": 1, "critico": 5 }
    };
    return;
  }

  // 9°6
  if (group.name === "9°6") {
    group.distribucionInasistencias = {
      "sinBajas":   { "regular": 1, "moderado": 2, "critico": 0 },
      "entre1y3":   { "regular": 3, "moderado": 3, "critico": 3 },
      "cuatroOMas": { "regular": 0, "moderado": 0, "critico": 9 }
    };
    return;
  }

  // 9°7
  if (group.name === "9°7") {
    group.distribucionInasistencias = {
      "sinBajas":   { "regular": 3, "moderado": 1, "critico": 0 },
      "entre1y3":   { "regular": 6, "moderado": 3, "critico": 3 },
      "cuatroOMas": { "regular": 1, "moderado": 0, "critico": 5 }
    };
    return;
  }

  // ===========================================================================
  // DATOS REALES — 1° EMS (Reunión de Abril)
  // Columnas: sinBajas | entre1y3 (Rend. Medio) | cuatroOMas (Rend. Crítico)
  // Filas:    regular (0-5 faltas) | moderado (6-10) | critico (>10)
  // ===========================================================================

  // 1°EMS 1
  if (group.name === "1°EMS 1") {
    group.distribucionInasistencias = {
      "sinBajas":   { "regular": 1, "moderado": 4, "critico": 3 },
      "entre1y3":   { "regular": 1, "moderado": 3, "critico": 3 },
      "cuatroOMas": { "regular": 0, "moderado": 1, "critico": 7 }
    };
    return;
  }

  // 1° EMS 2
  if (group.name === "1° EMS 2") {
    group.distribucionInasistencias = {
      "sinBajas":   { "regular": 1, "moderado": 5, "critico": 4 },
      "entre1y3":   { "regular": 0, "moderado": 1, "critico": 6 },
      "cuatroOMas": { "regular": 0, "moderado": 0, "critico": 2 }
    };
    return;
  }

  // 1°EMS 3
  if (group.name === "1°EMS 3") {
    group.distribucionInasistencias = {
      "sinBajas":   { "regular": 0, "moderado": 0, "critico": 8 },
      "entre1y3":   { "regular": 0, "moderado": 0, "critico": 8 },
      "cuatroOMas": { "regular": 0, "moderado": 0, "critico": 7 }
    };
    return;
  }

  // 1°EMS 4
  if (group.name === "1°EMS 4") {
    group.distribucionInasistencias = {
      "sinBajas":   { "regular": 13, "moderado": 1, "critico": 1 },
      "entre1y3":   { "regular": 4,  "moderado": 1, "critico": 0 },
      "cuatroOMas": { "regular": 1,  "moderado": 1, "critico": 3 }
    };
    return;
  }

  // 1°EMS 5
  if (group.name === "1°EMS 5") {
    group.distribucionInasistencias = {
      "sinBajas":   { "regular": 6,  "moderado": 0, "critico": 1 },
      "entre1y3":   { "regular": 4,  "moderado": 2, "critico": 1 },
      "cuatroOMas": { "regular": 4,  "moderado": 2, "critico": 3 }
    };
    return;
  }

  // 1°EMS 6
  if (group.name === "1°EMS 6") {
    group.distribucionInasistencias = {
      "sinBajas":   { "regular": 10, "moderado": 1, "critico": 0 },
      "entre1y3":   { "regular": 10, "moderado": 1, "critico": 1 },
      "cuatroOMas": { "regular": 4,  "moderado": 3, "critico": 8 }
    };
    return;
  }

  // ===========================================================================
  // FALLBACK — Grupos sin datos reales: cálculo estimado por fórmula
  // ===========================================================================
  var sbCritico  = group.sinBajas > 12 ? 1 : 0;
  var sbModerado = Math.min(group.sinBajas - sbCritico, Math.round(group.sinBajas * 0.15));
  var sbRegular  = group.sinBajas - sbCritico - sbModerado;

  var eCritico  = group.entre1y3 > 7 ? 2 : 1;
  var eModerado = Math.min(group.entre1y3 - eCritico, Math.round(group.entre1y3 * 0.3));
  var eRegular  = group.entre1y3 - eCritico - eModerado;

  var cRegular  = group.cuatroOMas > 8 ? 1 : 0;
  var cModerado = Math.min(group.cuatroOMas - cRegular, Math.round(group.cuatroOMas * 0.2));
  var cCritico  = group.cuatroOMas - cRegular - cModerado;

  group.distribucionInasistencias = {
    "sinBajas":   { "regular": sbRegular,  "moderado": sbModerado,  "critico": sbCritico  },
    "entre1y3":   { "regular": eRegular,   "moderado": eModerado,   "critico": eCritico   },
    "cuatroOMas": { "regular": cRegular,   "moderado": cModerado,   "critico": cCritico   }
  };
}

// Inicializar inasistencias en aprilData al cargar el script
for (var _gradeKey in aprilData) {
  aprilData[_gradeKey].groups.forEach(populateInasistencias);
}

// =============================================================================
// 3. Función auxiliar para simular variaciones en reuniones (Agosto, Octubre, Final)
// =============================================================================
function generateMockData(baseData, multiplierSinBajas, multiplierCriticos) {
  var cloned = JSON.parse(JSON.stringify(baseData));
  for (var gradeKey in cloned) {
    cloned[gradeKey].groups.forEach(function(group) {
      var origSinBajas = group.sinBajas;
      var origCriticos = group.cuatroOMas;
      var origMedio    = group.entre1y3;

      group.sinBajas   = Math.max(0, Math.round(origSinBajas * multiplierSinBajas));
      group.cuatroOMas = Math.max(0, Math.round(origCriticos * multiplierCriticos));

      var originalTotal = origSinBajas + origMedio + origCriticos;
      group.entre1y3 = Math.max(0, originalTotal - group.sinBajas - group.cuatroOMas);

      if (group.insuficiencias) {
        for (var subject in group.insuficiencias) {
          group.insuficiencias[subject] = Math.max(
            0,
            Math.round(group.insuficiencias[subject] * multiplierCriticos)
          );
        }
      }

      // Volver a calcular las inasistencias coherentes para los nuevos datos simulados
      populateInasistencias(group);
    });
  }
  return cloned;
}

// =============================================================================
// 3b. Función auxiliar para sobreescribir grupos reales dentro de datos simulados
// =============================================================================
function mergeRealGroups(simulatedData, realGroups, gradeKey) {
  var cloned = JSON.parse(JSON.stringify(simulatedData));
  if (!cloned[gradeKey]) return cloned;
  realGroups.forEach(function(realGroup) {
    var idx = cloned[gradeKey].groups.findIndex(function(g) {
      return g.name === realGroup.name ||
        g.name.replace(/\s+/g, '') === realGroup.name.replace(/\s+/g, '');
    });
    if (idx !== -1) {
      var targetName = cloned[gradeKey].groups[idx].name;
      var newObj = JSON.parse(JSON.stringify(realGroup));
      newObj.name = targetName;
      cloned[gradeKey].groups[idx] = newObj;
    }
  });
  return cloned;
}

// =============================================================================
// 3c. Datos Reales — 2° Reunión (Agosto) — 7° Año
// =============================================================================
var august7Groups = [
  {
    "name": "7°1",
    "sinBajas": 21,
    "entre1y3": 2,
    "cuatroOMas": 2,
    "insuficiencias": {
      "Biologia": 2,
      "Com Visual": 3,
      "Ed Fisica": 0,
      "Ed Musical": 1,
      "Geografia": 2,
      "Historia": 2,
      "Id Esp": 2,
      "Ingles": 0,
      "Matematicas": 3,
      "Informática": 4,
      "Cs. Fis/Quim": 1
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 12, "moderado": 3, "critico": 6 },
      "entre1y3":   { "regular": 0,  "moderado": 0, "critico": 2 },
      "cuatroOMas": { "regular": 0,  "moderado": 0, "critico": 2 }
    }
  },
  {
    "name": "7°2",
    "sinBajas": 14,
    "entre1y3": 5,
    "cuatroOMas": 3,
    "insuficiencias": {
      "Biologia": 0,
      "Com Visual": 8,
      "Ed Fisica": 0,
      "Ed Musical": 2,
      "Geografia": 3,
      "Historia": 3,
      "Id Esp": 4,
      "Ingles": 1,
      "Matematicas": 3,
      "Informática": 4,
      "Cs. Fis/Quim": 1
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 9, "moderado": 2, "critico": 3 },
      "entre1y3":   { "regular": 2, "moderado": 0, "critico": 3 },
      "cuatroOMas": { "regular": 0, "moderado": 0, "critico": 3 }
    }
  },
  {
    "name": "7°3",
    "sinBajas": 17,
    "entre1y3": 4,
    "cuatroOMas": 2,
    "insuficiencias": {
      "Biologia": 1,
      "Com Visual": 3,
      "Ed Fisica": 1,
      "Ed Musical": 0,
      "Geografia": 3,
      "Historia": 3,
      "Id Esp": 2,
      "Ingles": 3,
      "Matematicas": 2,
      "Informática": 3,
      "Cs. Fis/Quim": 0
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 10, "moderado": 6, "critico": 1 },
      "entre1y3":   { "regular": 0,  "moderado": 2, "critico": 2 },
      "cuatroOMas": { "regular": 0,  "moderado": 0, "critico": 2 }
    }
  },
  {
    "name": "7°4",
    "sinBajas": 16,
    "entre1y3": 5,
    "cuatroOMas": 5,
    "insuficiencias": {
      "Biologia": 3,
      "Com Visual": 3,
      "Ed Fisica": 1,
      "Ed Musical": 0,
      "Geografia": 5,
      "Historia": 5,
      "Id Esp": 3,
      "Ingles": 5,
      "Matematicas": 9,
      "Informática": 3,
      "Cs. Fis/Quim": 0
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 11, "moderado": 4, "critico": 1 },
      "entre1y3":   { "regular": 1,  "moderado": 2, "critico": 2 },
      "cuatroOMas": { "regular": 0,  "moderado": 0, "critico": 5 }
    }
  },
  {
    "name": "7°5",
    "sinBajas": 11,
    "entre1y3": 7,
    "cuatroOMas": 6,
    "insuficiencias": {
      "Biologia": 7,
      "Com Visual": 10,
      "Ed Fisica": 0,
      "Ed Musical": 5,
      "Geografia": 2,
      "Historia": 2,
      "Id Esp": 4,
      "Ingles": 5,
      "Matematicas": 4,
      "Informática": 8,
      "Cs. Fis/Quim": 2
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 9, "moderado": 0, "critico": 2 },
      "entre1y3":   { "regular": 0, "moderado": 1, "critico": 6 },
      "cuatroOMas": { "regular": 0, "moderado": 4, "critico": 2 }
    }
  },
  {
    "name": "7°6",
    "sinBajas": 12,
    "entre1y3": 5,
    "cuatroOMas": 7,
    "insuficiencias": {
      "Biologia": 7,
      "Com Visual": 10,
      "Ed Fisica": 1,
      "Ed Musical": 3,
      "Geografia": 4,
      "Historia": 4,
      "Id Esp": 6,
      "Ingles": 5,
      "Matematicas": 5,
      "Informática": 6,
      "Cs. Fis/Quim": 3
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 8, "moderado": 3, "critico": 1 },
      "entre1y3":   { "regular": 2, "moderado": 3, "critico": 0 },
      "cuatroOMas": { "regular": 0, "moderado": 1, "critico": 6 }
    }
  },
  {
    "name": "7°7",
    "sinBajas": 16,
    "entre1y3": 2,
    "cuatroOMas": 5,
    "insuficiencias": {
      "Biologia": 6,
      "Com Visual": 5,
      "Ed Fisica": 2,
      "Ed Musical": 3,
      "Geografia": 1,
      "Historia": 1,
      "Id Esp": 5,
      "Ingles": 3,
      "Matematicas": 4,
      "Informática": 7,
      "Cs. Fis/Quim": 3
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 8, "moderado": 7, "critico": 1 },
      "entre1y3":   { "regular": 2, "moderado": 0, "critico": 0 },
      "cuatroOMas": { "regular": 1, "moderado": 0, "critico": 4 }
    }
  }
];
august7Groups.forEach(populateInasistencias);

// =============================================================================
// 3d. Datos Reales — 2° Reunión (Agosto) — 8° Año
// =============================================================================
var august8Groups = [
  {
    "name": "8°1",
    "sinBajas": 16,
    "entre1y3": 3,
    "cuatroOMas": 4,
    "insuficiencias": {
      "Biologia": 4,
      "Com Visual": 1,
      "Ed Fisica": 0,
      "Ed Musical": 3,
      "Ciudadana": 4,
      "Geografia": 3,
      "Historia": 2,
      "Id Esp": 2,
      "Ingles": 6,
      "Matematicas": 4,
      "Informática": 3,
      "Cs. Fis/Quim": 4
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 7, "moderado": 6, "critico": 3 },
      "entre1y3":   { "regular": 0, "moderado": 1, "critico": 2 },
      "cuatroOMas": { "regular": 0, "moderado": 0, "critico": 4 }
    }
  },
  {
    "name": "8°2",
    "sinBajas": 12,
    "entre1y3": 6,
    "cuatroOMas": 5,
    "insuficiencias": {
      "Biologia": 5,
      "Com Visual": 4,
      "Ed Fisica": 0,
      "Ed Musical": 3,
      "Ciudadana": 3,
      "Geografia": 3,
      "Historia": 3,
      "Id Esp": 3,
      "Ingles": 6,
      "Matematicas": 7,
      "Informática": 6,
      "Cs. Fis/Quim": 7
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 7, "moderado": 4, "critico": 1 },
      "entre1y3":   { "regular": 2, "moderado": 3, "critico": 1 },
      "cuatroOMas": { "regular": 0, "moderado": 0, "critico": 5 }
    }
  },
  {
    "name": "8°3",
    "sinBajas": 11,
    "entre1y3": 4,
    "cuatroOMas": 8,
    "insuficiencias": {
      "Biologia": 9,
      "Com Visual": 5,
      "Ed Fisica": 4,
      "Ed Musical": 2,
      "Ciudadana": 3,
      "Geografia": 5,
      "Historia": 4,
      "Id Esp": 11,
      "Ingles": 7,
      "Matematicas": 8,
      "Informática": 0,
      "Cs. Fis/Quim": 9
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 9, "moderado": 3, "critico": 0 },
      "entre1y3":   { "regular": 1, "moderado": 2, "critico": 1 },
      "cuatroOMas": { "regular": 0, "moderado": 1, "critico": 7 }
    }
  },
  {
    "name": "8°4",
    "sinBajas": 8,
    "entre1y3": 8,
    "cuatroOMas": 6,
    "insuficiencias": {
      "Biologia": 5,
      "Com Visual": 7,
      "Ed Fisica": 2,
      "Ed Musical": 4,
      "Ciudadana": 2,
      "Geografia": 3,
      "Historia": 4,
      "Id Esp": 13,
      "Ingles": 10,
      "Matematicas": 10,
      "Informática": 4,
      "Cs. Fis/Quim": 4
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 2, "moderado": 7, "critico": 0 },
      "entre1y3":   { "regular": 2, "moderado": 2, "critico": 4 },
      "cuatroOMas": { "regular": 1, "moderado": 1, "critico": 4 }
    }
  },
  {
    "name": "8°5",
    "sinBajas": 2,
    "entre1y3": 8,
    "cuatroOMas": 10,
    "insuficiencias": {
      "Biologia": 5,
      "Com Visual": 3,
      "Ed Fisica": 6,
      "Ed Musical": 10,
      "Ciudadana": 5,
      "Geografia": 4,
      "Historia": 4,
      "Id Esp": 6,
      "Ingles": 13,
      "Matematicas": 12,
      "Informática": 7,
      "Cs. Fis/Quim": 1
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 1, "moderado": 2, "critico": 0 },
      "entre1y3":   { "regular": 1, "moderado": 0, "critico": 8 },
      "cuatroOMas": { "regular": 1, "moderado": 1, "critico": 8 }
    }
  },
  {
    "name": "8°6",
    "sinBajas": 7,
    "entre1y3": 5,
    "cuatroOMas": 7,
    "insuficiencias": {
      "Biologia": 4,
      "Com Visual": 7,
      "Ed Fisica": 0,
      "Ed Musical": 3,
      "Ciudadana": 2,
      "Geografia": 3,
      "Historia": 6,
      "Id Esp": 5,
      "Ingles": 1,
      "Matematicas": 7,
      "Informática": 0,
      "Cs. Fis/Quim": 9
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 6, "moderado": 0, "critico": 1 },
      "entre1y3":   { "regular": 0, "moderado": 0, "critico": 5 },
      "cuatroOMas": { "regular": 0, "moderado": 2, "critico": 5 }
    }
  },
  {
    "name": "8°7",
    "sinBajas": 7,
    "entre1y3": 3,
    "cuatroOMas": 9,
    "insuficiencias": {
      "Biologia": 6,
      "Com Visual": 12,
      "Ed Fisica": 0,
      "Ed Musical": 9,
      "Ciudadana": 4,
      "Geografia": 6,
      "Historia": 2,
      "Id Esp": 7,
      "Ingles": 0,
      "Matematicas": 10,
      "Informática": 1,
      "Cs. Fis/Quim": 9
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 2, "moderado": 3, "critico": 2 },
      "entre1y3":   { "regular": 0, "moderado": 3, "critico": 0 },
      "cuatroOMas": { "regular": 0, "moderado": 3, "critico": 7 }
    }
  }
];
august8Groups.forEach(populateInasistencias);

// =============================================================================
// 3e. Datos Reales — 2° Reunión (Agosto) — 9° Año
// =============================================================================
var august9Groups = [
  {
    "name": "9°1",
    "sinBajas": 7,
    "entre1y3": 11,
    "cuatroOMas": 6,
    "insuficiencias": {
      "Biologia": 2,
      "Com Visual": 1,
      "Ed Fisica": 1,
      "Ed Musical": 0,
      "Ciudadana": 0,
      "Fisica": 8,
      "Geografia": 4,
      "Historia": 1,
      "Id Español": 3,
      "Ingles": 2,
      "Literatura": 17,
      "Matemática": 5,
      "Quimica": 5,
      "Informatica": 9
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 2, "moderado": 3, "critico": 2 },
      "entre1y3":   { "regular": 2, "moderado": 7, "critico": 2 },
      "cuatroOMas": { "regular": 3, "moderado": 0, "critico": 3 }
    }
  },
  {
    "name": "9°2",
    "sinBajas": 9,
    "entre1y3": 8,
    "cuatroOMas": 8,
    "insuficiencias": {
      "Biologia": 7,
      "Com Visual": 2,
      "Ed Fisica": 2,
      "Ed Musical": 3,
      "Ciudadana": 5,
      "Fisica": 7,
      "Geografia": 6,
      "Historia": 3,
      "Id Español": 5,
      "Ingles": 4,
      "Literatura": 13,
      "Matemática": 5,
      "Quimica": 7,
      "Informatica": 12
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 3, "moderado": 3, "critico": 3 },
      "entre1y3":   { "regular": 0, "moderado": 5, "critico": 3 },
      "cuatroOMas": { "regular": 0, "moderado": 2, "critico": 6 }
    }
  },
  {
    "name": "9°3",
    "sinBajas": 13,
    "entre1y3": 4,
    "cuatroOMas": 9,
    "insuficiencias": {
      "Biologia": 7,
      "Com Visual": 0,
      "Ed Fisica": 2,
      "Ed Musical": 0,
      "Ciudadana": 5,
      "Fisica": 7,
      "Geografia": 7,
      "Historia": 3,
      "Id Español": 2,
      "Ingles": 2,
      "Literatura": 8,
      "Matemática": 8,
      "Quimica": 5,
      "Informatica": 9
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 4, "moderado": 4, "critico": 5 },
      "entre1y3":   { "regular": 0, "moderado": 1, "critico": 3 },
      "cuatroOMas": { "regular": 1, "moderado": 2, "critico": 6 }
    }
  },
  {
    "name": "9°4",
    "sinBajas": 8,
    "entre1y3": 8,
    "cuatroOMas": 7,
    "insuficiencias": {
      "Biologia": 6,
      "Com Visual": 1,
      "Ed Fisica": 0,
      "Ed Musical": 0,
      "Ciudadana": 1,
      "Fisica": 7,
      "Geografia": 0,
      "Historia": 1,
      "Id Español": 7,
      "Ingles": 1,
      "Literatura": 10,
      "Matemática": 6,
      "Quimica": 3,
      "Informatica": 5
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 5, "moderado": 2, "critico": 1 },
      "entre1y3":   { "regular": 4, "moderado": 1, "critico": 3 },
      "cuatroOMas": { "regular": 0, "moderado": 0, "critico": 7 }
    }
  },
  {
    "name": "9°5",
    "sinBajas": 10,
    "entre1y3": 4,
    "cuatroOMas": 8,
    "insuficiencias": {
      "Biologia": 2,
      "Com Visual": 2,
      "Ed Fisica": 6,
      "Ed Musical": 0,
      "Ciudadana": 6,
      "Fisica": 8,
      "Geografia": 3,
      "Historia": 1,
      "Id Español": 6,
      "Ingles": 1,
      "Literatura": 5,
      "Matemática": 6,
      "Quimica": 5,
      "Informatica": 7
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 2, "moderado": 5, "critico": 6 },
      "entre1y3":   { "regular": 0, "moderado": 0, "critico": 3 },
      "cuatroOMas": { "regular": 0, "moderado": 0, "critico": 6 }
    }
  },
  {
    "name": "9°6",
    "sinBajas": 4,
    "entre1y3": 1,
    "cuatroOMas": 16,
    "insuficiencias": {
      "Biologia": 15,
      "Com Visual": 2,
      "Ed Fisica": 8,
      "Ed Musical": 6,
      "Ciudadana": 12,
      "Fisica": 10,
      "Geografia": 8,
      "Historia": 12,
      "Id Español": 14,
      "Ingles": 1,
      "Literatura": 10,
      "Matemática": 14,
      "Quimica": 12,
      "Informatica": 12
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 0, "moderado": 0, "critico": 4 },
      "entre1y3":   { "regular": 0, "moderado": 0, "critico": 2 },
      "cuatroOMas": { "regular": 1, "moderado": 4, "critico": 10 }
    }
  },
  {
    "name": "9°7",
    "sinBajas": 6,
    "entre1y3": 3,
    "cuatroOMas": 12,
    "insuficiencias": {
      "Biologia": 5,
      "Com Visual": 0,
      "Ed Fisica": 8,
      "Ed Musical": 2,
      "Ciudadana": 4,
      "Fisica": 9,
      "Geografia": 1,
      "Historia": 5,
      "Id Español": 13,
      "Ingles": 0,
      "Literatura": 3,
      "Matemática": 1,
      "Quimica": 6,
      "Informatica": 8
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 2, "moderado": 3, "critico": 2 },
      "entre1y3":   { "regular": 0, "moderado": 0, "critico": 2 },
      "cuatroOMas": { "regular": 0, "moderado": 1, "critico": 11 }
    }
  }
];
august9Groups.forEach(populateInasistencias);

// =============================================================================
// 3f. Datos Reales — 2° Reunión (Agosto) — 1° EMS
// =============================================================================
var augustEmsGroups = [
  {
    "name": "1°EMS 1",
    "sinBajas": 9,
    "entre1y3": 9,
    "cuatroOMas": 4,
    "insuficiencias": {
      "Atronomia": 0,
      "Biologia": 1,
      "Com. Visual": 3,
      "Deporte y Rec": 0,
      "Ed Fisica": 0,
      "Ed Musical": 0,
      "Part Juvenil": 0,
      "Filosofia": 2,
      "Arg y debate": 0,
      "Fisica": 3,
      "Geografia": 0,
      "Historia": 3,
      "Patrimonio": 0,
      "Ingles": 4,
      "Literatura": 11,
      "Matemáticas": 9,
      "Quimica": 6
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 2, "moderado": 4, "critico": 3 },
      "entre1y3":   { "regular": 0, "moderado": 4, "critico": 5 },
      "cuatroOMas": { "regular": 1, "moderado": 0, "critico": 3 }
    }
  },
  {
    "name": "1° EMS 2",
    "sinBajas": 13,
    "entre1y3": 6,
    "cuatroOMas": 1,
    "insuficiencias": {
      "Atronomia": 1,
      "Biologia": 2,
      "Com. Visual": 4,
      "Deporte y Rec": 0,
      "Ed Fisica": 0,
      "Ed Musical": 0,
      "Part Juvenil": 0,
      "Filosofia": 5,
      "Arg y debate": 0,
      "Fisica": 8,
      "Geografia": 0,
      "Historia": 4,
      "Patrimonio": 0,
      "Ingles": 4,
      "Literatura": 6,
      "Matemáticas": 10,
      "Quimica": 5
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 5, "moderado": 3, "critico": 5 },
      "entre1y3":   { "regular": 1, "moderado": 1, "critico": 4 },
      "cuatroOMas": { "regular": 0, "moderado": 0, "critico": 1 }
    }
  },
  {
    "name": "1°EMS 3",
    "sinBajas": 14,
    "entre1y3": 5,
    "cuatroOMas": 4,
    "insuficiencias": {
      "Atronomia": 1,
      "Biologia": 2,
      "Com. Visual": 4,
      "Deporte y Rec": 0,
      "Ed Fisica": 0,
      "Ed Musical": 0,
      "Part Juvenil": 0,
      "Filosofia": 5,
      "Arg y debate": 0,
      "Fisica": 7,
      "Geografia": 0,
      "Historia": 4,
      "Patrimonio": 0,
      "Ingles": 3,
      "Literatura": 8,
      "Matemáticas": 9,
      "Quimica": 5
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 0, "moderado": 4, "critico": 10 },
      "entre1y3":   { "regular": 0, "moderado": 1, "critico": 4 },
      "cuatroOMas": { "regular": 0, "moderado": 0, "critico": 4 }
    }
  },
  {
    "name": "1°EMS 4",
    "sinBajas": 15,
    "entre1y3": 3,
    "cuatroOMas": 1,
    "insuficiencias": {
      "Atronomia": 1,
      "Biologia": 3,
      "Com. Visual": 2,
      "Deporte y Rec": 0,
      "Ed Fisica": 0,
      "Ed Musical": 0,
      "Part Juvenil": 0,
      "Filosofia": 0,
      "Arg y debate": 0,
      "Fisica": 3,
      "Geografia": 0,
      "Historia": 2,
      "Patrimonio": 0,
      "Ingles": 1,
      "Literatura": 2,
      "Matemáticas": 6,
      "Quimica": 2
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 7, "moderado": 7, "critico": 1 },
      "entre1y3":   { "regular": 0, "moderado": 3, "critico": 0 },
      "cuatroOMas": { "regular": 0, "moderado": 0, "critico": 1 }
    }
  },
  {
    "name": "1°EMS 5",
    "sinBajas": 7,
    "entre1y3": 9,
    "cuatroOMas": 5,
    "insuficiencias": {
      "Atronomia": 5,
      "Biologia": 7,
      "Com. Visual": 4,
      "Deporte y Rec": 0,
      "Ed Fisica": 6,
      "Ed Musical": 0,
      "Part Juvenil": 1,
      "Filosofia": 6,
      "Arg y debate": 0,
      "Fisica": 10,
      "Geografia": 0,
      "Historia": 5,
      "Patrimonio": 0,
      "Ingles": 6,
      "Literatura": 6,
      "Matemáticas": 8,
      "Quimica": 14
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 2, "moderado": 4, "critico": 1 },
      "entre1y3":   { "regular": 0, "moderado": 4, "critico": 5 },
      "cuatroOMas": { "regular": 0, "moderado": 0, "critico": 5 }
    }
  },
  {
    "name": "1°EMS 6",
    "sinBajas": 9,
    "entre1y3": 6,
    "cuatroOMas": 4,
    "insuficiencias": {
      "Atronomia": 3,
      "Biologia": 10,
      "Com. Visual": 4,
      "Deporte y Rec": 0,
      "Ed Fisica": 7,
      "Ed Musical": 0,
      "Part Juvenil": 3,
      "Filosofia": 3,
      "Arg y debate": 0,
      "Fisica": 10,
      "Geografia": 0,
      "Historia": 8,
      "Patrimonio": 0,
      "Ingles": 7,
      "Literatura": 8,
      "Matemáticas": 12,
      "Quimica": 17
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 5, "moderado": 1, "critico": 3 },
      "entre1y3":   { "regular": 1, "moderado": 2, "critico": 3 },
      "cuatroOMas": { "regular": 0, "moderado": 0, "critico": 4 }
    }
  }
];

// Inicializar inasistencias (distribucionInasistencias) para los grupos de agosto EMS.
// Los grupos con datos reales ya los tienen definidos; el resto usará el fallback estimado.
augustEmsGroups.forEach(populateInasistencias);

// =============================================================================
// 3g. Datos Reales — 3° Reunión (Octubre) — 7° Año (Turno Matutino y Vespertino)
// =============================================================================
var october7Groups = [
  {
    "name": "7°1",
    "sinBajas": 21,
    "entre1y3": 2,
    "cuatroOMas": 2,
    "insuficiencias": {
      "Biologia": 2,
      "Com Visual": 4,
      "Ed Fisica": 0,
      "Ed Musical": 1,
      "Geografia": 1,
      "Historia": 1,
      "Id Esp": 2,
      "Ingles": 1,
      "Matematicas": 1,
      "Informática": 3,
      "Cs. Fis/Quim": 1
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 17, "moderado": 3, "critico": 1 },
      "entre1y3":   { "regular": 0,  "moderado": 1, "critico": 1 },
      "cuatroOMas": { "regular": 0,  "moderado": 0, "critico": 2 }
    }
  },
  {
    "name": "7°2",
    "sinBajas": 10,
    "entre1y3": 6,
    "cuatroOMas": 6,
    "insuficiencias": {
      "Biologia": 0,
      "Com Visual": 7,
      "Ed Fisica": 0,
      "Ed Musical": 3,
      "Geografia": 7,
      "Historia": 7,
      "Id Esp": 7,
      "Ingles": 5,
      "Matematicas": 0,
      "Informática": 7,
      "Cs. Fis/Quim": 1
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 8, "moderado": 2, "critico": 0 },
      "entre1y3":   { "regular": 3, "moderado": 2, "critico": 1 },
      "cuatroOMas": { "regular": 0, "moderado": 1, "critico": 5 }
    }
  },
  {
    "name": "7°3",
    "sinBajas": 13,
    "entre1y3": 8,
    "cuatroOMas": 2,
    "insuficiencias": {
      "Biologia": 0,
      "Com Visual": 5,
      "Ed Fisica": 2,
      "Ed Musical": 1,
      "Geografia": 1,
      "Historia": 1,
      "Id Esp": 2,
      "Ingles": 4,
      "Matematicas": 2,
      "Informática": 6,
      "Cs. Fis/Quim": 1
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 10, "moderado": 2, "critico": 1 },
      "entre1y3":   { "regular": 4,  "moderado": 2, "critico": 2 },
      "cuatroOMas": { "regular": 0,  "moderado": 0, "critico": 2 }
    }
  },
  {
    "name": "7°4",
    "sinBajas": 19,
    "entre1y3": 3,
    "cuatroOMas": 4,
    "insuficiencias": {
      "Biologia": 3,
      "Com Visual": 6,
      "Ed Fisica": 1,
      "Ed Musical": 0,
      "Geografia": 5,
      "Historia": 5,
      "Id Esp": 3,
      "Ingles": 4,
      "Matematicas": 0,
      "Informática": 0,
      "Cs. Fis/Quim": 0
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 15, "moderado": 3, "critico": 1 },
      "entre1y3":   { "regular": 1,  "moderado": 1, "critico": 1 },
      "cuatroOMas": { "regular": 0,  "moderado": 1, "critico": 3 }
    }
  },
  {
    "name": "7°5",
    "sinBajas": 11,
    "entre1y3": 8,
    "cuatroOMas": 5,
    "insuficiencias": {
      "Biologia": 6,
      "Com Visual": 11,
      "Ed Fisica": 0,
      "Ed Musical": 4,
      "Geografia": 4,
      "Historia": 4,
      "Id Esp": 4,
      "Ingles": 7,
      "Matematicas": 6,
      "Informática": 8,
      "Cs. Fis/Quim": 2
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 9, "moderado": 2, "critico": 0 },
      "entre1y3":   { "regular": 4, "moderado": 2, "critico": 2 },
      "cuatroOMas": { "regular": 0, "moderado": 1, "critico": 4 }
    }
  },
  {
    "name": "7°6",
    "sinBajas": 12,
    "entre1y3": 6,
    "cuatroOMas": 6,
    "insuficiencias": {
      "Biologia": 5,
      "Com Visual": 9,
      "Ed Fisica": 0,
      "Ed Musical": 2,
      "Geografia": 4,
      "Historia": 4,
      "Id Esp": 5,
      "Ingles": 4,
      "Matematicas": 7,
      "Informática": 4,
      "Cs. Fis/Quim": 3
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 10, "moderado": 2, "critico": 0 },
      "entre1y3":   { "regular": 3,  "moderado": 2, "critico": 1 },
      "cuatroOMas": { "regular": 0,  "moderado": 1, "critico": 5 }
    }
  },
  {
    "name": "7°7",
    "sinBajas": 17,
    "entre1y3": 2,
    "cuatroOMas": 5,
    "insuficiencias": {
      "Biologia": 5,
      "Com Visual": 4,
      "Ed Fisica": 4,
      "Ed Musical": 3,
      "Geografia": 5,
      "Historia": 5,
      "Id Esp": 5,
      "Ingles": 5,
      "Matematicas": 3,
      "Informática": 0,
      "Cs. Fis/Quim": 3
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 13, "moderado": 3, "critico": 1 },
      "entre1y3":   { "regular": 0,  "moderado": 1, "critico": 1 },
      "cuatroOMas": { "regular": 0,  "moderado": 1, "critico": 4 }
    }
  }
];
october7Groups.forEach(populateInasistencias);

// =============================================================================
// 3h. Datos Reales — 3° Reunión (Octubre) — 8° Año (Turno Matutino y Vespertino)
// =============================================================================
var october8Groups = [
  {
    "name": "8°1",
    "sinBajas": 19,
    "entre1y3": 0,
    "cuatroOMas": 4,
    "insuficiencias": {
      "Biologia": 2,
      "Com Visual": 1,
      "Ed Fisica": 0,
      "Ed Musical": 4,
      "Ciudadana": 2,
      "Geografia": 4,
      "Historia": 2,
      "Id Esp": 2,
      "Ingles": 4,
      "Matematicas": 3,
      "Informática": 4,
      "Cs. Fis/Quim": 3
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 15, "moderado": 3, "critico": 1 },
      "entre1y3":   { "regular": 0,  "moderado": 0, "critico": 0 },
      "cuatroOMas": { "regular": 0,  "moderado": 1, "critico": 3 }
    }
  },
  {
    "name": "8°2",
    "sinBajas": 13,
    "entre1y3": 4,
    "cuatroOMas": 6,
    "insuficiencias": {
      "Biologia": 6,
      "Com Visual": 3,
      "Ed Fisica": 1,
      "Ed Musical": 4,
      "Ciudadana": 3,
      "Geografia": 5,
      "Historia": 4,
      "Id Esp": 6,
      "Ingles": 6,
      "Matematicas": 6,
      "Informática": 5,
      "Cs. Fis/Quim": 7
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 10, "moderado": 2, "critico": 1 },
      "entre1y3":   { "regular": 2,  "moderado": 1, "critico": 1 },
      "cuatroOMas": { "regular": 0,  "moderado": 1, "critico": 5 }
    }
  },
  {
    "name": "8°3",
    "sinBajas": 10,
    "entre1y3": 7,
    "cuatroOMas": 6,
    "insuficiencias": {
      "Biologia": 7,
      "Com Visual": 5,
      "Ed Fisica": 3,
      "Ed Musical": 3,
      "Ciudadana": 3,
      "Geografia": 4,
      "Historia": 2,
      "Id Esp": 9,
      "Ingles": 6,
      "Matematicas": 7,
      "Informática": 0,
      "Cs. Fis/Quim": 7
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 8, "moderado": 2, "critico": 0 },
      "entre1y3":   { "regular": 4, "moderado": 2, "critico": 1 },
      "cuatroOMas": { "regular": 0, "moderado": 1, "critico": 5 }
    }
  },
  {
    "name": "8°4",
    "sinBajas": 12,
    "entre1y3": 4,
    "cuatroOMas": 6,
    "insuficiencias": {
      "Biologia": 5,
      "Com Visual": 8,
      "Ed Fisica": 3,
      "Ed Musical": 4,
      "Ciudadana": 2,
      "Geografia": 2,
      "Historia": 4,
      "Id Esp": 8,
      "Ingles": 8,
      "Matematicas": 6,
      "Informática": 3,
      "Cs. Fis/Quim": 3
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 10, "moderado": 2, "critico": 0 },
      "entre1y3":   { "regular": 2,  "moderado": 1, "critico": 1 },
      "cuatroOMas": { "regular": 0,  "moderado": 1, "critico": 5 }
    }
  },
  {
    "name": "8°5",
    "sinBajas": 6,
    "entre1y3": 8,
    "cuatroOMas": 7,
    "insuficiencias": {
      "Biologia": 8,
      "Com Visual": 5,
      "Ed Fisica": 5,
      "Ed Musical": 3,
      "Ciudadana": 3,
      "Geografia": 3,
      "Historia": 4,
      "Id Esp": 7,
      "Ingles": 8,
      "Matematicas": 12,
      "Informática": 2,
      "Cs. Fis/Quim": 6
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 5, "moderado": 1, "critico": 0 },
      "entre1y3":   { "regular": 4, "moderado": 2, "critico": 2 },
      "cuatroOMas": { "regular": 0, "moderado": 1, "critico": 6 }
    }
  },
  {
    "name": "8°6",
    "sinBajas": 7,
    "entre1y3": 10,
    "cuatroOMas": 1,
    "insuficiencias": {
      "Biologia": 4,
      "Com Visual": 2,
      "Ed Fisica": 0,
      "Ed Musical": 0,
      "Ciudadana": 0,
      "Geografia": 0,
      "Historia": 1,
      "Id Esp": 1,
      "Ingles": 0,
      "Matematicas": 6,
      "Informática": 0,
      "Cs. Fis/Quim": 6
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 6, "moderado": 1, "critico": 0 },
      "entre1y3":   { "regular": 5, "moderado": 3, "critico": 2 },
      "cuatroOMas": { "regular": 0, "moderado": 0, "critico": 1 }
    }
  },
  {
    "name": "8°7",
    "sinBajas": 8,
    "entre1y3": 4,
    "cuatroOMas": 6,
    "insuficiencias": {
      "Biologia": 5,
      "Com Visual": 10,
      "Ed Fisica": 0,
      "Ed Musical": 3,
      "Ciudadana": 1,
      "Geografia": 4,
      "Historia": 3,
      "Id Esp": 6,
      "Ingles": 0,
      "Matematicas": 9,
      "Informática": 0,
      "Cs. Fis/Quim": 7
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 7, "moderado": 1, "critico": 0 },
      "entre1y3":   { "regular": 2, "moderado": 1, "critico": 1 },
      "cuatroOMas": { "regular": 0, "moderado": 1, "critico": 5 }
    }
  }
];
october8Groups.forEach(populateInasistencias);

// =============================================================================
// 3i. Datos Reales — 3° Reunión (Octubre) — 9° Año (Turno Matutino y Vespertino)
// =============================================================================
var october9Groups = [
  {
    "name": "9°1",
    "sinBajas": 10,
    "entre1y3": 11,
    "cuatroOMas": 3,
    "insuficiencias": {
      "Biologia": 3,
      "Com Visual": 3,
      "Ed Fisica": 0,
      "Ed Musical": 0,
      "Ciudadana": 0,
      "Fisica": 5,
      "Geografia": 0,
      "Historia": 0,
      "Id Español": 1,
      "Ingles": 2,
      "Literatura": 12,
      "Matemática": 3,
      "Quimica": 1,
      "Informatica": 5
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 8, "moderado": 2, "critico": 0 },
      "entre1y3":   { "regular": 6, "moderado": 3, "critico": 2 },
      "cuatroOMas": { "regular": 0, "moderado": 1, "critico": 2 }
    }
  },
  {
    "name": "9°2",
    "sinBajas": 16,
    "entre1y3": 4,
    "cuatroOMas": 5,
    "insuficiencias": {
      "Biologia": 4,
      "Com Visual": 2,
      "Ed Fisica": 2,
      "Ed Musical": 3,
      "Ciudadana": 3,
      "Fisica": 2,
      "Geografia": 3,
      "Historia": 3,
      "Id Español": 3,
      "Ingles": 5,
      "Literatura": 7,
      "Matemática": 5,
      "Quimica": 3,
      "Informatica": 4
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 13, "moderado": 2, "critico": 1 },
      "entre1y3":   { "regular": 2,  "moderado": 1, "critico": 1 },
      "cuatroOMas": { "regular": 0,  "moderado": 1, "critico": 4 }
    }
  },
  {
    "name": "9°3",
    "sinBajas": 11,
    "entre1y3": 10,
    "cuatroOMas": 5,
    "insuficiencias": {
      "Biologia": 6,
      "Com Visual": 2,
      "Ed Fisica": 2,
      "Ed Musical": 0,
      "Ciudadana": 3,
      "Fisica": 6,
      "Geografia": 3,
      "Historia": 3,
      "Id Español": 3,
      "Ingles": 1,
      "Literatura": 9,
      "Matemática": 8,
      "Quimica": 5,
      "Informatica": 4
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 9, "moderado": 2, "critico": 0 },
      "entre1y3":   { "regular": 5, "moderado": 3, "critico": 2 },
      "cuatroOMas": { "regular": 0, "moderado": 1, "critico": 4 }
    }
  },
  {
    "name": "9°5",
    "sinBajas": 10,
    "entre1y3": 7,
    "cuatroOMas": 5,
    "insuficiencias": {
      "Biologia": 2,
      "Com Visual": 6,
      "Ed Fisica": 6,
      "Ed Musical": 1,
      "Ciudadana": 6,
      "Fisica": 7,
      "Geografia": 3,
      "Historia": 2,
      "Id Español": 8,
      "Ingles": 1,
      "Literatura": 5,
      "Matemática": 3,
      "Quimica": 5,
      "Informatica": 6
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 8, "moderado": 2, "critico": 0 },
      "entre1y3":   { "regular": 4, "moderado": 2, "critico": 1 },
      "cuatroOMas": { "regular": 0, "moderado": 1, "critico": 4 }
    }
  },
  {
    "name": "9°6",
    "sinBajas": 3,
    "entre1y3": 7,
    "cuatroOMas": 11,
    "insuficiencias": {
      "Biologia": 9,
      "Com Visual": 6,
      "Ed Fisica": 10,
      "Ed Musical": 8,
      "Ciudadana": 7,
      "Fisica": 7,
      "Geografia": 8,
      "Historia": 10,
      "Id Español": 8,
      "Ingles": 2,
      "Literatura": 9,
      "Matemática": 13,
      "Quimica": 8,
      "Informatica": 8
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 3, "moderado": 0, "critico": 0 },
      "entre1y3":   { "regular": 4, "moderado": 2, "critico": 1 },
      "cuatroOMas": { "regular": 1, "moderado": 2, "critico": 8 }
    }
  },
  {
    "name": "9°7",
    "sinBajas": 7,
    "entre1y3": 9,
    "cuatroOMas": 5,
    "insuficiencias": {
      "Biologia": 4,
      "Com Visual": 2,
      "Ed Fisica": 9,
      "Ed Musical": 1,
      "Ciudadana": 2,
      "Fisica": 3,
      "Geografia": 2,
      "Historia": 3,
      "Id Español": 6,
      "Ingles": 0,
      "Literatura": 3,
      "Matemática": 8,
      "Quimica": 6,
      "Informatica": 2
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 6, "moderado": 1, "critico": 0 },
      "entre1y3":   { "regular": 4, "moderado": 3, "critico": 2 },
      "cuatroOMas": { "regular": 0, "moderado": 1, "critico": 4 }
    }
  }
];
october9Groups.forEach(populateInasistencias);

// =============================================================================
// 3j. Datos Reales — 3° Reunión (Octubre) — 1° EMS (Turno Matutino y Vespertino)
// =============================================================================
var octoberEmsGroups = [
  {
    "name": "1°EMS 1",
    "sinBajas": 17,
    "entre1y3": 6,
    "cuatroOMas": 5,
    "insuficiencias": {
      "Astronomia": 0,
      "Biologia": 1,
      "Com. Visual": 2,
      "Deporte y Rec": 0,
      "Ed Fisica": 0,
      "Ed Musical": 0,
      "Part Juvenil": 2,
      "Filosofia": 1,
      "Arg y debate": 0,
      "Fisica": 3,
      "Geografia": 0,
      "Historia": 0,
      "Patrimonio": 0,
      "Ingles": 4,
      "Literatura": 11,
      "Matemáticas": 6,
      "Quimica": 5
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 13, "moderado": 3, "critico": 1 },
      "entre1y3":   { "regular": 3,  "moderado": 2, "critico": 1 },
      "cuatroOMas": { "regular": 0,  "moderado": 1, "critico": 4 }
    }
  },
  {
    "name": "1° EMS 2",
    "sinBajas": 26,
    "entre1y3": 4,
    "cuatroOMas": 5,
    "insuficiencias": {
      "Astronomia": 2,
      "Biologia": 4,
      "Com. Visual": 5,
      "Deporte y Rec": 1,
      "Ed Fisica": 0,
      "Ed Musical": 0,
      "Part Juvenil": 0,
      "Filosofia": 4,
      "Arg y debate": 0,
      "Fisica": 7,
      "Geografia": 0,
      "Historia": 3,
      "Patrimonio": 0,
      "Ingles": 1,
      "Literatura": 6,
      "Matemáticas": 6,
      "Quimica": 5
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 21, "moderado": 4, "critico": 1 },
      "entre1y3":   { "regular": 2,  "moderado": 1, "critico": 1 },
      "cuatroOMas": { "regular": 0,  "moderado": 1, "critico": 4 }
    }
  },
  {
    "name": "1°EMS 3",
    "sinBajas": 30,
    "entre1y3": 5,
    "cuatroOMas": 6,
    "insuficiencias": {
      "Astronomia": 1,
      "Biologia": 3,
      "Com. Visual": 5,
      "Deporte y Rec": 1,
      "Ed Fisica": 0,
      "Ed Musical": 0,
      "Part Juvenil": 3,
      "Filosofia": 4,
      "Arg y debate": 0,
      "Fisica": 6,
      "Geografia": 0,
      "Historia": 2,
      "Patrimonio": 0,
      "Ingles": 0,
      "Literatura": 7,
      "Matemáticas": 7,
      "Quimica": 5
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 24, "moderado": 5, "critico": 1 },
      "entre1y3":   { "regular": 2,  "moderado": 2, "critico": 1 },
      "cuatroOMas": { "regular": 0,  "moderado": 1, "critico": 5 }
    }
  },
  {
    "name": "1°EMS 4",
    "sinBajas": 24,
    "entre1y3": 4,
    "cuatroOMas": 3,
    "insuficiencias": {
      "Astronomia": 1,
      "Biologia": 4,
      "Com. Visual": 1,
      "Deporte y Rec": 0,
      "Ed Fisica": 2,
      "Ed Musical": 0,
      "Part Juvenil": 1,
      "Filosofia": 2,
      "Arg y debate": 0,
      "Fisica": 3,
      "Geografia": 0,
      "Historia": 2,
      "Patrimonio": 0,
      "Ingles": 0,
      "Literatura": 2,
      "Matemáticas": 6,
      "Quimica": 4
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 19, "moderado": 4, "critico": 1 },
      "entre1y3":   { "regular": 2,  "moderado": 1, "critico": 1 },
      "cuatroOMas": { "regular": 0,  "moderado": 1, "critico": 2 }
    }
  },
  {
    "name": "1°EMS 5",
    "sinBajas": 11,
    "entre1y3": 6,
    "cuatroOMas": 9,
    "insuficiencias": {
      "Astronomia": 2,
      "Biologia": 5,
      "Com. Visual": 2,
      "Deporte y Rec": 0,
      "Ed Fisica": 6,
      "Ed Musical": 0,
      "Part Juvenil": 0,
      "Filosofia": 6,
      "Arg y debate": 0,
      "Fisica": 8,
      "Geografia": 0,
      "Historia": 5,
      "Patrimonio": 0,
      "Ingles": 2,
      "Literatura": 7,
      "Matemáticas": 9,
      "Quimica": 15
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 9, "moderado": 2, "critico": 0 },
      "entre1y3":   { "regular": 3, "moderado": 2, "critico": 1 },
      "cuatroOMas": { "regular": 1, "moderado": 2, "critico": 6 }
    }
  },
  {
    "name": "1°EMS 6",
    "sinBajas": 23,
    "entre1y3": 9,
    "cuatroOMas": 9,
    "insuficiencias": {
      "Astronomia": 2,
      "Biologia": 6,
      "Com. Visual": 2,
      "Deporte y Rec": 0,
      "Ed Fisica": 8,
      "Ed Musical": 0,
      "Part Juvenil": 2,
      "Filosofia": 3,
      "Arg y debate": 0,
      "Fisica": 8,
      "Geografia": 0,
      "Historia": 7,
      "Patrimonio": 0,
      "Ingles": 2,
      "Literatura": 7,
      "Matemáticas": 12,
      "Quimica": 16
    },
    "distribucionInasistencias": {
      "sinBajas":   { "regular": 19, "moderado": 3, "critico": 1 },
      "entre1y3":   { "regular": 4,  "moderado": 3, "critico": 2 },
      "cuatroOMas": { "regular": 1,  "moderado": 2, "critico": 6 }
    }
  }
];
octoberEmsGroups.forEach(populateInasistencias);

// =============================================================================
// 4. Estructura de Reuniones (meetingsData) — fuente de verdad del dashboard
// =============================================================================
var meetingsData = {
  "abril": {
    "title": "1° Reunión (Abril)",
    "badge": "Reuniones Docentes - Abril 2026",
    "subtitle": "Análisis interactivo local de desempeño académico escolar por grupo. Selecciona un grado escolar y elige un grupo específico para generar los gráficos.",
    "printSubtitle": "Reuniones de Evaluación Docente • Datos Recopilados en Abril 2026",
    "data": aprilData
  },
  "agosto": {
    "title": "2° Reunión (Agosto)",
    "badge": "Reuniones Docentes - Agosto 2026",
    "subtitle": "Seguimiento intermedio del desempeño académico y evolución de insuficiencias por grupo en el segundo período escolar.",
    "printSubtitle": "Reuniones de Evaluación Docente • Datos de Seguimiento de Agosto 2026",
    "data": (function() {
      var d = generateMockData(aprilData, 1.15, 0.8);
      d = mergeRealGroups(d, august7Groups,  "7");
      d = mergeRealGroups(d, august8Groups,  "8");
      d = mergeRealGroups(d, august9Groups,  "9");
      d = mergeRealGroups(d, augustEmsGroups, "EMS");
      return d;
    })()
  },
  "octubre": {
    "title": "3° Reunión (Octubre)",
    "badge": "Reuniones Docentes - Octubre 2026",
    "subtitle": "Evaluación pre-cierre. Monitoreo y diagnóstico de alumnos en situación crítica previo a los exámenes finales.",
    "printSubtitle": "Reuniones de Evaluación Docente • Datos de Pre-Cierre de Octubre 2026",
    "data": (function() {
      var d = generateMockData(aprilData, 1.25, 0.6);
      d = mergeRealGroups(d, october7Groups,  "7");
      d = mergeRealGroups(d, october8Groups,  "8");
      d = mergeRealGroups(d, october9Groups,  "9");
      d = mergeRealGroups(d, octoberEmsGroups, "EMS");
      return d;
    })()
  },
  "final": {
    "title": "4° Reunión Final",
    "badge": "Reuniones Docentes - Reunión Final 2026",
    "subtitle": "Cierre del ciclo lectivo. Resultados definitivos de aprobación, materias pendientes e índices de promoción general.",
    "printSubtitle": "Reuniones de Evaluación Docente • Resultados Anuales Finales 2026",
    "data": generateMockData(aprilData, 1.35, 0.4)
  }
};

// =============================================================================
// 5. Almacenamiento de Diagnósticos Personalizados por Pestaña y Reunión
// =============================================================================
var customInsights = {
  "abril":   { "7": "", "8": "", "9": "", "EMS": "" },
  "agosto":  { "7": "", "8": "", "9": "", "EMS": "" },
  "octubre": { "7": "", "8": "", "9": "", "EMS": "" },
  "final":   { "7": "", "8": "", "9": "", "EMS": "" }
};
