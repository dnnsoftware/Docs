========================
 SPA Module Development
========================

Overview
--------

Single Page Application (SPA) frameworks are a newer alternative to server-side web development frameworks such as ASP.NET. SPA replaces the full-page updates of server-side frameworks, with small targeted updates of select page elements. This light-weight approach results in a faster, more responsive UI. 

DNN's SPA module type simplifies the creation of modules that simulate traditional SPA applications, and that use AJAX for all server interactions.

The SPA module framework is not designed to replace the use of SPA frameworks such as AngularJS, Knockout and React. Instead, it supplements these other frameworks by providing DNN specific functionality.

SPA Module Architecture
-----------------------------

The SPA module type uses HTML files as the primary view rendering mechanism. Each HTML file loads the necessary JavaScript and CSS to properly render the UI. SPA modules also make AJAX calls to the business layer via the service layer. This architecture is similar to the mobile application architecture for Web Forms modules (see :ref:`mobile-architecture`).

.. figure:: /../common/img/module-architecture-spa.png
   :class: img-responsive img-600 dnn-border
   :alt: 
   
   Logical architecture of a SPA module 

When a DNN page is requested, the framework looks up the requested module control in the module definition. In an SPA module, the module control identifies a specific HTML file. DNN tokens in the HTML file are replaced with site specific data before the HTML is injected into the page. 

Building SPA Modules
--------------------

You have more development options available when building SPA modules compared to MVC modules. The server side code can be created in Visual Studio as Web Application Project (WAP) or Web Site Project (WAP) types. (See `Web Application Projects versus Web Site Projects in Visual Studio <https://msdn.microsoft.com/en-us/library/dd547590%28v=vs.110%29.aspx>`_.) Because it is just plain HTML, JavaScript and CSS, the presentation layer can be built using your favorite code editor and doesn't require the use of Visual Studio. 

You can choose to build the SPA module with all presentation layer code in one project and all server side code in a separate project. This approach makes it easy to use different development tools that are optimized for server-side or client-side development.

Alternatively, you can use Visual Studio to create a single project that includes both server-side and client-side components. This approach leverages the MS Build system to easily package your module as part of your development process. The DNN SPA Module template is set up for this approach. 
   
Accessing DNN Features
----------------------

Web Forms and MVC modules can easily access rendering-related DNN features because they are both server-side technologies. SPA modules use client-side technology and, therefore, require a different approach to access DNN features. 

A SPA module uses standard HTML, and DNN provides custom tokens that can be included in the HTML to access data and APIs in a way that is already familiar to DNN developers. (See `Token Replacement API <http://www.dnnsoftware.com/wiki/ipropertyaccess>`_ and `Standard DNN Tokens <http://www.dnnsoftware.com/wiki/tokens>`_)

The following SPA module tokens can be used in your HTML:

*  **JavaScript** or **JS** registers a JavaScript file with the Client Resource Manager. 

*  **CSS** registers a stylesheet with the Client Resource Manager.

*  **AntiForgeryToken** includes an anti-forgery token in the page to prevent Cross-Site Request Forgery (CSRF) attacks.

*  **ModuleAction** identifies custom module actions.

*  **Resx** includes a localized resource string in the page.

*  **Request** includes the page request querystring in the page.

*  **ModuleContext** includes a DNN module context property in the page.  Supported module context properties include:

   .. class:: collapse-list
   
   *  ModuleId
   *  TabModuleId
   *  TabId
   *  PortalId
   *  IsSuperUser
   *  EditMode
   *  *SettingName* - you can access a specific module setting by using the setting name instead of a predefined property name.

Packaging SPA Modules
---------------------

SPA modules created using the :doc:`DNN 8 Module Template </HowTo/CreatingModules/Module-Templates>` include MS Build scripts to automatically bundle the module files and module manifest.

.. note::
   The package wizard (located in the DNN Module Creator and the Extensions page) doesn't support SPA modules.

SPA module packages include the following files:

#. Required

   .. class:: collapse-list
   
   * **Views** (.html) contain the markup needed to render your module's output.
   * **Manifest file** (.dnn) contains the module definition information required for installing the module.
   * **Assemblies** (.dll) are the compiled module code and third-party reference libraries. WSP projects do not have an assembly for the compiled module, but might still include third party reference libraries.
   * **SQL Scripts** (.sqldataprovider) are the code required to create or update your module's database objects.
     
#. Optional

   .. class:: collapse-list

   * **Resource files** (.resx) contain localization strings.
   * **JavaScript files** (.js) contain code used for client-side logic.
   * **Stylesheets** (.css) contain the custom styles needed by your module.
   * **Text files** (.txt) include the release.txt and license.txt files that are displayed during module installation.

See Also
--------

.. class:: collapse-list

* How-To: :doc:`/HowTo/CreatingModules/Creating-Modules`
* How-To: :doc:`/HowTo/PackagingExtensions/Packaging-Extensions`
* Wikipedia: `Model-View-Controller <https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller>`_

