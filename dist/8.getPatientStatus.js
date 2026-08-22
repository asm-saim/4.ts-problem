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
//# sourceMappingURL=8.getPatientStatus.js.map