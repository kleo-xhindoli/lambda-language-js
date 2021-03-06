import { exec } from "../interpreter";

const program = `
  cons = λ(a, b) λ(f) f(a, b);
  car = λ(cell) cell(λ(a, b) a);
  cdr = λ(cell) cell(λ(a, b) b);
  NIL = λ(f) f(NIL, NIL);

  x = cons(1, cons(2, cons(3, cons(4, cons(5, NIL)))));
  println(car(x));                      # 1
  println(car(cdr(x)));                 # 2
  println(car(cdr(cdr(x))));            # 3
  println(car(cdr(cdr(cdr(x)))));       # 4
  println(car(cdr(cdr(cdr(cdr(x))))));  # 5
`;

exec(program);
