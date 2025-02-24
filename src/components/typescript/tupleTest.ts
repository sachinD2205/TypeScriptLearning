export type User = { name: string; age: number; occupation: string };

// here we created tuple for array
export const users: Array<User> = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
];

export function logPerson(user: {
  name: string;
  age: number;
  occupation: string;
}) {
  console.log(` - ${user.name}, ${user.age}`);
}

console.log("Users:");
users.forEach(logPerson);
