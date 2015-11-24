=====================
What's New in DNN 8.0
=====================

New Features
^^^^^^^^^^^^

.. list-table::
   * [ref] MVC and SPA module development support (_refNewFeatMVCSPA)
   * [ref] OAuth2 server support (_refOAuth2)
   * [ref] New HTML Editor (_refHTMLEditor)
   * [ref] Dynamic Content Creator (_refDynamicContent)
   * [ref] New default skin and template ( _refDefaultSkin)
   * [ref] Custom DNN distributions (_refCustomDistrib)

Improvements
^^^^^^^^^^^^

.. list-table::
   * [ref] Updated DNN architecture (_refDNNArch)
   * [ref] Moved Telerik wrapper controls to a standalone assembly (_refTelerikWrapperControls)
   * [ref] Converted DNN platform from WSP to WAP (_refPlatformWSPWAP)

Deprecated Features
^^^^^^^^^^^^^^^^^^^

.. list-table::
   * [ref] **Moved to GitHub** (_refMovedGitHub)
      * SiteLog
      * UsersOnline
      * Newsletter Module
      * Vendors/Banners Modules
      * ASP2MenuNavigationProvider
      * DNNDropDownNavigationProvider
      * DNNMenuNavigationProvider
      * DNNTreeNavigationProvider
      * RequestFilter
      * Widget Framework
      * Users Online

   * [ref] web.config > appSettings node > connectionString (_refConnectionStr)

   * [ref] **Previously Deprecated** (_refPrevDeprecated)
      * SolPartMenuNavigationProvider (and associated skin objects)
      * Feed Browser
      * Webslice Support
      * What’s New Module
      * ContentList Module




.. _refNewFeatMVCSPA:
NEW: MVC and SPA Module Development Support
-------------------------------------------



.. _refOAuth2:
NEW: OAuth2 Server Support
--------------------------



.. _refHTMLEditor:
NEW: New HTML Editor
--------------------



.. _refDynamicContent:
NEW: Dynamic Content Creator
----------------------------



.. _refDefaultSkin:
NEW: New Default Skin and Template
----------------------------------



.. _refCustomDistrib:
NEW: Custom DNN Distributions
------------------------------------------------------



.. _refDNNArch:
IMPROVED: Updated DNN Architecture
----------------------------------



.. _refTelerikWrapperControls:
IMPROVED: Moved Telerik Wrapper Controls to Standalone Assembly
---------------------------------------------------

Although Telerik RadControls are still shipped with DNN 8.0, these controls are moved to a standalone assembly to reduce our reliance on Telerik. If you rely on these wrappers, simply add a reference to the new assembly in your code:
.. code::   `include assemblyname`

..
	# Has this been implemented already?
	# What is the name of the assembly?


.. _refPlatformWSPWAP:
IMPROVED: Converted DNN Platform from WSP to WAP
---------------------------------------------------

The DNN platform was converted from a website project (WSP) to a web application project (WAP). WAP code compiles into a single assembly, which generally reduces the initial load time and improves resource utilization on the server.


.. _refMovedGitHub:
DEPRECATED: Features Moved to GitHub
------------------------------------

.. list-table::
   * SiteLog
   * UsersOnline
   * Newsletter Module
   * Vendors/Banners Modules
   * ASP2MenuNavigationProvider
   * DNNDropDownNavigationProvider
   * DNNMenuNavigationProvider
   * DNNTreeNavigationProvider
   * RequestFilter
   * Widget Framework
   * Users Online

To improve performance, these features were removed from the core platform, because they are no longer relevant or are rarely used.

If you still rely on these features, you can reenable the functionality by reinstalling the appropriate module or provider from the DNN Community section in GitHub.


.. _refConnectionStr:
DEPRECATED: web.config > appSettings node > connectionString
------------------------------------------------------------

ASP.NET 1.x did not have support for a connectionStrings area; therefore, DNN modules used a connectionString setting in the appSettings node in DNN's web.config.

In ASP.Net 2.0, Microsoft introduced a new dedicated connectionStrings node inside web.config; therefore, connectionString in appSettings is no longer required.

If one of your modules still requires connectionString in appSettings, simply add it back to your web.config.


.. _refPrevDeprecated:
DEPRECATED: Features Previously Deprecated
------------------------------------------

.. list-table::
   * SolPartMenuNavigationProvider (and associated skin objects)
   * Feed Browser
   * Webslice Support
   * What’s New Module
   * ContentList Module

These features were previously deprecated from the core platform, and the code was cleaned up in this release.


..
   # Sources:
   # * http://www.dnnsoftware.com/community-blog/cid/155269/a-break-with-the-past
   