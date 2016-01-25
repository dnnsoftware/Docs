==================
 Creating Modules
==================
 
.. toctree::
   :hidden:

   Using-The-Module-Creator
   Module-Templates
..   CreatingModules/Create-Web-Forms-Module
..   CreatingModules/Create-MVC-Module
..   CreatingModules/Create-SPA-Module

Overview
--------

You can produce a module in different ways:

.. class:: collapse-list

* Create an entire module from scratch. For very simple modules, you can use the :doc:`DNN Module Creator <Using-The-Module-Creator>`.
* Start with module development templates, such as:

  .. class:: collapse-list

  * `DNN 8 Templates <https://github.com/dnnsoftware/DNN.Templates/releases>`_ 
  * `Chris Hammond's DotNetNuke Module and Theme Development Templates <https://github.com/ChrisHammond/DNNTemplates>`_ (`Installation instructions <http://www.chrishammond.com/blog/itemid/2616/using-the-new-module-development-templates-for-dot>`_)
  
  
* Customize a pre-existing module.

  .. include::  /../common/bptext/3rdPartyExtensions.inc

You can also use different programming frameworks (Web Forms, MVC, SPA) and languages (C#, VB) to create your module.

How to Create a Module Using Templates
--------------------------------------

Prerequisites
-------------

.. class:: collapse-list

* `A local DNN installation </common/Setup/SetUpDNN.shtml>`_ with **Host** permissions.
* Visual Studio 2015 is the recommended IDE for developing DNN modules.

Steps
-----

#. `Start a Visual Studio project using DNN templates. </dev/CreatingModules/StartVSProjWithTemplates.shtml>`_

#. **Modify the Visual Studio project to add functionality to your new module.**

   .. class:: collapse-list

   * `Create a Web Forms module using templates. </dev/CreatingModules/CreateWebFormsModule.shtml>`_

   * `Create an MVC module using templates. </dev/CreatingModules/CreateMVCModule.shtml>`_

   * `Create a SPA module using templates. </dev/CreatingModules/CreateSPAModule.shtml>`_

#. **Build, debug, and package.**

   |build-mode|
   
   a. **Build in debug mode.** This build produces .pdb files that are needed when stepping through your code.
   
   #. **Debug, if needed.**
   
   #. **Create the** `DNN Manifest </common/Extensions/DNNManifestSchema.shtml>`_.

   #. **Build in release mode.** This build creates an installation zip file (your module's package) in the folder :code:`DesktopModules`/yourorganization/yourmodule/:code:`install`.
   
   #. **Alternatively, you can manually** `package your module </common/Extensions/CreatePackage.shtml>`_.

#. **Test your module.**

   a. `Install the package. </common/Extensions/InstallExtension.shtml>`_

   #. In your DNN installation, apply the module to a pane in a new webpage.
   
      i. **Modules** > **Add New Module** 
      
         |add-module|
         
      #. Find your module in the **Available Modules** bar and drag it to the page.  
      
         |drag-module|

      #. Check how the webpage looks in different browsers.
      
   **Tip:** As part of your tests, run your module through the DNN `Extension Verification Service <http://evs.dnnsoftware.com>`_ (EVS) to perform the compatibility tests in three areas:
   
   *  **Module packaging**. EVS verifies:

      .. class:: collapse-list

      *  That a valid **.dnn** manifest file exists. EVS throws an error, if a required section is missing, or a warning, if an optional section is missing.
    
      *  That all files listed in the manifest exist in the package.
    
      *  That all files included in the package are listed in the manifest.
    
   *  **Data layer**. EVS verifies:

      .. class:: collapse-list

      *  That core database objects were not modified.
    
      *  That any SQL scripts in the module are compatible with Microsoft Azure SQL Database and can execute without errors. If Azure-incompatible SQL scripts are found, EVS generates Azure-compatible versions of those scripts and makes them available in a zip file; however, you must verify that the converted scripts still behave as expected.
    
      *  That :code:`{databaseOwner}` and :code:`{objectQualifier}` tokens are correctly used.
    
      *  That the uninstall script completely removes all objects added by the installation script.

   *  **Assemblies**. EVS verifies:

      .. class:: collapse-list

      *  That no assembly errors exist.
    
      *  That every assembly reference points to an assembly that exists either in DNN or in the .NET global assembly cache (GAC). If the assembly is not found, EVS returns an error.
      
See Also
--------

.. class:: collapse-list

*  `Providers Reference </dev/REF-Providers.shtml>`_
*  :doc:`DNN 8 API Reference <API>`

Sources
-------

.. class:: collapse-list

*  DNN Wiki: `Module Development <http://www.dnnsoftware.com/wiki/module-development>`__

*  DNN Community Blog: `Module Development <http://www.dnnsoftware.com/community-blog/cid/155064/module-development-for-non-developers-skinners-dnn-beginners--blog-series-intro>`_ series by `Clinton Patterson <http://www.dnnsoftware.com/Activity-Feed/userId/710933>`_

*  DNN Community Blog: `Extension Verification Service (EVS) <http://www.dnnsoftware.com/community-blog/cid/147439/extension-verification-service-evs>`_ and `Extension Verification Service (EVS) Update <http://www.dnnsoftware.com/community-blog/cid/154576/extension-verification-service-evs-update%20from%20june%202013>`_ by `Nathan Rover <http://www.dnnsoftware.com/Activity-Feed/userId/169038>`_

*  `Using the new Module Development Templates for DotNetNuke 7 <http://www.chrishammond.com/blog/itemid/2616/using-the-new-module-development-templates-for-dot>`_ by `Chris Hammond <http://www.dnnsoftware.com/users/chris-hammond>`_


..  ***** Image Substitutions *****

.. |build-mode| image:: /../common/img/scr-VS2015DebugReleaseBuildOptions.png
    :class: img-responsive img-600
    :alt: Visual Studio build type dropdown
    
.. |add-module| image:: /../common/img/scr-ModulesAddNewModule.png
    :class: img-responsive img-600
    :alt: Module - Add New Module

.. |drag-module| image:: /../common/img/scr-ModulesDragModule.png
    :class: img-responsive img-600
    :alt: Drag your module to a pane in the page.

.. |evs| image:: /../common/img/scr-EVS.png
    :class: img-responsive img-600
    :alt: EVS website
