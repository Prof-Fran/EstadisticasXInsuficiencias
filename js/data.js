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
        "sinBajas": 19,
        "entre1y3": 9,
        "cuatroOMas": 7,
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
        "sinBajas": 20,
        "entre1y3": 13,
        "cuatroOMas": 8,
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
        "sinBajas": 21,
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
        "sinBajas": 10,
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
        "sinBajas": 17,
        "entre1y3": 10,
        "cuatroOMas": 14,
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
      "sinBajas":   { "regular": 12, "moderado": 1, "critico": 0 },
      "entre1y3":   { "regular": 6,  "moderado": 1, "critico": 0 },
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

  // ===========================================================================
  // DATOS REALES — 8° AÑO (Reunión de Abril)
  // ===========================================================================

  // 8°5
  if (group.name === "8°5") {
    group.distribucionInasistencias = {
      "sinBajas":   { "regular": 1, "moderado": 1, "critico": 1 },
      "entre1y3":   { "regular": 2, "moderado": 7, "critico": 1 },
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
      "sinBajas":   { "regular": 3, "moderado": 2, "critico": 1 },
      "entre1y3":   { "regular": 3, "moderado": 2, "critico": 0 },
      "cuatroOMas": { "regular": 1, "moderado": 0, "critico": 7 }
    };
    return;
  }

  // ===========================================================================
  // DATOS REALES — 9° AÑO (Reunión de Abril)
  // ===========================================================================

  // 9°1
  if (group.name === "9°1") {
    group.distribucionInasistencias = {
      "sinBajas":   { "regular": 3, "moderado": 0, "critico": 0 },
      "entre1y3":   { "regular": 8, "moderado": 2, "critico": 0 },
      "cuatroOMas": { "regular": 4, "moderado": 6, "critico": 1 }
    };
    return;
  }

  // 9°2
  if (group.name === "9°2") {
    group.distribucionInasistencias = {
      "sinBajas":   { "regular": 5, "moderado": 1, "critico": 0 },
      "entre1y3":   { "regular": 9, "moderado": 2, "critico": 0 },
      "cuatroOMas": { "regular": 2, "moderado": 3, "critico": 2 }
    };
    return;
  }

  // 9°3
  if (group.name === "9°3") {
    group.distribucionInasistencias = {
      "sinBajas":   { "regular": 7, "moderado": 0, "critico": 0 },
      "entre1y3":   { "regular": 4, "moderado": 3, "critico": 0 },
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
    "data": generateMockData(aprilData, 1.15, 0.8)
  },
  "octubre": {
    "title": "3° Reunión (Octubre)",
    "badge": "Reuniones Docentes - Octubre 2026",
    "subtitle": "Evaluación pre-cierre. Monitoreo y diagnóstico de alumnos en situación crítica previo a los exámenes finales.",
    "printSubtitle": "Reuniones de Evaluación Docente • Datos de Pre-Cierre de Octubre 2026",
    "data": generateMockData(aprilData, 1.25, 0.6)
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
