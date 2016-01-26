===============
 Theme Objects
===============

Overview
--------

.. How to have checkboxes on top that would filter what's displayed; i.e., HTML vs ASCX vs object token, DNN version. -->

Descriptions
------------

ACTIONBUTTON
   Displays a an action from the :term:`module action menu`.    

BREADCRUMB
   Displays the path to the current tab in the format (**>** is the default separator):
      
   PageName1 > PageName2 > PageName3

CONTROLPANEL
   Displays the DNN control panel. If no CONTROLPANEL theme object is defined in the theme, then a control panel control will be inserted at the top of the page.

COPYRIGHT
   Displays the copyright notice for the website.

CURRENTDATE
   Displays the current date on the server. 

DDRMENU
   Displays a menu using the DDRMenucontrol.

DNNCSSEXCLUDE
   Prevents a stylesheet reference from being included in the page.
   
DNNCSSINCLUDE
   Add a stylesheet reference to the page.
   
DNNJSEXCLUDE
   Prevents a JavaScript file reference from being included in the page.
   
DNNJSINCLUDE
   Add a JavaScript file reference to the page.
   
DOTNETNUKE
   Displays the copyright notice for DotNetNuke. (optional)

DROPDOWNACTIONS
   Displays the :term:`module action menu` as a drop down list.
   
HELP
   Displays a Help link, which sends email to the website's administrator, using the user's default email client.

HOSTNAME
   Displays the host title linked to the host URL. The host title and host URL are defined on the host settings page.

ICON
   Displays the module icon.

JQUERY
   Adds jQuery JavaScript reference to the page.

LANGUAGE
   Displays the language selector dropdown list or the language flags based on the theme object attribute settings.

LEFTMENU
   Displays a vertical menu layout.

LINKACTIONS

LINKS
   Displays a flat menu of links associated with the current tab level and the parent node.

LOGIN
   Displays “Login” for anonymous users and “Logout” for authenticated users.

LOGO
   Displays the website's logo.

NAV
   Displays a menu, according to the type specified in the ProviderName attribute.

PRINTMODULE
   Displays a link for the Print action from the :term:`module action menu`

PRIVACY
   Displays a link to the Privacy Information page for the website.

SEARCH
   Displays the search input box.

SIGNIN
   Displays the login control.

STYLES
   Allows you to add Internet Explorer-specific stylesheets to your theme.

TAGS
   Displays the Tag control allowing users to view and edit tags associated with the page or module.

TERMS
   Displays a link to the Terms and Conditions page of the website.

TEXT
   Displays localized text in your theme and supports the use of token replacement.

TITLE
   Displays the module title.
   
Toast
   Adds the toast notification control to the page. Toast messages will be shown when a new user notification or message is received.

TREEVIEW
   Displays a menu, similar to the Windows Explorer menu, using the DNN Treeview Control.

USER
   Displays a “Register” link for anonymous users or the user's name for authenticated users.

VISIBILITY
   Displays a visibility control for the module allowing users to show or hide a given module on the page.
   
Sources
-------

.. class:: collapse-list

*  `Timo Breumelhof <http://www.timo-design.nl/>`_ <i>DotNetNuke Skinning Guide</i> "Appendix B: Skin Objects"

*  `10 Pound Gorilla <http://www.10poundgorilla.com/>`_ `Skinning Tool / Online Reference for DNN Skins & Container Objects <http://www.10poundgorilla.com/DNN/Skinning-Tool>`_
