==========================
 Create a Layout Template
==========================

Steps
-----

1. Create a new file for the layout template.

   .. note::
      
      .. class:: collapse-list
      
      *  The layout template must contain at least one pane.
      *  Exactly one of the panes must be called **ContentPane**.
      *  Each pane must have a name that is unique within the page.
      *  All panes must be defined as a server control by adding **runat="server"** to the element. 
      *  A pane can be one of the following HTML elements: <td> (table cells), <div>, <p>, and <span>.

   **Example:** A very basic layout template.

   *  HTML

      .. code-block:: html

         <div id="ContentPane" runat="server"></div>

   *  ASCX

      .. code-block:: aspx-vb

         <%@ Control language="vb" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin" %>
         <div id="ContentPane" runat="server"></div>

   **Example:** A layout template with several panes, a header, a footer, and a LOGO theme object.

   *  HTML

      .. code-block:: html

         <div id="wrapper">
             <div id="header">
                 [LOGO]
             </div>
             <div id="sidebar">
                 <div id="feed">
                     <a class="feed-button" href="#">&nbsp;</a>
                 </div>
                 <div id="SidebarPane" class="SidebarPane" runat="server"></div>
                 <div id="sidebar-bottom">&nbsp;</div>
             </div>
             <div id="content">
                 <div id="BannerPane" class="BannerPane" runat="server"></div>
                 <div id="ContentPane" runat="server"></div>
             </div>
             <div id="footer"></div>
         </div>

   *  ASCX

      .. code-block:: aspx-vb

         <%@ Control language="vb" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin" %>
         <%@ Register TagPrefix="dnn" TagName="LOGO" Src="~/Admin/Skins/Logo.ascx" %>
         <div id="wrapper">
             <div id="header">
                 <dnn:LOGO runat="server" id="dnnLOGO" />
                 </div>
                 <div id="sidebar">
                     <div id="feed">
                         <a class="feed-button" href="#">&nbsp;</a>
                     </div>
                     <div id="MySidebarPane" class="SidebarPane" runat="server"></div>
                     <div id="sidebar-bottom">&nbsp;</div>
                 </div>
                 <div id="content">
                     <div id="MyBannerPane" class="MyBannerPane" runat="server"></div>
                     <div id="ContentPane" runat="server"></div>

                 </div>
                 <div id="footer"></div>
         </div>

   .. tip::
   
      ASP.NET might modify the control names (e.g., **div id**) when the page is rendered to avoid duplicate control names in a page. Instead of depending on the control name when styling, add a **class** attribute to each of the controls and refer to those class attributes in your CSS.
      

#. (Optional) Add theme objects to any pane for a more dynamic page.

   *  In HTML, you can use the HTML token (example: :code:`[LOGIN]`).
      
      **Example:**

      .. code-block:: html

         <div id="login_style" class="user">
             [LOGIN]
         </div>

   *  In ASCX, you must register the ASCX theme object (example: :code:`<dnn:Login ...`) before using it for the first time in the file.
      
      **Example:**

      .. code-block:: aspx-vb

         <%@ Register TagPrefix="dnn" TagName="Login" Src="~/Admin/Skins/login.ascx" %>
         ...
         <div id="login_style" class="user">
             <dnn:Login runat="server" id="dnnLogin" CssClass="user" />
         </div>

   *  A default DNN installation includes the following theme objects for skins:      
 
      .. hlist::
         :columns: 4
         
         * BREADCRUMB
         * CONTROLPANEL
         * COPYRIGHT
         * CURRENTDATE
         * DNNCSSEXCLUDE
         * DNNCSSINCLUDE
         * DNNJSEXCLUDE
         * DNNJSINCLUDE
         * DOTNETNUKE
         * HELP
         * HOSTNAME
         * JQUERY
         * LANGUAGE
         * LEFTMENU
         * LINKS
         * LOGIN
         * LOGO
         * NAV
         * PRIVACY
         * SEARCH
         * STYLES
         * TAGS
         * TERMS
         * TEXT
         * Toast
         * TREEVIEW
         * USER

      .. include::  /../common/bptext/TipSkinningTool.rst



See Also
---------

.. class:: collapse-list

*  DNN Wiki: `DotNetNuke Skins <http://www.dnnsoftware.com/wiki/dotnetnuke-skins>`_
*  `Create CSS </design/CreatingThemes/CreateCSS.shtml>`_
*  `Create a Container </design/CreatingThemes/CreateContainer.shtml>`_



Sources
-------

.. class:: collapse-list

*  DNN Community Blog: `DotNetNuke Skinning 101 (Part 1) <http://www.dnnsoftware.com/community-blog/cid/132000/dotnetnuke-skinning-101-part-1>`_ and `DotNetNuke Skinning 101 (Part 2) <http://www.dnnsoftware.com/community-blog/cid/131999/dotnetnuke-skinning-101-part-2>`_ by `Joe Brinkman <http://www.dnnsoftware.com/activity-feed/userid/8129>`_

*  DNN Professional Training: `Creating HTML Skins <http://www.dnnsoftware.com/services/professional-training/training-videos-subscription/skinning-2-creating-html-skins>`_

