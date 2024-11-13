---
title: Annuities
date:
  - 2024-10-28
tags:
  - FM
  - To_Do
---
## What are Annuities?
Annuities are payments made at regular intervals by you or someone else to you, because you should return lumpsum at the end or you paid lumpsum in the beginning respectively.


There are 2 types of annuities;
1. Level Annuities. Annuities that have same payments across time.
2. Non Level Annuities: Annuities where payments vary with time.

## Level Annuities.
`To Include diagrams for enhancing learning.`
## Annuity Immediate:

Annuity Immediate in an annuity payment where the first payment is made at the end of first year.

Present value of annuity immediate: (calculated a year before the first payment)
$$
a-immediate PV=\dfrac{1-v^n}{i}
$$

Accumulated / Future value of annuity immediate: (calculated on the last payment year itself)
$$
a-immediate FV=\dfrac{(1+i)^n-1}{i}
$$

## Annuity Due:
Annuity due is an annuity where the first payment is made at the beginning of the first year.

Present value of annuity due: (calculated on the year of the first payment)
$$
a-due PV=\dfrac{1-v^n}{d}
$$

Accumulated value / Future value of annuity due: (calculated a year after the last payment)
$$
a-due FV=\dfrac{(1+i)^n-1}{d}
$$

> [!important]
> $a-immediate PV =a-immediate Fv.V^n$
> 
> $a-immediate FV =a-immediate Pv.(1+i)^n$
> 
> $a-due PV =a-due Fv.V^n$
> 
> $a-due FV =a-due Pv.(1+i)^n$
> 
> $a-due PV = 1+ a-immediate (n-1) PV$
> 
> $a- immediate FV = a-due FV (n-1) +1$

---
## Perpetuity:
An annuity that has infinite payments is called a perpetuity.

Perpetuity Immediate:
$$
a-immediate PV=\dfrac{1-v^n}{i}
$$
since $n\rightarrow\infty$,$v^n\rightarrow0$, hence:

$$
P-imm PV= \dfrac{1}{i}
$$

Perpetuity due:
$$
a-due PV=\dfrac{1-v^n}{d}
$$
since $n\rightarrow\infty$,$v^n\rightarrow0$, hence:
$$
P-imm PV= \dfrac{1}{d}
$$
---
> [!Tips]
> If Unknown time and interest, use the formula or BA-II plus.
> If Interest changes, compounding period varies, convert to the same terms and solve.

## Varying Interest:
If interest changes there are 2 methods that can happen:
1. Portfolio method: Same interest for any payment, during a given period of time.
2. Yield Curve method: Interest is charged based on the time of deposit.

---
Continuous Annuities:
`To Do`




---

## Non-level Payments.
### Payments in Geometric Progression:
This is a case where payments increase or decrease geometrically...
Formula: (can be derived)
$$
PV =\dfrac{1}{1+i}.\dfrac{1-(\dfrac{1+i}{1+k})^n}{i-k}
$$

first payment is 1, not 1.(1+k)

PV is also equal to: (derivation starts with taking v'=$\dfrac{1+i}{1+k}$ and  computing i' from here...)

$\dfrac{1}{1+i}.a-due Pv$ at i' interest rate, where v' is equal to $\dfrac{1+i}{1+k}$, and i' is related to this v'.



## Arithmetic Progression:

if the non-level payments  are increasing by a constant Q;
then the present value:

$$
PV=  P.ann-immediate PV+Q(\dfrac{ann-immediatePv-nv^n}{i})
$$
it's easy using the TVM method in BA-II plus:
- set `N`, `I`  as given:
- Set FV=$\dfrac{-Qn}{i}$
- Set PMT = $P+\dfrac{Q}{i}$
- Compute PV

 logic:
 $$
 PV=(P+\dfrac{Q}{i}).ann-immediatePV-(\dfrac{Q.n}{i})v^n
$$
thus setting Payment as such and setting the FV to be discounted, will give us the present value.


### Unit increasing arithmetic annuities.
if payments are increasing like 1,2, ...
then;
$$
(Ia)_n= \dfrac{ann-due PV-nv^n}{i}
$$
Reason: P & Q are 1.

### Unit decreasing arithmetic annuities.
if payments are decreasing from n,n-1.....
then;
$$
(Da)_n=\dfrac{n-ann-immediate PV}{i}
$$
Reason: Q=-1 and P=n.

### Perpetuities in arithmetic progress

using the above formula:
$$
PV=  P.ann-immediate PV+Q(\dfrac{ann-immediatePv-nv^n}{i})
$$
as $n\rightarrow\infty, nv^n\rightarrow0$, and annuity-immediate PV will become $\dfrac{1}{i}$
so,
$$
PV=\dfrac{P}{i}+\dfrac{Q}{i^2}
$$
if P=Q=1;
$$
PV=\dfrac{1}{i}+\dfrac{1}{i^2}
$$

---
## Annuity Tricks:
1. interest rate period lesser than the payment period, convert int to payment period rate.
2. if payment more regular than int period, use discounting but in fractions.
3. Block payments, come from the last period and subtract and add areas as and when required.
4. Read reverse tricks.
---
## Discounted cash flow analysis

1. NPV: Net Present Value of cash flows.
2. IRR: Internal rate of return, already discussed above or previous chapter.

Use BA-II plus to solve these in the Cashflow section.

---







