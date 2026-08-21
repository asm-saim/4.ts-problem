"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatUserProfile = (input) => {
    return `${input.name} is ${input.age} years old and lives in ${input.city}`;
};
const input1 = formatUserProfile({
    name: "Fahim",
    age: 22,
    city: "Dhaka",
});
console.log(input1);
//# sourceMappingURL=3.formatUserProfile.js.map