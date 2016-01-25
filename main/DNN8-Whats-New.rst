==================================
 What's New in DNN 8 and Evoq 8.3
==================================

DNN Platform 8.0 updates
------------------------

The following are updates geared towards extension developers and theme designers:

.. class:: collapse-list

*  Single Page Application (SPA) and MVC modules are now supported, so developers can create non-Webforms-based modules. Visual Studio 2015 templates for both types are also released.
*  The module settings API was updated to support strongly typed settings.
*  Incremental upgrade support is now possible through SqlDataProvider, cleanup files, and configuration merge files. This allows changes to the platform or third-party extensions without requiring a new versioned release.
*  Extension developers can now create admin and host pages through the DNN Manifest (.dnn).
*  Developers can now exclude individual CSS and/or JS files from being loaded or combined during minification through a new control.
*  Default.css now has versioning support, which can be set by theme designers to reduce the CSS that their themes need to override.
*  Third party components (CodeMirror and Newtonsoft) were upgraded to newer versions.
*  DAL 2 is enhanced to add a fluent configuration API that allows developers to separate their data implementation details from their models.
*  The DNN Platform now uses Web API 2.0.
*  JSON Web Token (JWT) authentication support is added to allow developers a way to expose WebAPI services for consumption outside of the framework, such as mobile applications. 

   .. warning::
      JWT authentication is still in beta. 


Additional changes:

.. class:: collapse-list

*  A new image handler is exposed to developers to be used for profile pictures throughout the application.
*  CK Editor is the new default HTML provider in new installations (replacing the Telerik RadEditor as default).
*  A number of Administration modules (including Vendors, Site Log, Newsletters) were removed from the base installation.
*  A new default theme that uses Bootstrap 3 is now available.
*  The base project was converted from a Website Project (WSP) to a Web Application Project (WAP) to help reduce application startup time.
*  The page output caching provider was moved from Evoq to the DNN Platform.
*  Password resets now use the same token as long as it isn't expired. This means that, if the user clicks **Send password** multiple times quickly, only a single token will be generated.
*  Password inputs now allow 39 characters instead of 20.
*  The default robots.txt now allows client-side resources to be indexed.
*  Text used throughout the entire application were reviewed for consistency.
*  The Breadcrumb theme object now outputs schema.org markup.
*  Fixed: The issue where some platform functionality injected CSS files too late, so that they couldn't be modified by skin.css.
*  SMTP now supports TLS authentication.



Evoq Content Basic 8.3 updates
------------------------------

All updates in DNN Platform 8.0, plus:

.. class:: collapse-list

*  Administrators can now manage a user's roles within the Users section of the Persona bar.
*  Fixed: Several issues around generating URLs for Digital Asset Manager.
*  Additional minor enhancements and bug fixes.



Evoq Content 8.3 updates
------------------------

All updates in Evoq Content Basic 8.3, plus:

.. class:: collapse-list

*  The new Optimizely connector and module provides a way to do A/B (split) testing within Evoq.
*  Additional minor enhancements and bug fixes.



Evoq Engage 8.3 updates
-----------------------

All updates in Evoq Content 8.3, plus:

.. class:: collapse-list

*  Users can now subscribe to activity stream posts and associated comments for items created within the activity stream.
*  Emojis are now supported in the activity stream.
*  The activity stream comment area now provides the same experience as creating a new post (support for images, videos, etc.).
*  Notifications for votes on Ideas were removed.
*  Comments in the Discussions module are now sortable by date, chronologically or reverse-chronologically. This sorting ability is also available for third-party extensions that use the Comments feature of Evoq Engage.
*  Users can now delete posts made by other users from their own activity stream.
*  Fixed: Issues where Ideas votes cannot be returned or added back.
*  Additional minor enhancements and bug fixes.

Sources
-------

.. class:: collapse-list

*  `DNN Installation in Codeplex <http://dotnetnuke.codeplex.com/releases/view/619410>`_
*  `DNN Software Downloads <http://www.dnnsoftware.com/services/customer-support/success-network/software-downloads/changelog>`_


