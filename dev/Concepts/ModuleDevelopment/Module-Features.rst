========================
 Common Module Features
========================

DNN provides many features that simplify module development. Some features are handled completely by the platform and don't require much effort from developers. Others require a simple configuration setting in the module manifest. Some features are provided as a set of APIs that developers can leverage to speed development. 

Themes & Containers
-------------------

While not traditionally considered part of module development, themes and containers play a big role in how a module is displayed on a page. Understanding the relationship between these elements will help you build modules that play well with other content on the page.

Themes define the look and feel of pages within DNN, and modules should be designed to work with a wide variety of styles. Through the placement of panes, the theme defines where modules can be positioned on a webpage.

.. tip::
   You can define styles specific to your module. If you do, define the scope of your styles in a root element (usually a :code:`<div>` that wraps your entire markup) within your module. This ensures that your styles will be more specific than the styles defined in the theme.
   
When a module is added to a page, DNN wraps a container around the module. The container defines the look and feel of content blocks on the page and provides user interface elements for managing the module, such as the module title, the module action menu, and the action links. 

Module Action Menu
------------------

The module action menu provides access to standard functionality such as module deletion, printing, content import/export and content placement. Menu items are dynamically created based on module features and on site settings.

.. figure:: /../common/img/module-action-menu.png
    :class: img-responsive img-600 dnn-border
    :alt:  
    
    Your module can customize the Module Action Menu

You can customize module action menu by implementing the following features in your module: 

* Provide a link to a help page manifest to change the **Help** link in the menu. 

* Implement the :code:`IPortable` interface to display the **Import** and **Export** links in the menu.
  
  .. note::
     The :code:`IPortable` interface is also used by DNN when an administrator creates a page or portal template, or when a page or portal template is used to create a page or portal. 
     
* Implement the :code:`ISearchable` interface to display the **Syndicate** link in the menu.

  .. note::
     The Syndicate feature requires an administrator to enable the syndication feature in the module settings.
     
* Implement the :code:`IActionable` interface to display custom menu items.
  
  .. note::
     Custom menu items are shown in their own menu under the pencil icon.  If IActionable is not implemented then the pencil icon menu will not be shown.

Module Settings
---------------

DNN contains a settings management system that includes a settings objects for Host, Portal, Tab, TabModule and Module entities. You might need to access these common settings to determine which of your module's features to enable. The platform manages the storage and retrieval of these settings to simplify module development.

You can also create custom settings and the associated UI used for managing those settings.

.. figure:: /../common/img/module-settings.png
    :class: img-responsive img-600 dnn-border
    :alt:  

    Show custom module settings

 
Packaging
---------

Modules must be packaged in a standard format to be shared with other DNN websites. DNN packages are essentially .zip files that include a custom DNN manifest. The manifest is an xml file with a .dnn extension, it defines how the components of your module are installed.

You can bundle modules into packages:
    * manually
    * by using the module packaging wizard, which is available through the **Module Creator** or the **Extensions** page, or

      .. figure:: /../common/img/module-package.png
         :class: img-responsive img-600 dnn-border
         :alt:  

         Click **Create Package** to start the wizard

    * by using the build scripts that come with standard module templates.                                        

Security
--------

DNN provides a role-based access control system that provides granular control at the site, page and module level. You can extend this system to increase granularity of permission settings at the module level.

.. figure:: /../common/img/module-permissions.png
   :class: img-responsive img-600 dnn-border
   :alt:  
   
   Include custom module permissions

Modules can also call a DNN security API to check a user's current permissions before enabling secured features.

**Next:** :doc:`Module-Architecture`

See Also
--------

* :doc:`/HowTo/CreatingModules/Creating-Modules`

