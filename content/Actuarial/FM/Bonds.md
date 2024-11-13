---
title: Bonds
date:
  - 2024-10-29
tags:
  - FM
---
## What's a Bond?
Bond is similar to a loan, but it has smaller payments in the time period but ends with a lumpsum payment at the end to the term.


## Terminologies and Notations:
1. $F$ : the face value of the bond, based on which the coupon rates will be calculated.
2. $y$ : the yield rate, similar to interest rate.
3. $i$: coupon rate.
4. $C$ : The bulk amount that will be paid at the end of the bond period, if not mentioned will be equal to the face value.0
5. $P$: Price of the bond.
6. $n$: number of coupon payments.


## Formulas for Bond Pricing:


$$
P= Fr.a_n + CV^n
$$

we obtain the price by discounting all the cash flows to the present value.

Thus, we get the formula.

Alternate:

we know,
$$
a_n=\dfrac{1-v^n}{i}
$$
substitute for $V^n = 1-a_n.i$, we get the formula:
$$
P=C+(Fr-Ci).a_n
$$
This is known as the premium or discount formula...

We will see the reason later as to why.


## Premium VS Discounts in bonds:

$$
P-C=(Fr-Ci).a_n
$$
We obtain the following from the above formula.

Thus, will have three scenarios:
1. $P>C$ : This is when we say we have a premium bond.$(Fr>Ci)$
2. $P<C$ : This is a discounted bond.$(Fr<Ci)$
3. $P=C$ : This is a par bond.$(Fr=Ci)$


## Bond Amortization:
Bond amortization just like loan amortization is a tabular format showing the full info about coupon payment, interest, book value, write-up and write down


| n   | coupon | interest    | write-down or write-up | book value          |
| --- | ------ | ----------- | ---------------------- | ------------------- |
| t   | Fr     | i.$B_{t-1}$ | Fr - i.$B_{t-1}$       | C+(Fr-Ci).$a_{n-t}$ |



## Callable Bonds:

Sometimes an issuer might call back the bonds prior to the redemption date, this is when they become the callable bonds.
There are two types of questions the investor must ponder about:
1. Minimum yield rate.
2. The price to buy the bond to get the yield.

You can use the end-point strategy to find the the price of the bond,
eliminate all points where the call-back remains constant.

---
