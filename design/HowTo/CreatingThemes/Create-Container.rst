====================
 Create a Container
====================

Overview
---------

Containers allow designers to seamlessly integrate modules from many different developers into a cohesive website design. Containers can also include visual elements that allow website users to interact with the module.

.. class:: collapse-list

*  You can have a default container, which would be overridden by individual panes or modules if they provide their own style definitions.
*  You can use different containers in a single page.
*  You can mix and match any container with any theme layout.

Steps
-----

1. Create a new file for the container.
   
   .. note::
      .. class:: collapse-list
      
      *  The container must contain exactly one pane called **ContentPane**.
      *  The single pane must be defined as a server control by adding **runat="server"** to the element.
      *  A pane can be one of the following HTML elements: <td> (table cells), <div>, <p>, and <span>.

   **Example:** A very basic container.

   *  HTML

      .. code-block:: html

         <div id="ContentPane" runat="server"></div>

   *  ASCX

      .. code-block:: html

         <%@ Control AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Containers.Container" %>
         <div id="ContentPane" runat="server"></div>

#. (Optional) Add theme objects to your container for a more dynamic page.
   
   The following theme objects are relevant to containers:
 
   .. hlist::
      :columns: 3

      *  ACTIONBUTTON
      *  DROPDOWNACTIONS
      *  ICON
      *  LINKACTIONS
      *  PRINTMODULE
      *  TITLE
      *  VISIBILITY

   .. include::  /../common/bptext/TipSkinningTool.rst


See Also
--------

.. class:: collapse-list

*  DNN Wiki: `DotNetNuke Skins <http://www.dnnsoftware.com/wiki/dotnetnuke-skins>`_
*  `Create CSS </design/CreatingThemes/CreateCSS.shtml>`_
*  `Create Layout Template </design/CreatingThemes/CreateLayoutTemplate.shtml>`_

Sources
-------

.. class:: collapse-list

*  DNN Community blog: `DotNetNuke Skinning 101 (Part 3) <http://www.dnnsoftware.com/community-blog/cid/131995/dotnetnuke-skinning-101-part-3>`_ by `Joe Brinkman <http://www.dnnsoftware.com/activity-feed/userid/8129>`_
*  DNN Professional Training: `Creating HTML Skins <http://www.dnnsoftware.com/services/professional-training/training-videos-subscription/skinning-2-creating-html-skins>`_

