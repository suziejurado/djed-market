CACHE MANIFEST


CACHE:
{%- for file in files %}
{{file}}
{%- endfor %}


NETWORK:
*


SETTINGS:
prefer-online

# hash: {{hash}}