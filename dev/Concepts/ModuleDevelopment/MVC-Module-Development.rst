===================================
 |InReview| MVC Module Development
===================================

.. include:: /../common/stub-overview.txt

Overview
--------

The MVC module type was introduced in DNN 8.0. This new module framework integrates ASP.Net MVC 5 with the Web Forms based DNN platform. The DNN MVC implementation focuses on creating a familiar development experience for ASP.Net MVC and DNN module developers. 

DNN MVC modules are not able to use all of the ASP.Net MVC features due to incompatibilities between ASP.Net MVC and ASP.Net Web Forms. Some features, like MVC routing, are limited due to conflicts with pre-existing features in the DNN platform that rely on Web Forms. (See :doc:`Unsupported-MVC-Features`)

MVC modules are first-class extension types in DNN and can use all of the standard DNN module features. All DNN module types can co-exist on a single page, and it should not be apparent to the user what framework was used to build the module.


MVC Module Architecture
-----------------------------

The MVC module type implements the model-view-controller pattern that separates an application into three main components: 

*  **Models** are responsible for implementing the domain logic, and often store and retrieve data in the database.

*  **Views** are responsible for rendering the module's user interface (UI). Typically, views are created based on data provided by the model. For example, the default view in DNN 8 MVC module template uses a model containing a collection of Items for rendering the view.

   .. code-block:: csharp
   
      @model IEnumerable<Dnn.Modules.DnnMvcModule.Models.Item>
      
      <div id="Items-@Dnn.ModuleContext.ModuleId">
          @if (Model.Count() == 0)
          {
              <p>No items defined.</p>
          }
          else
          {
              <ul class="tm_tl">
                  @foreach (var item in Model)
                  {
                      <li class="tm_t">
                          <h3>@item.ItemName</h3>
                          <div class="tm_td">@item.ItemDescription</div>
                          @{
                              if (Dnn.ModuleContext.IsEditable)
                              {
                                  <div>
                                      <a href="@Url.Action("Edit", "Item", new {ctl = "Edit", itemId = item.ItemId})">@Dnn.LocalizeString("EditItem")</a>
                                      <a href="@Url.Action("Delete", "Item", new {itemId = item.ItemId})">@Dnn.LocalizeString("DeleteItem")</a>
                                  </div>
                              }
                          }
                      </li>
                  }
              </ul>
          }
      </div>

*  **Controllers** are responsible for handling user interaction, retrieving and updating the model, and selecting which view is used. 

Although there are differences in how the presentation layer is composed, the logical architecture of an MVC module is similar to that of a Web Forms module.

.. figure:: /../common/img/module-architecture-mvc.png
   :class: img-responsive img-600 dnn-border
   :alt: 
   
   Logical Architecture of an MVC Module 

When a DNN page is requested, the framework will look up the requested module control in the module definition. In an MVC module, the module control identifies a specific namespace, controller and action. The output from the controller action is then rendered to a string and subsequently injected into the page. 

Building MVC Modules
--------------------

Unlike Web Forms modules, Visual Studio only supports a single project type for MVC projects. MVC project types in Visual Studio include additional scaffolding support for creating new controllers and views. These Visual Studio extensions speed up development and ensure that controllers and views follow the standard MVC conventions. 

.. note::
   There are no additional tools currently available for creating MVC modules.

The ASP.Net MVC framework relies on `Convention over Configuration <https://en.wikipedia.org/wiki/Convention_over_configuration>`_ to simplify development. DNN modules follow all of the ASP.Net MVC conventions and include DNN specific conventions as well. MVC module conventions include:

.. class:: collapse-list

* Controller names must include the "controller" suffix
* Views must be in a folder inside a **Views** folder that matches the controller name (e.g. a view for the Home controller should be in **/views/Home** folder).
* The default view for an action must be named for the action (e.g. the default view for an index action must be named index.cshtml).
* Shared layouts must be placed in the **/views/shared** folder
* Shared layout names must be prefixed with an underscore (_)
* Bound HTML form fields must have the same name as the corresponding model property
* Modules must be created in the **DesktopModules/MVC** folder.
* Controllers should be in a Controllers folder
* Models should be in a Models folder
* Static content files like stylesheets and images should be placed in a Content folder
* JavaScript files should be placed in a Scripts folder

.. note::
   MVC conventions can be overridden through code, although it is not recommended.

Accessing DNN Features
----------------------

Due to differences between MVC and Web Forms, some DNN features can't be accessed using the traditional methods ulitized in Web Forms modules. New feature APIs were added in DNN 8 to make these common DNN features available to MVC developers. These new feature APIs include:

* **Localization** - The new DNN helper object includes a LocalizeString method. This helper object can be used in your view for localizing your module.

* **Module Actions** - DNN includes the ModuleAction and ModuleActionItems attributes for identifying custom module actions. These attributes can only be used with controller action methods.

* **Base Controller Class** - MVC controllers should inherit from the DnnController class. This class provides access to the DNN Module and Portal context objects, and is similar to the PortalModuleBase class for Web Forms module developers. 

Packaging MVC Modules
---------------------

MVC modules created using the :doc:`DNN 8 Module Template </HowTo/CreatingModules/Module-Templates>` include MS Build scripts to automatically bundle the module files and module manifest.

.. note::
   The package wizard, located in the DNN Module Creator and the Extensions page, doesn't support creating packages for MVC modules.

MVC module packages include the following files:

#. Required

   .. class:: collapse-list
   
   * **Views** (.cshtml or .vbhtml) - contain the markup needed to render your module UI.
   * **Manifest file** (.dnn) - contains the module definition information required for installing the module.
   * **Assemblies** (.dll) - are the compiled module code and 3rd party reference libraries. WSP projects will not have an assembly for the compiled module, but may still include 3rd party reference libraries.
   * **SQL Scripts** (.sqldataprovider) - are the code required to create or update your module's database objects.
     
#. Optional

   .. class:: collapse-list

   * **Resource files** (.resx) - contain localization strings.
   * **JavaScript files** (.js) - contain code used for client-side logic.
   * **Stylesheets** (.css) - contain the custom styles needed by your module.
   * **Text files** (.txt) - include the release.txt and license.txt files that are displayed during module installation.

**Next:** :doc:`SPA-Module-Development`

See Also
--------

.. class:: collapse-list

* How-To: :doc:`/HowTo/CreatingModules/Creating-Modules`
* How-To: :doc:`/HowTo/PackagingExtensions/Packaging-Extensions`
* Wikipedia: `Model-View-Controller <https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller>`_
* :doc:`Unsupported-MVC-Features`

