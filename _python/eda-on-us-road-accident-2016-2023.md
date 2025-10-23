---
layout: page
title: test 1
# description: 
img: assets/img/eda-on-us-road-accident-2016-2023/thumbnail.png
importance: 1
giscus_comments: false # not working
category: Basic
related_publications: false
toc:
  beginning: true
redirect: https://anmmashud.xyz/blog/2025/jupyter-installation-on-windows/
---

Read the Documentation for this project. **(Exploratory Data Analysis on US Road Accident (2016-2023))**[https://anmmashud.github.io/posts/2025-09-11-eda-on-us-road-accident-2016-2023.md]

# Notebook


{::nomarkdown}
{% assign jupyter_path = "assets/jupyter/eda-on-us-road-accident-2016-2023.ipynb" | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/eda-on-us-road-accident-2016-2023.ipynb %}{% endcapture %}
{% if notebook_exists == "true" %}
{% jupyter_notebook jupyter_path %}
{% else %}

<p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}
