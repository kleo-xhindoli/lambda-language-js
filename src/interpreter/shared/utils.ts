import { Operator } from "../../types";

export function apply_op(op: Operator, a: any, b: any): number | boolean {
  function num(x: any): number {
    if (typeof x != "number") throw new Error("Expected number but got " + x);
    return x;
  }
  function div(x: number): number {
    if (num(x) == 0) throw new Error("Divide by zero");
    return x;
  }

  switch (op) {
    case "+":
      return num(a) + num(b);
    case "-":
      return num(a) - num(b);
    case "*":
      return num(a) * num(b);
    case "/":
      return num(a) / div(b);
    case "%":
      return num(a) % div(b);
    case "&&":
      return a !== false && b;
    case "||":
      return a !== false ? a : b;
    case "<":
      return num(a) < num(b);
    case ">":
      return num(a) > num(b);
    case "<=":
      return num(a) <= num(b);
    case ">=":
      return num(a) >= num(b);
    case "==":
      return a === b;
    case "!=":
      return a !== b;
  }
  throw new Error("Can't apply operator " + op);
}
