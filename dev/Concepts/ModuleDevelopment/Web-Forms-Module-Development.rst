==============================
 Web Forms Module Development
==============================

Overview
--------

Web Forms module development is the most mature and well documented method for creating DNN modules. 


Web Forms Module Architecture
-----------------------------

Web Forms modules follow the standard DNN module architectural pattern (see :doc:`Module-Architecture`), and use a traditional server-side rendering model. When a page is requested, DNN will create an instance of the relevant module control as defined in the module definition. The module control inherits from a code-behind class that contains the presentation logic and that makes additional calls to the appropriate business methods in the Business Logic Layer. 

.. figure:: /../common/img/module-architecture-wf.png
   :class: img-responsive img-600 dnn-border
   :alt: 
   
   Logical Architecture of a Web Forms Module 
   
You can include web service endpoints to enable access by mobile applications if necessary. When accessing the module from a mobile application, the presentation layer moves to the mobile device and the service layer becomes the server-side endpoint that calls the appropriate business methods.

.. figure:: /../common/img/module-architecture-mobile.png
   :class: img-responsive img-600 dnn-border
   :alt: 
   
   Accessing Web Forms Module via a Web Service 

Building Web Forms Modules
--------------------------

Visual Studio is the preferred development environment for module development.  Modules can be created in Visual Studio using the following project types: 

.. class:: collapse-list

1. Web Site Project (WSP)
#. Web Application Project (WAP)

Modules built using the WSP project type include the source code as part of the module package. The source code is compiled at run-time and allows you to easily alter code directly on the server. While this approach provides flexibility in making updates, it also decreases startup performance and can complicate module upgrades.   

.. note::
   The WSP project type is not recommended for commercial module development because it requires the distribution of source code with your module.
   
WSP projects don't have a project file (.csproj or .vbproj) and instead rely on files being part of a complete website. When creating a WSP module, all of the user controls, and the associated code-behind files, and other related files, will be placed in a project folder under **DesktopModules** folder. All code files not associated with a user control must be placed in the **App_Code** folder in the web site root. This disjointed code model complicates module development and packaging.
   
Modules built using the WAP project type are compiled at development time and do not require packaging source code with your module. WAP projects have a project file and are created as standalone projects.  

.. note::
   Microsoft recommend this project type for ASP.Net development. (See `Web Application Projects versus Web Site Projects in Visual Studio <https://msdn.microsoft.com/en-us/library/dd547590%28v=vs.110%29.aspx>`_.) 
   
Visual Studio is recommended for module development. You can also create modules using standard text editors or the included DNN module creator; however, these tools don't provide .Net compiler support. Therefore, they are more suited for developing WSP-based modules.  

The DNN Module Creator automatically places files in the appropriate folders (**App_Code** and **DesktopModules**) and can be used to package the module at the end of your development process. 

You can organize your Web Forms project files any way you wish. Many module developers organize project files based on the logical architecture.  

Packaging Web Forms Modules
---------------------------

Modules created using the WAP project type can leverage MS Build scripts to automatically bundle the module files and module manifest. WSP-based modules can be packaged using the package wizard that is available in DNN. 

Regardless of project type, Web Forms module packages include the following files:

#. Required

   .. class:: collapse-list
   
   * **User Controls** (.ascx) - contain the markup needed to render your module UI.
   * **Code files** (.cs or .vb) - contain business logic, caching logic and data access code (only included for WSP project types).
   * **Manifest file** (.dnn) - contains the module definition information required for installing the module.
   * **Assemblies** (.dll) - are the compiled module code and 3rd party reference libraries. WSP projects will not have an assembly for the compiled module, but may still include 3rd party reference libraries.
   * **SQL Scripts** (.sqldataprovider) - are the code required to create or update your module's database objects.
     
#. Optional

   .. class:: collapse-list

   * **Resource files** (.resx) - contain localization strings.
   * **JavaScript files** (.js) - contain code used for client-side logic.
   * **Stylesheets** (.css) - contain the custom styles needed by your module.
   * **Text files** (.txt) - include the release.txt and license.txt files that are displayed during module installation.


**Next:** :doc:`MVC-Module-Development`

See Also
--------

.. class:: collapse-list

* Module Development: `DNN Video Library <http://www.dnnsoftware.com/videos>`_
* How-To: :doc:`/HowTo/CreatingModules/Creating-Modules`
* How-To: :doc:`/HowTo/PackagingExtensions/Packaging-Extensions`

