========================
 Common Module Features
========================

DNN provides many features that simplify module development. Some features are handled completely by the platform and don't require much effort from developers. Others require a simple configuration setting in the module manifest. Some features are provided as a set of APIs that developers can leverage to speed development. 

Regardless of how a feature is implemented, they are all provided to solve common development tasks that are frequently required in web application development.

Themes & Containers
-------------------

While not traditionally considered part of module development, themes and containers play a big role in how a module is displayed on a page. Understanding the relationship between these elements will help you build modules which play well with other content on the page.

Themes are the primary mechanism used to define the look and feel of pages within DNN. Modules should be designed to work with a wide variety of styles. When modules are placed on a page, it is the theme, through the use of panes, which defines where modules can be placed.

.. tip::
   When creating module specific styles, be sure to scope your styles to a root element within your module (usually this will be a :code:`<div>` that wraps all of your markup). This ensures your styles will generally be more specific than generic styles defined in the theme.

Once a module is placed on the page, DNN will automatically wrap the module in a container. Containers are part of the theming system and define the look and feel for content blocks on the page. Additionally, containers provide the user interface (UI) elements (e.g. module title, module action menu and action links) for managing the module. 

Module Action Menu
------------------

The module action menu provides access to common module functionality. Menu items are dynamically created based on features implemented by the associated module or by the module and site settings.

|module-action-menu|

DNN gives developers several methods of customizing the module action menu. It can be as simple as providing a link to a help page in your module manifest. If your module implements the :code:`IPortable` or :code:`ISearchable` interfaces then additional menu items will be displayed. Developers can also create their own custom menu items by implementing the :code:`IActionable` interface.

Module Settings
---------------

DNN contains an extensive settings management system. When coding modules you will frequently need to access common host, portal, tab and module settings to determine what features you want to enable in your module. The platform manages storing and retrieving these settings which removes this burden from the developer.

Additionally, DNN enables module developers to extend module settings. You can create your own custom module settings and the associated UI used for managing those settings.

|module-settings|

 
Packaging
---------

Once you have finished building your module, you need a way to install that module on other DNN sites. DNN packages are essentially .zip files with a custom DNN manifest. The manifest is an xml file with a .dnn extension, that defines all of the components of your module. The manifest is essentially a set of instructions that tell DNN exactly how to install your module (or other extension).

This approach to packaging, makes it simple for module developers to create module packages. While it is possible to create packages manually, automation can simplify many of the packaging steps. The **Module Creator** and the **Extensions** page both offer access to the module packaging wizard, and the standard module templates include build scripts for automatically bundling packages as part of the build step.                                         

|module-package|

Security
--------

DNN includes a robust, role-based access control system that provides administrators complete control over who can view, create and edit content. This security system provides granular control at the site, page and module level. The security framework can be further extended by module developers to allow for even more granularity of permissions at the module level.

|module-permissions|

As a module developer, you have access to a security API that can be used to enhance your module. A quick API call can determine a users current set of permissions. Module features can then be adjusted based on the results of this permissions check.


..  ***** Image Substitutions *****

.. |module-action-menu| image:: /../common/img/module-action-menu.png
    :class: img-responsive img-600 dnn-border
    :alt:  

.. |module-settings| image:: /../common/img/module-settings.png
    :class: img-responsive img-600 dnn-border
    :alt:  

.. |module-package| image:: /../common/img/module-package.png
    :class: img-responsive img-600 dnn-border
    :alt:  

.. |module-permissions| image:: /../common/img/module-permissions.png
    :class: img-responsive img-600 dnn-border
    :alt:  
