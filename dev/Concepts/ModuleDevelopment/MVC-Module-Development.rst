========================
 MVC Module Development
========================

Overview
--------

The MVC module type integrates ASP.NET MVC 5 with the Web Forms based DNN platform. The DNN MVC implementation focuses on creating a familiar development experience for ASP.NET MVC and DNN module developers. 

Incompatibilities between ASP.NET MVC and ASP.NET Web Forms cause conflicts with pre-existing Web Forms based features in the DNN platform. Therefore, DNN implementations of some ASP.NET features, such as MVC routing, are limited. (See :doc:`Unsupported-MVC-Features`)

MVC modules can use all of the standard DNN module features. All DNN module types can co-exist on a single page, and the user should not be able to distinguish which framework was used to build the module.


MVC Module Architecture
-----------------------------

The MVC module type implements the model-view-controller pattern that separates an application into three main components: 

*  **Models** implement the domain logic, and often store and retrieve data from the database.

*  **Views** render the module's user interface (UI). Typically, views are created based on data provided by the model. For example, the default view in the DNN 8 MVC module template uses a model that contains a collection of Items that are rendered by the view.

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

*  **Controllers** handle user interaction, retrieve and update the model, and select the view to use. 

Although the composition of the presentation layer is different, the logical architecture of an MVC module is similar to that of a Web Forms module.

.. figure:: /../common/img/module-architecture-mvc.png
   :class: img-responsive img-600 dnn-border
   :alt: 
   
   Logical architecture of an MVC module 

When a DNN page is requested, the framework looks up the requested module control in the module definition. In an MVC module, the module control identifies a specific namespace, controller, and action. The output from the controller action is then rendered to a string and subsequently injected into the page. 

Building MVC Modules
--------------------

Visual Studio only supports a single project type for MVC projects. However, the MVC project type in Visual Studio include additional scaffolding support for creating new controllers and views to speed up development and ensure that controllers and views follow the standard MVC conventions. 

.. note::
   Currently, Visual Studio is the only available tool for creating MVC modules.

The ASP.NET MVC framework relies on `Convention over Configuration <https://en.wikipedia.org/wiki/Convention_over_configuration>`_ to simplify development. DNN modules follow all of the ASP.NET MVC conventions and include DNN specific conventions as well. MVC module conventions include:

File Name Conventions
^^^^^^^^^^^^^^^^^^^^^

.. list-table:: 
   :widths: 30 70
   :header-rows: 1

   * - File Type
     - Convention
   * - Controller 
     - Name must include the "controller" suffix.
   * - Default View
     - Named for the action (e.g. the default view for an index action must be named index.cshtml).
   * - Shared layout
     - Name must be prefixed with an underscore (_).
     


File Location Conventions
^^^^^^^^^^^^^^^^^^^^^^^^^

.. list-table:: 
   :widths: 30 70
   :header-rows: 1
   
   * - File Type
     - Convention
   * - View
     - Inside **Views** folder that matches the controller name (e.g. a view for the Home controller should be in the **/Views/Home** folder)
   * - Shared layout
     - **/Views/Shared** folder
   * - MVC Module
     - **DesktopModules/MVC** folder
   * - Controller
     - Controllers folder (optional)
   * - Model
     - Models folder (optional)
   * - Static content file (e.g. stylesheets and images)
     - Content folder
   * - JavaScript file
     - Scripts folder
     
Miscellaneous Conventions
^^^^^^^^^^^^^^^^^^^^^^^^^

* Bound HTML form fields must have the same name as the corresponding model property.

Accessing DNN Features
----------------------

MVC modules cannot access some DNN features using the same methods available to Web Forms modules. Therefore, new feature APIs were added in DNN 8 to make these common DNN features available to MVC developers. These new feature APIs include:

* **Localization** - The new DNN helper object includes a LocalizeString method. This helper object can be used in your view when localizing your module.

* **Module Actions** - DNN includes the ModuleAction and ModuleActionItems attributes to identify custom module actions. These attributes can only be used with controller action methods.

* **Base Controller Class** - MVC controllers should inherit from the DnnController class. Similar to the PortalModuleBase class for Web Forms module developers, this class provides access to the DNN Module and Portal context objects. 

Packaging MVC Modules
---------------------

MVC modules created using the :doc:`DNN 8 Module Template </HowTo/CreatingModules/Module-Templates>` include MS Build scripts to automatically bundle the module files and module manifest.

.. note::
   The package wizard, located in the DNN Module Creator and the Extensions page, doesn't support creating packages for MVC modules.

MVC module packages include the following files:

#. Required

   .. class:: collapse-list
   
   * **Views** (.cshtml or .vbhtml) contain the markup needed to render your module UI.
   * **Manifest file** (.dnn) contains the module definition information required for installing the module.
   * **Assemblies** (.dll) are the compiled module code and third party reference libraries. WSP projects will not have an assembly for the compiled module, but may still include third party reference libraries.
   * **SQL Scripts** (.sqldataprovider) are the code required to create or update your module's database objects.
     
#. Optional

   .. class:: collapse-list

   * **Resource files** (.resx) contain localization strings.
   * **JavaScript files** (.js) contain code used for client-side logic.
   * **Stylesheets** (.css) contain the custom styles needed by your module.
   * **Text files** (.txt) include the release.txt and license.txt files that are displayed during module installation.

**Next:** :doc:`SPA-Module-Development`

See Also
--------

.. class:: collapse-list

* How-To: :doc:`/HowTo/CreatingModules/Creating-Modules`
* How-To: :doc:`/HowTo/PackagingExtensions/Packaging-Extensions`
* Wikipedia: `Model-View-Controller <https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller>`_
* :doc:`Unsupported-MVC-Features`

