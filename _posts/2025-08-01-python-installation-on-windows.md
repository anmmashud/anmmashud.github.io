---
layout: post
title: Install Python on Windows
date: 2025-08-1 10:09:00
description: Python is a versatile programming language widely used in data analysis, web development, and more. This guide explains how to install the latest version.
categories: education
tags: python windows pip installation
featured: true
---
Python is a versatile programming language widely used in data analysis, web development, and more. This guide explains how to install the latest version of Python on Windows.

#### **Step 1:** Download Python

1. Download the Python installer for Windows directly: [Python 3.13.1](https://www.python.org/ftp/python/3.13.1/python-3.13.1-amd64.exe)
2. If it does not work, visit [https://www.python.org](https://www.python.org), click on **Downloads**, and select the version for your operating system.

#### **Step 2:** Run the Installer

1. Locate the downloaded file in your Downloads folder.
2. Double-click to run the installer.
3. Click **Install Now** for default settings or choose **Customize Installation** for advanced options.

#### **Step 3:** Verify Installation

1. After completion, open **Command Prompt**:
   - Press `Win + R`, type `cmd`, and press Enter.
   - Alternatively, press the Windows key on your keyboard, type `cmd`, and hit Enter.
2. Check the Python version:

```shell
python --version
```

3. Check the pip version:

```shell
pip --version
```

#### Step 4: Test Python

Open Python in Command Prompt:

```shell
python
```

Run a test command:

```python
print("Hello, World!")
```

Output:

```plaintext
Hello, World!
```

Exit Python:

```python
exit()
```

Here are my screenshots. Don’t worry about the terminal color; you can customize it as well.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/python_install_win_ss1.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/python_install_win_ss2.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

#### Conclusion

You’ve successfully installed Python on Windows. Stay tuned for the next blog!
