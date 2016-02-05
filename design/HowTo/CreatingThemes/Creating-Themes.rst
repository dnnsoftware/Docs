=================
 Creating Themes
=================

.. toctree::
   :hidden:
   
   Create-Doctype
   Create-Layout-Template
   Create-Container
   Create-CSS
   Test-Html-Layout

Overview
--------

A DNN **theme** (formerly called a **skin**) defines the look and feel of the website. It is comprised of:

.. class:: collapse-list

*  one or more layout templates (HTML or ASCX)
*  (optional) a style sheet (CSS) for each of the layout templates
*  (optional) a master style sheet (CSS) for all the layout templates


|theme-layout|


Components of a Theme
+++++++++++++++++++++

|theme-pane|

Layouts and Containers
^^^^^^^^^^^^^^^^^^^^^^

A **pane** is a section of a webpage that displays static content, dynamic content, or a standard theme object.

A **layout template** defines where panes are located on the webpage and what each pane contains. The layout templates included in a theme are variations that the web designer can choose from for each page in the website, such as the home page, a gallery of photos, or a listing of products for sale.

A **container** is similar to a layout template, except a container's scope is a single pane, whereas a layout template's scope is the entire page. A container is associated with a **module**, which can generate dynamic content or perform other functionality.

For both layouts and containers, DNN requires exactly one content pane called **ContentPane** (case-insensitive). In a layout, additional panes are optional and names must be unique within the page. In a container, additional panes are ignored.

Layouts and containers can contain a **theme object**, which can be a typical component of a webpage, such as the menu bar, the copyright notice, the login/registration links, the privacy link, the terms of service link, and the search box. Theme objects are inserted in the HTML or ASCX as tokens.


CSS Files
^^^^^^^^^

CSS files are associated with layouts and containers, if they are in the same folder and they share the same filename. Example: MyFirstLayout.css is associated with MyFirstLayout.ascx.

.. class:: collapse-list

*  Any CSS file associated with a layout template defines how elements of the entire page are displayed.

*  Any CSS file associated with a container defines how the dynamic content is displayed within a single pane of the webpage. This ensures a unified design throughout the entire page, even if the various modules in the same page come from different creators.



If CSS files are not explicitly associated with the layouts and containers, the website's master CSS file is used. If no CSS files are associated with the website, the host's master CSS file is used.

Layouts and containers can share several CSS files or a single master CSS file.

When a layout template is applied to a webpage, any associated CSS is automatically added to the webpage. Likewise, when a container is applied to a pane, any associated CSS is automatically added to the pane.


Theme Types
+++++++++++

DNN supports two different types of themes: HTML and ASCX.

.. list-table::
   :widths: 50 50
   :header-rows: 1

   * - HTML
     - ASCX
   * - Basic theme
     - Advanced theme
   * - Can be created using any HTML editor.
     - Requires `Microsoft Visual Studio <http://www.visualstudio.com/>`_.
   * - Automatically converted to ASCX when installed. Only the contents inside the :code:`<body>` tag is retained (without the tag); everything else is discarded, including the entire :code:`<header>`.
     - Used as is.
   * - Easier to create.
       Uses DNN tokens, which represent code that call DNN APIs. The tokens are replaced with code during conversion to ASCX.
     - More powerful.
       Allows customization of code that call DNN APIs.


.. For more information about DNN tokens and APIs, see ...


How to Create a Theme
---------------------

Prerequisites
+++++++++++++

*  :doc:`A local DNN installation <../../GettingStarted/Set-Up-DNN>` with **Host** permissions.


Steps
+++++

.. I want these steps to be more prominent: bigger fonts, colored background boxes, etc.

1. :doc:`Create layout templates for the webpages. <Create-Layout-Template>`

#. :doc:`Create containers for modules. <Create-Container>`

#. (Optional) :doc:`Create a CSS file for each layout template and container, or create a single master CSS file to be used for all layout templates and containers. <Create-CSS>`
    
#. (Optional) :doc:`Create a doctype XML file. <Create-Doctype>`

#. **HTML only:** :doc:`Test HTML templates. <Test-Html-Layout>`
    
#. :doc:`Package your theme. <../PackagingThemes/Creating-Package>`

#. Test the theme.

   a. :doc:`Install the package. <../../GettingStarted/Install-Extensions>`
   
   #. Apply the theme to a new webpage in your DNN website.
   
   #. Check how the webpage looks in different browsers.


.. Example
   -------
   TODO: Create an example theme that readers can download and add the link here.

.. include::  /../common/bptext/TipSkinningTool.inc

.. include::  /../common/bptext/3rdPartyExtensions.inc


See Also
--------

.. class:: collapse-list 

*  DNN Wiki: `DotNetNuke Skins <http://www.dnnsoftware.com/wiki/dotnetnuke-skins>`_

*  :doc:`UX Guide <../../Style-Guide>`


Sources
-------

*  DNN Community Blog: `DotNetNuke Skinning 101 (Part 1) <http://www.dnnsoftware.com/community-blog/cid/132000/dotnetnuke-skinning-101-part-1>`_ by `Joe Brinkman <http://www.dnnsoftware.com/activity-feed/userid/8129>`_


..  ***** Image Substitutions *****

.. |theme-layout| image:: /../common/img/SkinTheme.png
    :class: img-responsive img-600
    :alt: Three variations of a theme

.. |theme-pane| image:: /../common/img/PaneLayout.png
    :class: img-responsive img-600
    :alt: Pane in a layout

