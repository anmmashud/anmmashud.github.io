---
layout: post
title: 10 Basic Python Problems
date: 2025-10-19 10:09:00
description: Solving 10 beginner level python problems.
thumbnail: https://miro.medium.com/v2/resize:fit:720/format:webp/0*FNIfBkJjBWx0S_gr.jpg
featured: true
categories: python problems
tags: python practice problems loops
tabs: true
related_posts: true
toc:
toc:
  beginning: true
#  sidebar: left
#   - name: Problem 1 - Find the Largest of Two Numbers
#   - name: Problem 2 - Print Numbers from 1 to N
#   - name: Problem 3 - Check if a Number is (+ve) or (-ve)
#   - name: Problem 4 - Calculate the Sum of Digits
#   - name: Problem 5 - Find Factorial of a Number
#   - name: Problem 6 - Count Occurrences of a Digit
#   - name: Problem 7 - Find the GCD of Two Numbers
#   - name: Problem 8 - Reverse a String
#   - name: Problem 9 - Check Armstrong Number
#   - name: Problem 10 - Generate a Pattern


---
> ##### This page is under construction
{: .block-danger }

> ##### I'm still working on this post.
> Code examples and explainations will be added soon. 
> Check back later for the full version! 
{: .block-warning }

## Problem 1 - Find the Largest of Two Numbers

> **Task:** Given two numbers, find the larger one. <br>
> **Demo Input:**  `5` and `6`<br>
> **Output:** `6`


```python
num_1 = 5  # 1st input
num_2 = 6  # 2nd input
if num_1 > num_2:
    print(f"The largest number is {num_1}")
else:
    print(f"The largest number is {num_2}")
```
*Outputs:* **`6`**


---

## Problem 2 - Print Numbers from 1 to N

> **Task**: Given a number `n`, print all numbers from 1 to `n`<br>
> **Demo Input**: `5`  <br>
> **Demo Output**:  1 2 3 4 5


```python
n = 5 # input
for i in range(1, n+1):
    print(i)
```
Outputs:
      ```markdown
      
      ```


---

## Problem 3 - Check if a Number is (+ve) or (-ve)

> **Task**: Determine if the input number is positive, negative, or zero.  <br>
> **Demo Input**: `-3`  <br>
> **Demo Output**: `The number is Negative`


```python
number = -3    
#number = int(input("Enter a number: "))
if number > 0:
    print(f"The nubmer: {number}, is pisitive (+ve)")
else:
    print(f"The nubmer: {number}, is negetive (-ve)")
```
Outputs:
      ```markdown
      
      ```


---

## Problem 4 - Calculate the Sum of Digits

> **Task**: Given a number, find the sum of its digits.  <br>
> **Demo Input**: `123`  <br>
> **Demo Output**: `6`  <br>
> (Explanation: `1+2+3=6`)


```python
number = 123
#number = int(input("Enter a number: "))
digit_sum = (sum([int(a) for a in str(number)]))
print(f"Sum of {number} =", digit_sum)
```
Outputs:
      ```markdown
      
      ```


---

## Problem 5 - Find Factorial of a Number

> **Task**: Calculate the factorial of a given number <br>
> **Demo Input**: `4`  <br>
> **Demo Output**: `24`  <br>
> (Explanation: `4! = 4*3*2*1 = 24`)


```python
input_num = 4
fact = 1
for digit in range(input_num,0,-1):
    fact *= digit 
print(f"{input_num}! =", fact)
```
Outputs:
      ```markdown
      
      ```


---

## Problem 6 - Count Occurrences of a Digit

> **Task**: Count how many times a specific digit appears max in a number.  <br>
> **Demo Input**:  1233321 <br>
> **Demo Output**: `3`  <br>
> (Explanation: `3` appears 3 times in `1233321`)


```python
input_num = str(1233321)
result = input_num.count('1')
print(result)
```

Outputs:
      ```markdown
      
      ```

Another Solution with input:

```python
# solution with 
input_num = input("Enter a number: ")
input_dig = input("Enter the digit: ")
result = input_num.count(input_dig)
print(f"{input_dig} appears {result} times in {input_num}.")
```
Outputs:
      ```markdown
      
      ```


---

## Problem 7 - Find the GCD of Two Numbers

> **Task**: Find the greatest common divisor (GCD) of two numbers.  <br>
> **Demo Input**: 8 and 12 <br>
> **Demo Output**: `4`


```python
a = int(input("1st number: "))
b = int(input("2nd number: "))

while b != 0:
    rem = a % b
    a = b
    b = rem

print("GCD is:", a)
```
Outputs:
      ```markdown
      
      ```

*Explaination:* ...............

---

## Problem 8 - Reverse a String

> **Task**: Reverse the given string.  
> **Demo Input**: `"aiquest"`  
> **Demo Output**: `"tseuqia"`


```python
word = input("Enter anything: ")
reverse = ''

for char in word:
    reverse = char + reverse
print(f'''Reverse of "{word}" is: "{reverse}"''')
```
Outputs:
      ```markdown
      
      ```


---

## Problem 9 - Check Armstrong Number

> **Task**: Check if a number is an Armstrong number (the sum of its digits raised to the power of the number of digits equals the number) 
> **Demo Input**: `153`  
> **Demo Output**: `153 is an Armstrong Number`  
> (Explanation: \(1^3 + 5^3 + 3^3 = 153\))


```python
num = input("Enter a number: ")
len_num = len(num)
result = 0

for digit in num:
    result += int(digit)**len_num
    
if result == int(num):
    print(f"{num} is an Armstrong number")
else:
    print(f"{num} is Not Armstrong")
```
Outputs:
      ```markdown
      
      ```


---

## Problem 10 - Generate a Pattern

> **Task**: Print a pyramid pattern with `n` rows.  
> **Demo input:** 4 <br>
> **Output:** You will see the pyramid pattern with 4 rows


```python
rows = int(input("Enter the number of rows: "))
# char = input("Enter any character: ")
char = "▲"

for i in range(1, rows+1):
    print(" " * (rows-i), end="")
    print(f"{char}" * (2*i-1))
```
Outputs:
      ```markdown
      
      ```



