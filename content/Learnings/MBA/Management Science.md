---
title: Management Science
date:
  - 2024-12-16
tags:
  - MBA
---
## What's Management science??
- the science of applying mathematics, statistics and technology in problem solving and decision making in the contest of businesses.

---
## Techniques:

### Linear Programming Problem:
- LPP is mathematical approach that is used to maximize or minimize a objective function, subject to some constraints.
- The first step is to identify the objective functions, constraints and put them in this format.

```latex
Max/Min: c1x1+c2x2+c3x3

subject to:
a11x1+a12x2+a13x3<=b1
a21x1+a22x2+a23x3<=b1
a31x1+a32x2+a33x3<=b1

```

Traditionally can be solved using a simplex method or a graphical method.

In excel, it can be solved using solver plugin (may need to add this plugin) in the data  tab,

1. Use `=SUMPRODUCT` to set the objective function into one cell.

2. Use `=SUMPRODUCT` to write the LHS of constraints in one column and the RHS (limits) of constraints in to the next column.

Apply solver,

3. Set the objective function to  the cell corresponding to  objective function.

4. Set the values to be changed to X1,X2,X3..., correspondingly.

5. Set the Constraints by adding the constraints.(explanatory in excel itself, follow it).

6. Solve it by setting method to `SimplexLP`.
7. Attach Answer, Sensitivity and limit report if necessary.
8. Problem solved!!!

---

