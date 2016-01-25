==================
 Style Your Theme
==================

Overview
--------

Modern webpage design relies heavily on the use of Cascading Style Sheets (CSS). Theme designers need a way to associate style sheets with their themes and containers in order to create designs that can fully leverage the capabilities of modern browsers.

Themes and container packages can utilize master style sheets that apply to all layouts or containers in the package. In addition, a CSS file can be associated with a specific layout template or container by giving it the same filename and placing it in the same folder. When a layout template (or container) is applied to a webpage (or module), all of the associated CSS files are automatically applied. Example: These three files are automatically associated with each other:

.. class:: collapse-list

*  MyLayout.ascx
*  MyLayout.css
*  MyLayout.doctype.xml

CSS files are applied hierarchically. If a style is defined for an element in multiple CSS files with equal specificity, the last CSS that mentions the same element overrides the style definitions in previously loaded CSS files (See `W3C specification on Cascading and Inheritance <https://www.w3.org/TR/CSS21/cascade.html>`_). By default, the CSS files are loaded in this order:

1. **Default.css** (~/Portals/_default/default.css) - The default CSS for the website.

#. **module.css** (~/DesktopModules/ModuleName/module.css) - The CSS file for every module type that appears on the page.

#. **Skin.css** (~/Portals/_default/Skins/SkinPackageName/skin.css) - The master CSS for the theme must be called <code>skin.css</code>.

#. **MyThemeTemplate.css** (~/Portals/_default/Skins/SkinPackageName/MyThemeTemplate.css) - The CSS for a specific layout template.

#. **Container.css** (~/Portals/_default/Containers/ContainerPackageName/container.css) - The master CSS for the theme containerss must be called <code>container.css</code>.

#. **MyContainer.css** 
(~/Portals/_default/Containers/ContainerPackageName/container.css) - The CSS for all containers in your theme.

#. **Portal.css** (~/Portals/PortalID/portal.css) - The CSS that can override elements in the installed themes. Website administrators can use this to override any styles in the theme or containers.

Steps
-----

1. Create a master style sheet for your theme (skin.css).  

   This style sheet should contain the following styles:
   
   *  common styles that apply for all of the layouts in your theme.  
   *  styles for theme objects used in all of your layouts. 
   
#. Create a separate style sheet for each layout in your theme (MyThemeLayout.css)

   Each style sheet should contain the following styles:
   
   * styles that are specific to a layout
   * styles for themes object that are only used in the associated layout

#. Create a master style sheet for your containers (container.css).  

   This style sheet should contain the following styles:
   
   *  common styles that apply for all of the containers in your theme.  
   *  styles for theme objects used in all of your containers. 
   
#. Create a separate style sheet for each container type in your theme (MyThemeLayout.css)

   Each style sheet should contain the following styles:
   
   * styles that are specific to a container
   * styles for themes object that are only used in the associated container

.. note::
   You are not required to have all of these style sheets.  You can include all of your styles in one master theme style sheet (skin.css). If you combine container styles in the style sheet for your theme, then the container will only display properly when used with your theme.

See Also

*  DNN Wiki: `DotNetNuke Skins <http://www.dnnsoftware.com/wiki/dotnetnuke-skins>`_
*  `Create Layout Template </design/CreatingThemes/CreateLayoutTemplate.shtml>`_
*  `Create Container </design/CreatingThemes/CreateContainer.shtml>`_

Sources
-------

*  DNN Professional Training: `Creating HTML Skins <http://www.dnnsoftware.com/services/professional-training/training-videos-subscription/skinning-2-creating-html-skins>`_
