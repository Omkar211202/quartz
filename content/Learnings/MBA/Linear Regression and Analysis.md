---
title: Linear Regression and Analysis
date:
  - 2024-40-29
tags:
  - Stats
---
## What's Linear Regression?
In life, we can be given situations where, we have a set of data, consisting of independent and dependent variables. We have to use them and construct a mechanism such that we should be able to input any variable into it and find the output.

Independent Variables: 
These variables are not affected in the equation by other variables. The changes in the independent variables affect the dependent variable.

Eg: Price of house (dependent) may affected by factors like no of rooms, location, date of construction etc. (Independent)

If a dependent variable is affected by only one variable: it may be fitted into the following model or equation:
$$
y_p=mx+c
$$
else it will be fit into equations like:
$$
y_p=\beta_0+\beta_1.X_1+\beta_2.X_2
$$
which will lie in an n dimensional space.

## Working on Excel:
In excel under the tab, data find data analysis and click on regression.
Input the data to get the results.

It  may be observed  that it gives you summary with plots etc.

## Aspects of analysis:

The summary gives coefficients to the analysis, like $\beta1$ etc. along with intercept. 
You can construct the equations like the above using this.

$R^2$ is called the coefficient of determination, this tells us how much of change in independent variable is affected by change in dependent variables.

Adjusted $R^2$ will tell us about choosing variables to be added into our model.
If addition of another variable improves the adjusted $R^2$ , that means that the variable is important for our process.

Residues are the differences of the predicted values with the original values given.

$t-stat$ will tell value of the thresholds wrt hypothesis testing. They may be used to determine whether a var is useful in the process or not.

F_Significance_level will tell us how strong the model, if minimal, very close to zero, our test is very strong.

$$
y_p=\beta_0+\beta_1.X_1+\beta_2.X_2
$$
Use this equation to find values for the other inputs.

---


