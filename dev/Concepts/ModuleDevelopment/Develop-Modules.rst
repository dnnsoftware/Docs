================================
 Overview of Module Development
================================

.. toctree::
   :hidden: 

   Module-Features
   Module-Architecture
   Web-Forms-Module-Development
   MVC-Module-Development
   SPA-Module-Development
   Unsupported-MVC-Features

The DNN platform provides many benefits to web developers. DNN provides common features like user management, role-based security, file management, and more. In this topic we'll cover how DNN Module Development which is the primary method for building web applications and web sites that run on DNN. You'll learn what a module is and the high-level concepts involved in module development.

What is a Module?
-----------------   
When looking at a typical web page, you can often identify separate page elements and content blocks. In DNN, page elements (e.g. site menu, login link, search bar) are included as part of the Theme. Content blocks are normally managed using DNN modules.

|module-overview|

The module is a foundational building block for extending DNN, and is the primary extension type that enables users to view, create and edit content. All DNN administrative features are implemented as modules.

.. tip::
   The DNN platform source code provides more than two dozen modules that you can use as examples of how to build modules for DNN.

Due to the modular nature of page composition in DNN, modules are usually built to manage and display a single content type. 

.. tip::
   Consider creating multiple modules when managing complex content types, or include rich templating support so that administrators can control the layout of content on the page. 

There are many different frameworks and approaches to developing modules. The three primary frameworks are:

* Web Forms - This is the traditional framework for creating DNN modules that uses ASP.Net Web Forms based controls.
* MVC - This framework was introduced in DNN 8 and utilizes ASP.Net MVC framework for creating modules.
* SPA - This framework enables you to build modules using plain HTML, JavaScript and CSS. Developers are free to use their preferred SPA framework.

Once you have selected the framework you will use, then you need to identify the development approach you will follow.  Often this is a choice between choosing a manual development approach where the entire module is built by hand, or a more automated approach where the basic module foundation is created using a template or other automation tool.

**Next:** :doc:`Module-Features`

See Also
--------

* :doc:`/HowTo/CreatingModules/Creating-Modules`

..  ***** Image Substitutions *****

.. |module-overview| image:: /../common/img/module-overview.png
    :class: img-responsive img-600 dnn-border
    :alt: Modules are used to manage and display content on the page.
