---
layout: home
title: Blog archive
permalink: /archive/
---
<div class="page-content wc-container">
	<div class="post">
		{% for post in site.posts %}
			{% capture currentyear %}{{post.date | date: "%Y%M"}}{% endcapture %}
			{% if currentyear != year %}
				{% unless forloop.first %}</ul>{% endunless %}
					<h5>{{ currentyear }}</h5>
					<ul class="posts">
					{% capture year %}{{currentyear}}{% endcapture %} 
				{% endif %}
			<li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
	{% endfor %}

