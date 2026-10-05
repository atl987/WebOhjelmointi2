// Define interfaces: - Circle: { kind: "circle"; radius: number } - Rectangle: { kind: "rectangle"; width: number; height: number } - Square: { kind: "square"; size: number }
interface Circle {
  kind: "circle";
  radius: number;
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}
interface Square {
  kind: "square";
  size: number;
}
// Create union type Shape = Circle | Rectangle | Square.
type Shape = Circle | Rectangle | Square;
// Implement a custom user-defined type guard isCircle(shape: Shape): shape is Circle that returns true if shape.kind === "circle".
function isCircle(shape: Shape) {
  if (shape.kind == "circle") {
    return true;
  }
  return false;
}
// Implement calculateArea(shape: Shape): number using a switch statement. In the default case, assign the shape to a never variable to guarantee exhaustiveness check at compile time.
function calculateArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius;
    case "rectangle":
      return shape.width * shape.height;
    case "square":
      return shape.size * shape.size;
    default:
      //only reach here if we add a new shape without remembering to handle it
      const unrecognized: never = shape;
      throw new Error(`Väärä muoto: ${unrecognized}`);
  }
}
let circle: Circle = { kind: "circle", radius: 1 };
let rectangle: Rectangle = { kind: "rectangle", width: 2, height: 3 };
let square: Square = { kind: "square", size: 3 };

console.log(isCircle(circle));
console.log(calculateArea(circle));

console.log(isCircle(rectangle));
console.log(calculateArea(rectangle));

console.log(isCircle(square));
console.log(calculateArea(square));
