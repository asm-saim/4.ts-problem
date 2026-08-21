"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const canEdit = (role) => {
    //   if (role === "admin" || role === "editor") {
    //     return true;
    //   }
    //   return false;
    return role === "admin" || role === "editor";
};
console.log(canEdit("editor"));
//# sourceMappingURL=6.canEdit.js.map