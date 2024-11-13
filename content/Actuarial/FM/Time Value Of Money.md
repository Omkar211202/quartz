---
title: Time of Value of Money
date:
  - 2024-10-27
tags:
  - FM
  - To_Do
---
## Amount Function:
### Interest rate:
$$
I(t) = A(t) - A(t-1)
$$
- where I(t) = interest obtained in the year t ;
- A(t) = amount of the investment in the year t ;
- A(t-1) = amount of the investment in the year t-1  ;

### Amount Function:
$$
A(t) = A(0).(1+i)^n
$$
- where A(t ) is the amount at time t;
- A(0) is the initial amount invested ;
- $i$ is the interest rate ;

## Effective Rate of Interest:
$$
i_t = \dfrac{A(t)-A(t-1)}{A(t-1)}
$$
- where  $i_t$ is the effective rate of interest ;
- A(t) = amount of the investment in the year t ;
- A(t-1) = amount of the investment in the year t-1  ;

## Present value:
The net present value is the value of the investments as on today;  its obtained by discounting the future value.

> [!question]
> What's discounting??
> 
> Discounting is the process of finding the current value from the future value by multiplying the future value with the discount factor; $v =\dfrac{1}{1+i}$ powered n times where n is number of terms.

## Effective rate of Discount:
$$
d_t = \dfrac{A(t)-A(t-1)}{A(t)}
$$
- where $d_t$ is the effective rate of discount ;
- A(t) = amount of the investment in the year t ;
- A(t-1) = amount of the investment in the year t-1  ;

Relationship between Interest rate and Discount rate:
We know that the amount function can be viewed as:

$$
A(t) = A(t-1).(1+i)\\
$$
$$
\begin{align*}
\tag{1}
\dfrac{A(t)}{A(t-1)} = (1+i)\\
\end{align*}
$$

also:
$$
d_t = \dfrac{A(t)-A(t-1)}{A(t)}
$$

$$
d_t = 1 - \dfrac{A(t-1)}{A(t)}
$$
$$
\begin{align*}
\tag{2}
\implies \dfrac{A(t-1)}{A(t)} = 1-d_t\\
\end{align*}
$$

from 1 & 2; we may conclude that:

$$
(1-d_t)=(1+i_t)^{-1}
$$
From this we can conclude:

$$
\begin{align*}
\tag{3}
A(t) &=A(0)(1+i)^n=A(0)(1-d)^{-n}\\
\tag{4}
v &= \dfrac{1}{1+i}=1-d\\
\tag{5}
d &=\dfrac{i}{1+i}
\end{align*}
$$

---
## Nominal rate of interest:

Lets say that interest rate is compounded m times in an year, the annual nominal rate of interest is nothing but m * j, where j is the interest for that period in the year.

k is the annual effective interest of the same amount that will equal the periodic compounding effect.

The formula:
$$
(1+j)^m=(1+\dfrac{i^{(m)}}{m})^m=(1+k)
$$

$i^{(m)}$ is nothing but the interest for the compounding period multiplied by m, the number of times it will compound in an year.


## Nominal rate of discount:

Lets say that discount rate is compounded m times in an year, the annual nominal rate of discount is nothing but m * j, where j is the discount rate for that period in the year.

k is the annual effective discount rate of the same amount that will equal the periodic compounding effect.

The formula:
$$
(1-j)^m=(1-\dfrac{i^{(m)}}{m})^m=(1-k)
$$

---
## Accumulation function:

We know the amount function:
$$
A(t) = A(0).(1+i)^t
$$
if $A(0)$=1; then

$a(t)=1.(1+i)^t$

is called the accumulation function.

---

> [!summary 1]
> The primary take away is the big equation that's:
> (The ALL IN ONE FORMULA)
> 
> $$
> (1+i)^t = (1-d)^{-t} = (1+\dfrac{i^{(m)}}{m})^t = (1-\dfrac{i^{(m)}}{m})^{-t}
> $$

 ---
 
## Constant force of Interest:
What if your interest is compounding constantly:

We know:
$$
(1+j)^m=(1+\dfrac{i^{(m)}}{m})\\
$$
from this:
$$
{i^{(m)}}= m[(1+i)^{\dfrac{1}{m}}-1]
$$

m is the number of periods that interest is compounding; let m $\rightarrow\infty$.
then:
$$
lim_{n\rightarrow\infty}i^{(m)}=lim_{n\rightarrow\infty} m[(1+i)^{\dfrac{1}{m}}-1]
$$
`see the derivation online possibly`
we end up getting: 

$i^{(\infty)}=ln(1+i)$, which is denoted $\delta$ = $i^{(\infty)}$, known as the constant force of interest.

Similar proof shows that $d^{(\infty)}=ln(1+i)$


`To Do:` derivation.
$a(t) = e^{\delta.t}$  
This is the accumulation at a constant force of interest.


> [!summary 2]
> The primary take away is the big equation that's:
> (The ALL IN ONE FORMULA)
> 
> $$
> a(t)=(1+i)^t = (1-d)^{-t} = (1+\dfrac{i^{(m)}}{m})^{mt} = (1-\dfrac{i^{(m)}}+{m})^{-mt}=e^{\delta.t}=v^{-t}
> $$

---

## Simple Interest:

Formula: $A(t)=A(0).(1+it)$
accumulation function = $a(t)=1.(1+it)$

> [!note]
> Simple interest beats compound interest when the time period is lesser than an 1 year.
> 
> For example: 100 at half year period at a annual interest of 10% is 104.88 at compound interest and 105 at simple interest.

---

## Variable Force of interest:
`To Do`



---

## Time Value of Money:
Money in hand today is more than that received tomorrow, its possible to earn interest on it.

Therefore, when having many cashflows across the time frame, its must we find the value of the flows with respect to a common point, thus we accumulate or discount it based on an interest rate.

Some terms:
- IRR: the current rate of interest rate at which all the cashflows will yield a zero present value.


Using BA-II plus makes the work easy for us to compare cashflows:
1. Do `CF` and then `2nd` and `Clr Work`
2. Enter the cashflows:
3. `CF0,1,2..` represent the cashflows, put + and -, opposite signs.
4. `F1,2,...` represent how many times this investments are made.
---









