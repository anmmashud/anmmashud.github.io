---
layout: page
title: EDA on US Road Accident (2016-2023) 
description: Exploratory Data Analysis using Kaggle Dataset.
img: assets/img/eda-on-us-road-accident-2016-2023/thumbnail.png
importance: 1
category: EDA
related_publications: false
---
<div align="center">
  <h3>Preview</h3>
</div>

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/eda-on-us-road-accident-2016-2023/thumbnail.png" class="img-fluid rounded z-depth-1" zoomable=true %}
</div>

{::nomarkdown}
{% assign jupyter_path = "assets/jupyter/eda-on-us-road-accident-2016-2023.ipynb" | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/eda-on-us-road-accident-2016-2023.ipynb %}{% endcapture %}
{% if notebook_exists == "true" %}
{% jupyter_notebook jupyter_path %}
{% else %}

<p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}



### Experiment




To include a jupyter notebook in a post, you can use the following code:

{% raw %}

```liquid
{::nomarkdown}
{% assign jupyter_path = 'assets/jupyter/eda-on-us-road-accident-2016-2023.ipynb' | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/eda-on-us-road-accident-2016-2023.ipynb %}{% endcapture %}
{% if notebook_exists == 'true' %}
  {% jupyter_notebook jupyter_path %}
{% else %}
  <p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}
```

{% endraw %}

<!-- Let's break it down: this is possible thanks to [Jekyll Jupyter Notebook plugin](https://github.com/red-data-tools/jekyll-jupyter-notebook) that allows you to embed jupyter notebooks in your posts. It basically calls [`jupyter nbconvert --to html`](https://nbconvert.readthedocs.io/en/latest/usage.html#convert-html) to convert the notebook to an html page and then includes it in the post. Since [Kramdown](https://jekyllrb.com/docs/configuration/markdown/) is the default Markdown renderer for Jekyll, we need to surround the call to the plugin with the [::nomarkdown](https://kramdown.gettalong.org/syntax.html#extensions) tag so that it stops processing this part with Kramdown and outputs the content as-is.

The plugin takes as input the path to the notebook, but it assumes the file exists. If you want to check if the file exists before calling the plugin, you can use the `file_exists` filter. This avoids getting a 404 error from the plugin and ending up displaying the main page inside of it instead. If the file does not exist, you can output a message to the user. The code displayed above outputs the following: -->

{::nomarkdown}
{% assign jupyter_path = "assets/jupyter/eda-on-us-road-accident-2016-2023.ipynb" | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/eda-on-us-road-accident-2016-2023.ipynb %}{% endcapture %}
{% if notebook_exists == "true" %}
{% jupyter_notebook jupyter_path %}
{% else %}

<p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}

```
{::nomarkdown}
{% assign jupyter_path = "assets/jupyter/eda-on-us-road-accident-2016-2023.ipynb" | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/eda-on-us-road-accident-2016-2023.ipynb %}{% endcapture %}
{% if notebook_exists == "true" %}
{% jupyter_notebook jupyter_path %}
{% else %}

<p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}
```

```liquid
{::nomarkdown}
{% assign jupyter_path = "assets/jupyter/eda-on-us-road-accident-2016-2023.ipynb" | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/eda-on-us-road-accident-2016-2023.ipynb %}{% endcapture %}
{% if notebook_exists == "true" %}
{% jupyter_notebook jupyter_path %}
{% else %}

<p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}
```

```python
{::nomarkdown}
{% assign jupyter_path = "assets/jupyter/eda-on-us-road-accident-2016-2023.ipynb" | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/eda-on-us-road-accident-2016-2023.ipynb %}{% endcapture %}
{% if notebook_exists == "true" %}
{% jupyter_notebook jupyter_path %}
{% else %}

<p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}
```