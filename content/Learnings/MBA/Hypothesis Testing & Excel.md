---
title: Hypothesis Testing & Excel.
tags:
  - Stats
  - MBA
  - To_Do
---
## Hypothesis Testing:
The basis is making an assumption of the population and trying to establish the truth based on sample statistics.

We assume the Null Hypothesis to be true, other words its based on the population assumption.

We try to establish our claim based on the sample observations.

The Whole idea came because of the need for sampling vs Census.

## Type of Tests:
1. Left tail
2. Right tail
3. Two tail


|        | True                                   | False                                  |
| ------ | -------------------------------------- | -------------------------------------- |
| Accept | Correct decision (1-$\alpha$)          | False negative ($\beta$) Type II error |
| Reject | False positive ($\alpha$) Type 1 error | Correct decision ($1-\beta$)           |
## What's $\alpha$ & $\beta$ ??





## Types of Hypothesis Testing
1. Z- test:
	 - used when popn standard dev is known
	 - when sample size > 30.

2.  t- test:
	 - standard deviation of popn is not known
	 - sample size is less to apply Z-test.
	 - popn must be normally dist.

3. f- test:
	 - for comparing more than two groups.

4. Chi-Square:
	 - Used for categorical data as against continuous data.

## Chi-square:
## Sample Var VS Popn Var.
$$
\chi^2 = \dfrac{(n-1)S^2}{\sigma^2}
$$

Comparison of variance of one sample against popn variance.
```excel
=CHISQ.INV(0.025,14) //gives the left tail critical value
=CHISQ.INV.RT(0.025,14) //gives the right tail critical value


```
given a 5% level of significance, we take 2.5% level of confidence on both sides and find the critical values on both sides.

After finding, finding the critical values, find the lower and upper limits of the popn variances.
Square root variances and find the standard deviation.

H0: Assume popn var to be true.
find the $\chi^2$  stat assuming $\sigma^2$ to be based on Null hypothesis.
compare $\chi^2$ stat with the critical values on both sides.

No Excel shortcuts.
## Multiple Variances:
$$
\chi^2=\Sigma[\dfrac{(f_0-f_e)^2}{f_e}]
$$
first find the expected observations for each of the sample.
find the $\chi^2$  by using the above formula.
find the $\chi^2$ stat on both sides using the `chisq.inv` and `chisq.inv.rt` functions in excel

H0: all sample variances are same.

see if the  $\chi^2$  stat is lying in between the critical chisq stats.
accept the null hypothesis if the above happens.

---

## Z-test:










---

## t- test:
## Popn variances unknown
1. Popn variances is equal.
2. Popn variances is unequal.
	 - if unequal variances:
$$
t_{stat}=\dfrac{(\bar X_1-\bar X_2)-(\mu_1-\mu_2)}{\sqrt(\dfrac{S_1^2}{n_1}+\dfrac{S_2^2}{n_2})}
$$
	 - if equal variances:
$$
t_{stat}=\dfrac{(\bar X_1-\bar X_2)-(\mu_1-\mu_2)}{\sqrt(\dfrac{S_p^2}{n_1}+\dfrac{S_p^2}{n_2})}
$$
		where $$S_P^2=\dfrac{(n_1-1)S^2_1+(n_2-1)S^2_2}{(n_1-1)+(n_2-1)}$$
		$S^2_P$ is the pooled variance.
---
## F-test:
$$
F_{stat}=\dfrac{S_1^2}{S_1^2}
$$
H0: variances are equal.    Separate variance test. 
H1: Variances are unequal. Pooled variance test.

---
## ANOVA:









---
