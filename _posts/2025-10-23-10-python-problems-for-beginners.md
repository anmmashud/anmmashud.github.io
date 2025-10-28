---
layout: post
title: 10 Python Problems for Beginners
date: 2025-10-19 10:09:00
description: A collection of ten beginner-friendly Python problems that cover the basics — from loops and conditionals to string and number operations. Each problem is solved step by step, helping you practice logic and syntax through real examples.
thumbnail: https://miro.medium.com/v2/resize:fit:720/format:webp/0*FNIfBkJjBWx0S_gr.jpg
featured: true
giscus_comments: true
categories: python problems
tags: python practice problems loops
tabs: true
related_posts: true
toc:
  beginning: true
---
> ##### I'm still working on this post.
> Code examples and explanations will be added soon.  
> Check back later for the full version!
{: .block-warning }

---

## Problem 1 - Find the Largest of Two Numbers
> **Task:** Given two numbers, find the larger one.  
> **Demo Input:** `5` and `6`  
> **Output:** `6`

```python
num_1 = 5  # 1st input
num_2 = 6  # 2nd input

if num_1 > num_2:
    print(f"The largest number is {num_1}")
else:
    print(f"The largest number is {num_2}")
````

**Output:**
`6`

**Explanation:**
The program compares two numbers using the `>` (greater than) operator.

* If `num_1` is greater, it prints `num_1`.
* Otherwise, it prints `num_2`.
  This simple comparison helps identify the larger of the two inputs.

---

## Problem 2 - Print Numbers from 1 to N

> **Task:** Given a number `n`, print all numbers from 1 to `n`.
> **Demo Input:** `5`
> **Demo Output:** `1 2 3 4 5`

```python
n = 5  # input
for i in range(1, n + 1):
    print(i)
```

**Explanation:**
The `range()` function generates numbers from `1` to `n`.
The `for` loop iterates through each number and prints it sequentially.
If `n` is 5, the output becomes `1 2 3 4 5`.

---

## Problem 3 - Check if a Number is Positive or Negative

> **Task:** Determine if the input number is positive, negative, or zero.
> **Demo Input:** `-3`
> **Demo Output:** `The number is Negative`

```python
number = -3
# number = int(input("Enter a number: "))

if number > 0:
    print(f"The number: {number}, is positive (+ve)")
elif number < 0:
    print(f"The number: {number}, is negative (-ve)")
else:
    print("The number is zero")
```

**Explanation:**
This uses simple conditional checks:

* If the number is greater than 0, it’s positive.
* If less than 0, it’s negative.
* If neither, it’s zero.
  The `elif` statement ensures all three cases are covered clearly.

---

## Problem 4 - Calculate the Sum of Digits

> **Task:** Given a number, find the sum of its digits.
> **Demo Input:** `123`
> **Demo Output:** `6`
> (Explanation: `1 + 2 + 3 = 6`)

```python
number = 123
# number = int(input("Enter a number: "))
digit_sum = sum([int(a) for a in str(number)])
print(f"Sum of {number} =", digit_sum)
```

**Explanation:**
The number is first converted to a string so each digit can be looped through.
Each character is then turned back into an integer and summed using the `sum()` function.
For `123`, this becomes `1 + 2 + 3 = 6`.

---

## Problem 5 - Find Factorial of a Number

> **Task:** Calculate the factorial of a given number.
> **Demo Input:** `4`
> **Demo Output:** `24`
> (Explanation: `4! = 4 × 3 × 2 × 1 = 24`)

```python
input_num = 4
fact = 1

for digit in range(input_num, 0, -1):
    fact *= digit

print(f"{input_num}! =", fact)
```

**Explanation:**
The loop multiplies the number by all integers below it down to 1.
The variable `fact` keeps updating as the product grows.
This is the manual way to calculate factorials without using `math.factorial()`.

---

## Problem 6 - Count Occurrences of a Digit

> **Task:** Count how many times a specific digit appears in a number.
> **Demo Input:** `1233321`
> **Demo Output:** `3`
> (Explanation: The digit `3` appears 3 times in `1233321`.)

```python
input_num = str(1233321)
result = input_num.count('3')
print(result)
```

**Alternative with user input:**

```python
input_num = input("Enter a number: ")
input_dig = input("Enter the digit: ")

result = input_num.count(input_dig)
print(f"{input_dig} appears {result} times in {input_num}.")
```

**Explanation:**
The `count()` method checks how many times a substring (digit) occurs within a string.
Converting the number to a string makes it easy to use this built-in function.

---

## Problem 7 - Find the GCD of Two Numbers

> **Task:** Find the greatest common divisor (GCD) of two numbers.
> **Demo Input:** `8` and `12`
> **Demo Output:** `4`

```python
a = int(input("1st number: "))
b = int(input("2nd number: "))

while b != 0:
    rem = a % b
    a = b
    b = rem

print("GCD is:", a)
```

**Explanation:**
This uses the **Euclidean Algorithm**:

* Divide `a` by `b` and take the remainder.
* Replace `a` with `b`, and `b` with the remainder.
* Repeat until the remainder becomes 0.
  The last non-zero `a` is the GCD.

---

## Problem 8 - Reverse a String

> **Task:** Reverse the given string.
> **Demo Input:** `"aiquest"`
> **Demo Output:** `"tseuqia"`

```python
word = input("Enter anything: ")
reverse = ''

for char in word:
    reverse = char + reverse

print(f'''Reverse of "{word}" is: "{reverse}"''')
```

**Explanation:**
Each character is added in front of the existing string, building the reversed version step by step.
This approach avoids using slicing or built-in reverse functions, helping you understand string manipulation.

---

## Problem 9 - Check Armstrong Number

> **Task:** Check if a number is an Armstrong number.
> **Demo Input:** `153`
> **Demo Output:** `153 is an Armstrong Number`
> (Explanation: (1^3 + 5^3 + 3^3 = 153))

```python
num = input("Enter a number: ")
len_num = len(num)
result = 0

for digit in num:
    result += int(digit) ** len_num

if result == int(num):
    print(f"{num} is an Armstrong number")
else:
    print(f"{num} is Not Armstrong")
```

**Explanation:**
Each digit is raised to the power of the total number of digits, and their sum is compared with the original number.
If both match, it’s an Armstrong number.
For example, `153 = 1³ + 5³ + 3³`.

---

## Problem 10 - Generate a Pattern

> **Task:** Print a pyramid pattern with `n` rows.
> **Demo Input:** `4`
> **Output:** Pyramid pattern with 4 rows.

```python
rows = int(input("Enter the number of rows: "))
# char = input("Enter any character: ")
char = "▲"

for i in range(1, rows + 1):
    print(" " * (rows - i), end="")
    print(f"{char}" * (2 * i - 1))
```

**Explanation:**
The loop prints spaces and symbols in a specific order:

* `" " * (rows - i)` creates leading spaces to center the pattern.
* `char * (2 * i - 1)` prints an increasing number of symbols in each row.
  Together, they form a symmetrical pyramid.





