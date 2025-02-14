const name="Anbuselvan"
console.log(name)

let a = 10, b = 3;

console.log(a + b); // Addition → 13
console.log(a - b); // Subtraction → 7
console.log(a * b); // Multiplication → 30
console.log(a / b); // Division → 3.3333
console.log(a % b); // Modulus (Remainder) → 1
console.log(a ** b); // Exponentiation (a^b) → 1000

let x = 5;
x += 3;  // Equivalent to x = x + 3 → x = 8
x -= 2;  // x = x - 2 → x = 6
x *= 2;  // x = x * 2 → x = 12
x /= 3;  // x = x / 3 → x = 4
x %= 3;  // x = x % 3 → x = 1

console.log(5 == "5");   // true (Checks only value)
console.log(5 === "5");  // false (Checks value & type)
console.log(5 != "5");   // false
console.log(5 !== "5");  // true
console.log(10 > 5);     // true
console.log(10 < 5);     // false
console.log(10 >= 10);   // true
console.log(10 <= 9);    // false

console.log(5 & 1);  // AND → 5 (101) & 1 (001) = 1
console.log(5 | 1);  // OR  → 5 (101) | 1 (001) = 5
console.log(5 ^ 1);  // XOR → 5 (101) ^ 1 (001) = 4

console.log(~5);     // NOT → ~5 = -6
console.log(5 << 1); // Left Shift (Multiply by 2) → 10
console.log(5 >> 1); // Right Shift (Divide by 2) → 2
console.log(-5 >>> 1); // Zero-fill Right Shift → Large Positive Number

console.log(true && false); // false (AND)
console.log(true || false); // true (OR)
console.log(!true);         // false (NOT)


let person = {
    name: "John",
    age: 30
  };
  
  console.log(person.name);  // Access property → "John"
  console.log(person.age);   // Access property → 30
 
  for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
  }
  
  let count = 1;
while (count <= 5) {
  console.log("Count:", count);
  count++;
}


let num = 1;
do {
  console.log("Number:", num);
  num++;
} while (num <= 5);


let fruits = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) {
  console.log(fruit);
}


let person1 = { name: "Alice", age: 25, city: "New York" };
for (let key in person1) {
  console.log(key + ":", person1[key]);
}
