===========================
|InProgress| Building Themes
===========================

.. toctree::
   :maxdepth: 1

   Building-Themes/HTML Themes
   Building-Themes/ASCX Themes

Introduction to DNN Themes
--------------------------

.. image:: /../common/img/SkinTheme.png
   :alt: diagram of skin/theme components

A DNN :term:`skin` or :term:`theme` defines the look and feel of the webpage or site. It is comprised of:
   * one or more layout templates
   * a style sheet for each of the layout templates (optional)
   * a master CSS style sheet (optional)

When a template is assigned to a page, any associated style sheet is automatically added to the page.

.. image:: /../common/img/PaneLayout.png
   :alt: diagram of pane and layout variations
   :align: left

A :term:`pane` is a section of a web page that displays static content, module-generated dynamic content, or a standard skin element. DNN requires one content pane called `ContentPane` (case-insensitive). Additional panes are optional.

A standard skin element or :term:`skin object` are typical components of a webpage, such as the menu bar, the copyright notice, the login/registration links, the privacy link, the terms of service link, and the search box.

A layout defines where panes are located on the web page and what each pane contains.

The layout templates included in the skin are variations on a theme that the web designer can choose from for each page in the site, such as the home page, a gallery of photos, or a listing of products for sale.


Skins and :term:`containers` can be combined in a single :term:`package` or split into two packages.



Theme types
-----------

DNN supports two different types of themes: HTML and ASCX.

.. list-table::
   :header-rows: 1
   :widths: 20 20

   * - HTML
     - ASCX
   * - Basic theme.
     - Advanced theme.
   * - Can be created using any HTML editor.
     - Requires `Microsoft Visual Studio <http://www.visualstudio.com/>`_.
   * - Automatically converted to ASCX when installed.
       Only the `<innerHtml>` portion of the `<body>` tag is retained;
       everything else is discarded, including the entire `<header>`.
     - Used as is.
   * - `Learn more about `HTML themes <./Building%20Themes/HTML%20Themes>`_.
     - `Learn more about `ASCX themes <./Building%20Themes/ASCX%20Themes>`_.

..
   # BUGBUG: list-table and csv-table do not wrap long text within a cell.
   #
   # BUGBUG: csv-table commented out - start
   #  .. csv-table::
   #     :header: HTML, ASCX
   #     :widths: 20 20
   #
   #     "Basic theme.", "Advanced theme."
   #     "To create/edit, use any HTML editor.","To create/edit, use `Microsoft Visual Studio <http://www.visualstudio.com/>`_."
   #     "Automatically converted to ASCX when installed. Only the `<innerHtml>` portion of the `<body>` tag is retained; everything else is discarded, including the entire `<header>`.", "Used as is."
   # BUGBUG: csv-table commented out - end


.. include:: /../common/stub-notice.txt

..
   # How do I make the text wrap within a cell?
   # How do I add an image inside a table?
   #
   # QUESTION: Is it okay to have multiple panes called "ContentPane"? Or should there be *exactly one* pane with that name?
   #
