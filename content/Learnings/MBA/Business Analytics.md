---
title: Business Analytics 1
date:
  - 2024-12-12
tags:
  - MBA
---
## Types of Analytics:

- Prescriptive analytics: what should we do??
- predictive analytics: what could happen??
- descriptive analytics: what has happened??

Target variable:
The variable to be predicted is called target variable (dependent on independent).

Types of scales
- Nominal scale: categorical(no rank for the data) Gender.
- Ordinal scale: rank ordered (no fixed units of measurement).(beauty etc.) like, dislike etc.
- Interval: continuous data.(can have breaks between) can have negative
- Ratio: bounded data with upper and lower limits. (heights of  humans)
- Likert scale: 

![[Pasted image 20241219134246.png]]

- observations are placed in this table.
- variables/dimensions: supplier, order no, item no etc.




ACV laddering:
- attributes.
- consequences
- value

---

## CRISP DM model:

- Business understanding (parameter like churn status(customers), attrition(HR)).
- data understanding (understand the target var)
- data preparation (removing NAN'S etc.)
- modeling (machine learning models)
- evaluation 
- deployment

---

## RStudio basics:

1. How to change appearance:
- go to  Tools - global options - Appearance and change - apply.

```R
## Basics

# how to print a string in R
print("God is Great") 

# Some basic operations in R
5*6
1000/25
sqrt(42)

# Assigning a var in R
x=42
x
sum(2,3,4)

# Repeats the value of an input
rep(576,3)
rep("Mdelighted",3)

# Assigning a vector using C
z=c(10,5,3)
z

# A vector may be passed as an input in another vector.
pk=c(z,0.55,z)
pk
rep(pk,3)

# Sequences in R.
s=sequence(9,5,-0.5)
s

# some sort of listing and accessing all values in it.
learn=c("you","me","R")
learn
learn[2]
learn[1]

learn[4]="Python"
learn

learn[3]=learn[4]
learn[3]

# some operations with vector.
vector=c(1,2,3)
vector

vector+vector
vector+1
vector/2

```


