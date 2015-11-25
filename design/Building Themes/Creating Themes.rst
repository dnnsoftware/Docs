===============
Creating Themes
===============

Introduction
------------

A DNN :term:`skin` or :term:`theme` defines the look and feel of the webpage or site. It is comprised of:
	* one or more layout templates
	* a style sheet for each of the layout templates (optional)
	* a master CSS style sheet (optional)

.. image:: /../common/img/Skin-Theme.png

A :term:`pane` is a section of a web page that displays static content, module-generated dynamic content, or a standard skin element.

A layout defines where panes are located on the web page and what each pane contains.

The layout templates included in the skin are variations on a theme that the web designer can choose from for each page in the site. For example, a template can be designed specifically for the home page, another template to display a gallery of photos, and yet another template to list products for sale.

When a template is assigned to a page, any associated style sheet is automatically added to the page.

Skins and :term:`containers` can be combined in a single :term:`package` or split into two packages.



Theme types
-----------

DNN supports two different types of themes: HTML and ASCX.

+----------------------------------------+----------------------------------------+
| HTML                                   | ASCX                                   |
+========================================+========================================+
| Basic theme.                           | Advanced theme.                        |
+----------------------------------------+----------------------------------------+
| To create/edit, use any HTML editor.   | To create/edit, use `Microsoft Visual  |
|                                        | Studio                                 |
|                                        | <http://www.visualstudio.com/>`_.      |
+----------------------------------------+----------------------------------------+
|| Automatically converted to ASCX       | Used as is.                            |
|| when installed.                       |                                        |
|| Only the `<innerHtml>` portion of the |                                        |
|| `<body>` tag is retained; everything  |                                        |
|| else is discarded, including the      |                                        |
|| entire `<header>`.                    |                                        |
+----------------------------------------+----------------------------------------+

..
   # How do I make the text wrap within a cell?
   # If I use the second |, it indents all text within that cell. How do I avoid that?
   # How do I make the "Used as is" to be flush against the top of the cell, not centered?



