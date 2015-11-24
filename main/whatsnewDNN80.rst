=====================
What's New in DNN 8.0
=====================

.. contents::
   :depth: 2
   :local:
   :backlinks: top


New Features
------------

NEW: MVC and SPA Module Development Support
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



NEW: OAuth2 Server Support
^^^^^^^^^^^^^^^^^^^^^^^^^^



NEW: New HTML Editor
^^^^^^^^^^^^^^^^^^^^



NEW: Dynamic Content Creator
^^^^^^^^^^^^^^^^^^^^^^^^^^^^



NEW: New Default Skin and Template
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



NEW: Custom DNN Distributions
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



Improved Features
-----------------

IMPROVED: Updated DNN Architecture
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



IMPROVED: Moved Telerik Wrapper Controls to Standalone Assembly
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Although Telerik RadControls are still shipped with DNN 8.0, these controls are moved to a standalone assembly to reduce our reliance on Telerik. If you rely on these wrappers, simply add a reference to the new assembly in your code.

..
	# Has this been implemented already?
	# What is the name of the assembly?


IMPROVED: Converted DNN Platform from WSP to WAP
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The DNN platform was converted from a website project (WSP) to a web application project (WAP). WAP code compiles into a single assembly, which generally reduces the initial load time and improves resource utilization on the server.


Deprecated Features
-------------------

DEPRECATED: Features Moved to GitHub
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To improve performance, these features were removed from the core platform, because they are no longer relevant or are rarely used. If you still rely on these features, you can reenable the functionality by reinstalling the appropriate module or provider from the DNN Community section in GitHub.

* `ASP2MenuNavigationProvider <https://github.com/DNNCommunity/NavigationProviders>`_
* `DNNDropDownNavigationProvider <https://github.com/DNNCommunity/NavigationProviders>`_
* `DNNMenuNavigationProvider <https://github.com/DNNCommunity/NavigationProviders>`_
* `DNNTreeNavigationProvider <https://github.com/DNNCommunity/NavigationProviders>`_
* `Newsletter Module`
* `RequestFilter`
* `SiteLog <https://github.com/DNNCommunity/Dnn.SiteLog>`_
* `UsersOnline`
* `Vendors/Banners Modules <https://github.com/DNNCommunity/DNN.Vendors>`_
* `Widget Framework`



DEPRECATED: web.config > appSettings node > connectionString
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

ASP.NET 1.x did not have support for a connectionStrings area; therefore, DNN modules used a connectionString setting in the appSettings node in DNN's web.config.

In ASP.Net 2.0, Microsoft introduced a new dedicated connectionStrings node inside web.config; therefore, connectionString in appSettings is no longer required.

If one of your modules still requires connectionString in appSettings, simply add it back to your web.config.


DEPRECATED: Features Previously Deprecated
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

These features were previously deprecated from the core platform, and the code was cleaned up in this release.

* SolPartMenuNavigationProvider (and associated skin objects)
* Feed Browser
* Webslice Support
* What's New Module
* ContentList Module





..
   # Should these be See Alsos?
   #
   # Sources:
   # .. [ref] Brinkman, Joe. "A Break with the Past." DNN Community Blog. September 24, 2015. Accessed November 24, 2015. http://www.dnnsoftware.com/community-blog/cid/155269/a-break-with-the-past.
   # .. [ref] "DNN 8 Breaking Changes." DNN Wiki. July 14, 2015. Accessed November 24, 2015. http://www.dnnsoftware.com/wiki/dnn-8-breaking-changes.
