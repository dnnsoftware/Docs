=====================================
 |InReview| SPA Module Development
=====================================

Overview
--------

Single Page Application (SPA) frameworks are a modern alternative to server-side web development frameworks like ASP.NET. The DNN SPA module type simplifies creation of modules that resemble traditional SPA applications by relying on client-side presentation logic, and that make use of AJAX for all server interactions.

The SPA module framework is intended to make it easy to create and package modules using existing client-side technologies and is not designed to replace the use of frameworks like AngularJS, Knockout, React and other SPA frameworks.

SPA Module Architecture
-----------------------------

The SPA module type uses an HTML file as the primary view rendering mechanism. The HTML file will load the necessary JavaScript and CSS to properly render the UI. SPA modules use JavaScript and AJAX calls to the service layer for all calls to the business layer. This architecture is similar to the mobile application architecture for Web Forms modules (see :ref:`mobile-architecture`).

.. figure:: /../common/img/module-architecture-spa.png
   :class: img-responsive img-600 dnn-border
   :alt: 
   
   Logical architecture of a SPA module 

When a DNN page is requested, the framework looks up the requested module control in the module definition. In an SPA module, the module control identifies a specific html file. The HTML file is parsed by the DNN token replacement engine so that DNN specific data can be replaced as necessary into the HTML. The resulting HTML is then injected into the page. When the page is rendered in the browser, the associated JavaScript and CSS will be used to complete rendering of the module UI.

Building SPA Modules
--------------------

You have more development options available when building SPA modules. The presentation layer can be built using your favorite code editor. The server side code can be created using either the Web Application Project (WAP) or Web Site Project (WAP) types. (See `Web Application Projects versus Web Site Projects in Visual Studio <https://msdn.microsoft.com/en-us/library/dd547590%28v=vs.110%29.aspx>`_.) 

The logical architecture for SPA modules shows a natural separation between server side and client side code. You can choose to build the SPA module as two separate projects with all of the code for the presentation layer in one project and all of the server side code in a separate project. This approach makes it easy to use different development tools that are optimized for server side or client side development.

Alternatively, you can choose to use Visual Studio to create a single project which includes both the server side and client side components. This approach allows you to more easily leverage the MS Build system to package your module as part of the standard development process.

.. note::
   The DNN 8 SPA Module template uses the latter approach for creating SPA modules. 
   
Accessing DNN Features
----------------------

Web Forms and MVC modules can leverage DNN features when rendering the UI because they are both server-side technologies with direct access to the DNN APIs. The UI for SPA modules are rendered using client-side technology and therefore requires a different approach for accessing DNN features. 

Since a SPA module's UI is built using standard HTML, we extended DNN to include custom tokens that can be included in the HTML. These tokens provide an HTML friendly method to access data and APIs in a way that is already familiar to DNN developers. (See `Token Replacement API <http://www.dnnsoftware.com/wiki/ipropertyaccess>`_ and `Standard DNN Tokens <http://www.dnnsoftware.com/wiki/tokens>`_)

The following new tokens were added to support SPA modules:

*  **JavaScript** or **JS** - registers a JavaScript file with the Client Resource Manager. 

*  **CSS** - registers a stylesheet with the Client Resource Manager.

*  **AntiForgeryToken** - includes an anti-forgery token in the page to prevent Cross-Site Request Forgery (CSRF) attacks.

*  **ModuleAction** - identifies custom module actions.

*  **Resx** - includes a localized resource string in the page.

*  **Request** - includes the page request querystring in the page.

*  **ModuleContext** - includes a DNN module context property in the page.  Supported module context properties include:

   .. class:: collapse-list
   
   *  ModuleId
   *  TabModuleId
   *  TabId
   *  PortalId
   *  IsSuperUser
   *  EditMode
   *  *SettingName* - you can access a specific module setting by using the setting name instead of the one of the predefined property names.

Packaging SPA Modules
---------------------

SPA modules created using the :doc:`DNN 8 Module Template </HowTo/CreatingModules/Module-Templates>` include MS Build scripts to automatically bundle the module files and module manifest.

.. note::
   The package wizard, located in the DNN Module Creator and the Extensions page, doesn't support creating packages for SPA modules.

SPA module packages include the following files:

#. Required

   .. class:: collapse-list
   
   * **Views** (.html) contain the markup needed to render your module UI.
   * **Manifest file** (.dnn) contains the module definition information required for installing the module.
   * **Assemblies** (.dll) are the compiled module code and third party reference libraries. WSP projects will not have an assembly for the compiled module, but may still include third party reference libraries.
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

