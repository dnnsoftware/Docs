===================
 Test HTML Layouts 
===================

Overview
--------

Although you can define your layout templates or containers in either HTML or ASCX, DNN uses ASCX internally. During development, if you are using HTML based layouts, you will need to convert them to ascx format in order to test your layout.

.. note::

   DNN will automatically convert HTML layouts when a skin or container package is installed. There is no requirement to include ascx files in your HTML based theme.  

The conversion:

.. class:: collapse-list

*  adds the **Control** directive code at the top of the file,

*  adds **Register** directive code for each token used within the file, and

*  replaces the HTML tokens with the appropriate ASP.Net controls.

Prerequisites
-------------

.. include::  /../common/bptext/PrereqHost.inc

Steps
-----

1. Add your theme to your local DNN installation.
   
   a. Create a folder for your theme inside the :code:`Portals\`*websitename*:code:`\Skins folder` of your DNN installation. (*websitename* could be a number representing the PortalID.) The folder name becomes your theme name. Example: If you create the folder :code:`C:\DNN8\Portals\MyWebsite\Skins\MyTheme`, **MyTheme** becomes your theme's name.
   
   #. Copy your files to the new theme folder.

#. In :code:`www.dnndev.me`, log in as an admin or host, and go to **Admin** > **Advanced Settings** (double-gear tab) > **Themes**.
   
   |themes|


#. Choose your new theme in the **Themes** dropdown, then click **Parse Theme Package**.
    
   |parse-theme|


#. Confirm:

   *  That a section appears under **Themes** for each converted HTML file.
   *  That no errors appear in the log.
   *  That the new ASCX file appears in the same folder as the HTML file.

   |error-check|

.. note:: 
   The conversion only goes in one direction (from HTML to ASCX). To make changes to the layout template:

   *  Make changes directly to the ASCX file.
   *  Make the changes in your original HTML file and reconvert it to ASCX. **Warning:** This overrides prior changes made directly to the ASCX file.

Example 1
---------

This simple HTML layout template or container:

.. code-block:: aspx-vb

   <div id="ContentPane" runat="server"></div>

is converted to this ASCX layout template:

.. code-block:: aspx-vb

   <%@ Control language="vb" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin">
   <div id="ContentPane" runat="server"></div>

Example 2
---------

This HTML layout template or container, which includes the :code:`[COPYRIGHT]` token:

.. code-block:: aspx-vb

   <div id="ContentPane" runat="server">
       [COPYRIGHT]
   </div>

is converted to this ASCX layout template:

.. code-block:: aspx-vb

   <%@ Control language="vb" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin" %>
   <%@ Register TagPrefix="dnn" TagName="COPYRIGHT" Src="~/Admin/Skins/Copyright.ascx" %>
   <div id="ContentPane" runat="server">
       <dnn:COPYRIGHT runat="server" id="dnnCOPYRIGHT" />
   </div>

See Also
--------

.. class:: collapse-list

*  DNN Wiki: `DotNetNuke Skins <http://www.dnnsoftware.com/wiki/dotnetnuke-skins>`_

*  `Create Layout Template </design/CreatingThemes/CreateLayoutTemplate.shtml>`_

*  `Create a Container </design/CreatingThemes/CreateContainer.shtml>`_


Sources
-------

*  DNN Community Blog: `DotNetNuke Skinning 101 (Part 1) <http://www.dnnsoftware.com/community-blog/cid/132000/dotnetnuke-skinning-101-part-1>`_ by `Joe Brinkman <http://www.dnnsoftware.com/activity-feed/userid/8129>`_

..  ***** Image Substitutions *****

.. |themes| image:: /../common/img/scr-HTMLtoASCX-4.png
    :class: img-responsive img-600
    :alt: Navigate to the themes page

.. |parse-theme| image:: /../common/img/scr-HTMLtoASCX-10.png
    :class: img-responsive img-600
    :alt: Parse the theme

.. |error-check| image:: /../common/img/scr-HTMLtoASCX-11.png
    :class: img-responsive img-600
    :alt: Ensure there are no errors
