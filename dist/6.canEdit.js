"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const canEdit = (role) => {
    if (role === "admin" || role === "editor") {
        return true;
    }
    return false;
};
console.log(canEdit("admin"));
//# sourceMappingURL=6.canEdit.js.map