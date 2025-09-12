---
layout: post
title: a post with jupyter notebook
date: 2023-07-04 08:57:00-0400
description: an example of a blog post with jupyter notebook
tags: formatting jupyter
categories: sample-posts
giscus_comments: true
related_posts: false
---

```
layout: post
title: EDA on US Road Accident (2016-2023)
date: 2025-09-11 13:09:00
description: A Step by step guied on Exploratory Data Analysis
categories: education, EDA, python, data analysis
tags: jupyter windows installation
featured: true
img: assets/img/eda-on-us-road-accident-2016-2023/thumbnail.png
giscus_comments: false
related_publications: false
toc:
  sidebar: left  
pretty_table: true
```
### Thumbnail

<div align="center">
  <h3>Preview</h3>
</div>

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/eda-on-us-road-accident-2016-2023/thumbnail.png" class="img-fluid rounded z-depth-1" zoomable=true %}
</div> 

# Resources

- [Dataset](https://www.kaggle.com/datasets/sobhanmoosavi/us-accidents)
- <a href="https://www.kaggle.com/code/anmmashud/eda-on-us-road-accident-2016-2023?scriptVersionId=261373117" target="_blank"><img align="left" alt="Kaggle" title="Open in Kaggle" src="https://kaggle.com/static/images/open-in-kaggle.svg"></a>
- <a href="https://colab.research.google.com/#fileId=https%3A//storage.googleapis.com/kaggle-colab-exported-notebooks/anmmashud/eda-on-us-road-accident-2016-2023.38fb807a-c983-4aa9-8b28-58305f8e5873.ipynb%3FX-Goog-Algorithm%3DGOOG4-RSA-SHA256%26X-Goog-Credential%3Dgcp-kaggle-com%2540kaggle-161607.iam.gserviceaccount.com/20250912/auto/storage/goog4_request%26X-Goog-Date%3D20250912T083005Z%26X-Goog-Expires%3D259200%26X-Goog-SignedHeaders%3Dhost%26X-Goog-Signature%3D8818c5188a79f969cd182b5925fe1ae05e40975fd862d383c774a646cd9dfd49da863c8ed9605d149d8ae9e20b67f7018b2905a4a58beb6b44eccc0e90dc8186bfbb50567f0e7f44643383306f00d3a3c1cfcd095ceda1e54d135a867280ff0b49be4561af632c1cd7fce4e60aeea70bace9b3c9e0a7eb37630944a0b3e614ad9dff61fa02bca4c9d18842596b04fe9c062b200fc282b376bdd4845f22a053edf26440a119376a5a7fa3b3701c585fae5f2cb45a2e0b1f52e6aecde6c26e9fbb8fea5049a6284edcb820f2805e0449b3265ccd7cac300331c004cd10f0ee902b5c92af4ed3d1b3c529fe6ac3ff1780a6eb4f71e0e47d764177d691ec7629ebd1" target="_blank"><img align="left" alt="Colab" title="Open in Colab" src="https://colab.research.google.com/assets/colab-badge.svg"></a>

# Roadmap



<!-- 
## table example 

<table
  data-click-to-select="true"
  data-height="460"
  data-pagination="true"
  data-search="true"
  data-toggle="table"
  data-url="{{ '/assets/json/table_data.json' | relative_url }}">
  <thead>
    <tr>
      <th data-checkbox="true"></th>
      <th data-field="id" data-halign="left" data-align="center" data-sortable="true">ID</th>
      <th data-field="name" data-halign="center" data-align="right" data-sortable="true">Item Name</th>
      <th data-field="price" data-halign="right" data-align="left" data-sortable="true">Item Price</th>
    </tr>
  </thead>
</table>
 -->


### with python snippet

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