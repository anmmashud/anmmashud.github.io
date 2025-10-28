---
layout: post
title: 110 Python Problems Solved | AI-Quiest
date: 2025-10-27 1:00:00
description: My full collection of Python problem solutions from the AI-Quest challenge — documenting every step from the easy to the tricky ones.
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
> Code examples and explainations will be added soon. 
> Check back later for the full version! 
{: .block-warning }

---

## Problem 1: Variable Swap
> **Task:** Write a Python program to swap the values of two variables without using a temporary variable.

**Code:**
```python
# Take input of two values
a = input("Enter 1st Value: ")
b = input("Enter 2nd Value: ")

# Print the values before swapping
print(f"\nSwapping:\nBefore : a = {a}, b = {b}")

# Swapping the values
a, b = b, a

# Print the values after swapping
print(f"After  : a = {a}, b = {b}")
````

**Output:**

```markdown
Enter 1st Value:  47
Enter 2nd Value:  29

Swapping:
Before : a = 47, b = 29
After  : a = 29, b = 47
```

**Explanation:**
This program swaps the values of two variables using **tuple unpacking**.
When `a, b = b, a` executes, Python first creates a tuple `(b, a)` internally and then unpacks it into the variables `a` and `b`.
This allows both values to switch places without needing an extra temporary variable.

---

## Problem 2: Even or Odd

> **Task:** Write a Python program that takes an integer as input and prints whether it is even or odd.

**Code:**

```python
num = int(input("Enter a Number: "))

if num % 2 == 0:
    print(f"{num} is an Even number")
else:
    print(f"{num} is an Odd number")
```

**Output:**

```markdown
Enter a Number:  40
40 is an Even number
```

And if we give 37 as input:

```markdown
Enter a Number:  37
37 is an Odd number
```

**Explanation:**
To determine whether a number is even or odd:

* We use the **modulus operator (`%`)** to find the remainder when dividing by 2.
* If the remainder is `0`, the number is **even**.
* Otherwise, it is **odd**.
  This simple logic is implemented using an `if-else` condition.

---

## Problem 3: String Reverse

> **Task:** Write a Python function to reverse a given string and return the reversed string.

**Code:**

```python
user_input = input("Enter anything: ")

rev_str = ""

for char in user_input:
    rev_str = char + rev_str

print(f"Reverse string: {rev_str}")
```

**Output:**

```markdown
Enter a Word:  abcd 1234
Reverse string: 4321 dcba
```

**Explanation:**

* The program takes a string input from the user.
* An empty string `rev_str` is initialized to build the reversed version.
* In each loop, the current character (`char`) is added **before** the existing `rev_str`, reversing the order step by step.
* Finally, the reversed string is printed.

**Note:**
If we mistakenly add the character **after** `rev_str` like `rev_str = rev_str + char`, the original order will remain unchanged.

**Example (incorrect order):**

```python
user_input = input("Enter a Word: ")

rev_str = ""

for char in user_input:
    rev_str = rev_str + char
print(f"Reverse string: {rev_str}")
```

**Output:**

```markdown
Enter a Word:  abcd 1234
Reverse string: abcd 1234
```

So, be careful with the order in the concatenation — `char + rev_str` is what actually performs the reversal.

---

## Problem 4: Type Conversion
> **Task:** Given a list of integers, write a Python program to convert each
element of the list to a string.

**Code:**

```python

```




















