---
layout: home
permalink: /tags
---


{% assign tag_names = "" | split: "|"  %}

{% for posts_by_tag in site.tags %}
  {% assign tag_names = tag_names | push: posts_by_tag.first %}
{% endfor %}

{% assign tag_names = tag_names | sort %}


<hr>

{% comment %}
<section class="posts-by-tags">
  {% for tag_name in tag_names %}
    <div>
      <h3 id="{{ tag_name }}">
        {{ tag_name | capitalize | replace: "_", " " }}
      </h3>

      {% for post in site.tags[tag_name] %}
        <a href="{{ post.url | prepend: baseurl }}">
          {{ post.title }}
        </a>
      {% endfor %}
    </div>
  {% endfor %}
</section>
{% endcomment %}


{% comment %}
<div class="page-content wc-container">
	<div class="post">
		<h1>Tags</h1>  
		<ul>
			{% for tag in site.tags %}
			<li><a href="{{ '/tags/' | append:tag[0] | relative_url }}">{{ tag[0] }}</a></li>
			{% endfor %}
		</ul>
	</div>
</div>
{% endcomment %}


{% for category in site.categories %}
  <h3>{{ category[0] }}</h3>
  <ul>
    {% for post in category[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}