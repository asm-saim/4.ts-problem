"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getPatientStatus = (patient) => {
    if (patient.type === "general") {
        return `General Patient`;
    }
    if (patient.emergencyLevel === 1) {
        return `Critical Emergency`;
    }
    else if (patient.emergencyLevel === 2) {
        return `Serious Emergency`;
    }
    return `Moderate Emergency`;
};
console.log(getPatientStatus({ name: "Rahim", age: 35, type: "general" }));
console.log(getPatientStatus({ name: "Karim", age: 60, type: "emergency", emergencyLevel: 1 }));
// "Critical emergency"
console.log(getPatientStatus({ name: "Hasan", age: 45, type: "emergency", emergencyLevel: 3 }));
// "Moderate emergency"
//# sourceMappingURL=8.getPatientStatus.js.map