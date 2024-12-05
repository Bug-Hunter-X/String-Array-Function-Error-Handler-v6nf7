function greeter(person: string): string {
  return `Hello, ${person}!`;
}

let users = ["Jane Doe", "John Smith"];

for (const user of users) {
  console.log(greeter(user)); // Correctly handles each string in the array
}

//Alternative solution using map
users.map(user => console.log(greeter(user)));