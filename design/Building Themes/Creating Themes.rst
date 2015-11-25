===============
Creating Themes
===============

Overview
--------

A :term: theme is comprised of skins and containers. 
* one or more layout templates
* a style sheet for each of the layout templates (optional)
* a master CSS style sheet (optional)

DNN supports two different types of themes: HTML and ASCX.



The DotNetNuke skinning engine supports two different types of themes: HTML themes and ASCX themes. ASCX skins can only be created using ..., whereas designers can use any HTML editor to create HTML skins, which are more basic. When HTML skins are installed in DNN, they are automatically converted to ASCX skins. During conversion, the entire HTML header is discarded, and only the `<innerHtml>` portion of the `<body>` tag is retained.

..
   # Insert diagram of HTML vs ASCX themes/skins here.

Skins and containers can be combined in a single package or split into two packages. This tutorial focuses on creating skins, but the associated containers can be created the same way with only a few minor differences.

..
   # What are these minor differences between creating skins and creating their associated containers?


   
A skin is comprised of:

The style sheets, if present, are automatically added by the DotNetNuke skinning engine to the page whenever the associated template is assigned.

..
   # How is the template associated with the style sheet(s)? 

Example: Suppose you associate a template called index.html (which is converted to index.ascx during installation) with style sheets called skin.css and index.css. Whenever you assign the Index skin template to a page, the skinning engine will automatically include the skin.css and index.css style sheets on the page as well.

A pane in a layout template is an area where you want to place user-generated content or a standard skin element.
   
.. image::
   
   
   
.. rst-class:: html-toggle

   This tutorial is based on the `Dreamy design template <http://www.oswd.org/files/designs/3459/dreamy/>` from the `Open Source Web Design <http://www.oswd.org/>` site.

(There should be a hidden toggleable section just above this.)