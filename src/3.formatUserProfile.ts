interface User {
  name: string;
  age: number;
  city: string;
}

const formatUserProfile = (input: User): string => {
  return `${input.name} is ${input.age} years old and lives in ${input.city}`;
};
const input1 = formatUserProfile({
  name: "Fahim",
  age: 22,
  city: "Dhaka",
});

console.log(input1);
