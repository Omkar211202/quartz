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


### Getting in touch:

```R
## Basics
# how to print a string in R
print("God is Great") 

```

```R
# Some basic operations in R
5*6
1000/25
sqrt(42)
```

```R
# Assigning a var in R
x=42
x

```
```R
# sum function
sum(2,3,4)

# Repeats the value of an input
rep(576,3)
rep("Mdelighted",3)
```

```R
## Working with Vectors 
##Assigning a vector using C
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

```R
# creating a matrix (data, rows, col)
x=matrix(1:8,4,2,byrow=TRUE) # puts data in row order
x

# creating matrix using cbind
cbind(c(1,2,3),c(4,5,6))

x=matrix(1:16,ncol=4)
x

# accessing elements, rows and col in a matrix.
s[2]
s[,2]
s[2,]
s[1,2]

# This will give the diagonal of the matrix
dim(m)

# Transpose of the matrix
t(m)

# Diagonal elements of the matrix
diag(m)

# Summary of the matrix
summary(m)

plot(m)

```


```R
# handling missing values
# summing elements in a vector by removing missing val.
m=c(1,2,3,NA,4)
sum(m,na.rm=TRUE)

```


### Functions in R

```R
cyl_vol=function(radius=1,height)
{radius^2*pi*height}

cyl_vol(height=10)

```

```R

```
### Handling datasets

```R
# using data sets in R 

 # importing a data set present in R.
data("longley")
longley

# finding the row names.
row.names(longley) 

# finding the col names.
names(longley) 

# shape of the data set
dim(longley)

# first 6 rows of the data set
head(longley) 

help("longley")

summary(longley)
str(longley)

# Accessing data from datasets and some manipulation.
data("starwars")
starwars

starwars%>% 
  count(starwars$sex)

starwars%>%
  arrange(desc(height))

```

```R
x=list(1,"a",TRUE,1+4i)
x

x=list(1,"a",he=tail(mtcars))
x

```

```R

```