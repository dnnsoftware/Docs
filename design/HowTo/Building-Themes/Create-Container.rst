================================
|InProgress| Create a Container
================================

Overview
===========

Containers allow designers to seamlessly integrate modules from many different developers into a cohesive site design. Containers can also include visual elements that allow site users to interact with the module.

* You can have a default container, which would be overridden by individual panes or modules if they provide their own style definitions.

* You can use different containers in a single page.

* You can mix and match any container with any CSS.

Steps
=========

#.	Create a new file for the container.

	.. note::
	
		* The container must contain exactly one pane.
		* The single pane must be called **ContentPane**.
		* The single pane must be defined as a server control by adding **runat="server"** to the element.
		* DNN recognizes only the folowing HTML elements as valid panes: <td> (table cells), <div>, <p>, and <span>

	Example: A very basic container.
    
        * Html::
        
            <div id="ContentPane" runat="server"></div>
            
        * ASCX::
    
            <%@ Control AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Containers.Container" %>
            <div id="ContentPane" runat="server"></div>

#.  (Optional) Add theme objects to your container for a more dynamic container.


.. raw:: html

    <ol>

    <li>(Optional) Add theme objects to your container for a more dynamic page.
        <p><object width="100%" data="../../common/bptext/BP-AddThemeObjects.html"></object></p>

        <p>The following theme objects are relevant to containers:</p> <!-- Joe will provide the complete list -->
ACTIONBUTTON
DROPDOWNACTIONS
ICON
LINKACTIONS
PRINTMODULE
TEXT
TITLE
VISIBILITY
        <table width=100%>
        <tr>
            <td valign=top>
                ACTIONBUTTON<br>
                ACTIONS<br>
                DROPDOWNACTIONS<br>
            </td>
            <td valign=top>
                ICON<br>
                LINKACTIONS<br>
                PRINTMODULE<br>
            </td>
            <td valign=top>
                TITLE<br>
                VISIBILITY
            </td>
        </tr>
        </table>
        <p><object width="100%" data="../../common/bptext/BP-TipSkinningTool.html"></object></p>
    </li>


    <h2> Example </h2>
    <xmp>
    </xmp>


    <h2> See Also </h2>
    <ul>
        <li><a href="CreateCSS.html">Create CSS</a></li>
        <li><a href="CreateLayoutTemplate.html">Create Layout Template</a></li>
    </ul>


    <h2> Sources </h2>
    <ul>
        <li>DNN Professional Training: <a href="http://www.dnnsoftware.com/services/professional-training/training-videos-subscription/skinning-2-creating-html-skins"></a>Creating HTML Skins</li>
    </ul>