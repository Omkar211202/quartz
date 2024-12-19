---
title: General Cash Flows, Portfolios and Immunization.
date:
  - 2024-11-01
tags:
  - FM
---
## Spot Rates and Forward Rates.

spot rates: annual effective yield rates / interest of zero coupon bonds.

Forward rates are rates that connect to 2 spot rates.

$$
(1+s_5)^5=(1+s_3)^3.(1+f_{3,5})^2
$$


the 5 year old spot rate is the product of three year and 2 year old forward rate.


---

## Duration:
- average time
- average time until we receive cashflows

### MacD
- weighted average life of the cashflows.
- weights are the present value of the cashflows.
- price weighted time.
- MacD is always positive, cannot exceed the last cashflow.

Formula:

$\dfrac{\Sigma t.v^t.CF_t}{\Sigma v^t.CF_t}$

### Another perspective.
 let $\delta$ be continuous compounding at interest rate. Then the price will be equal to $\Sigma e^{-\delta t}.CF_t$

MacD= $-\dfrac{P'(\delta)}{P(\delta)}$

Modified Duration:
(here we use the annual effective rate for calculating V)

ModD= $\dfrac{\Sigma t.v^{t+1}.CF_t}{\Sigma v^t.CF_t}$

ModD=MacD.$V$

---

## Convexity:

MacC=$-\dfrac{P"(\delta)}{P(\delta)}$= $\dfrac{\Sigma t^2.v^{t}.CF_t}{\Sigma v^t.CF_t}$


ModC=$\dfrac{P"(i)}{P(i)}$=$\dfrac{\Sigma t.(t+1).v^{t+2}.CF_t}{\Sigma v^t.CF_t}$


ModC=$V^2$(MacC+MacD)


Portfolio concevity:
- convexity of each porfolio with the weights based on prices.

---

## Immunization:

Redington Based on:
- flat yield curves.
- small changes in interest rates
- cash flows do not change.

Redington assumptions:
- present value of all assets = present values of all liabilities.
- duration of assets = duration of liabilities.
- Convexity of assets > convexity of liabilities.

Full immunization based on:
- flat yield curves.
- parallel shift in yield rates
- fixed cash flows.

assumptions:
- present value of all assets = present values of all liabilities.
- duration of assets = duration of liabilities.
- there must at least 1 asset or liability before and after a cash flow.

Immunization by Matching cashflows:
- match all assets and liabilities, start matching from the last liability and move forward.