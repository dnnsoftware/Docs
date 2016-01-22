================================
 Create with the Module Creator
================================

..  ***** Custom Roles *****

.. role:: muted
    :class: text-muted 
    
Overview
--------

The DNN Module Creator is a module that enables developers to quickly build modules without requiring a full-blown IDE like Visual Studio.  It automates many of the initial module creation tasks so that module developers can quickly start writing code.  In addition, the Module Creator can be extended with custom templates to further streamline development. 

The DNN Module Creator is generally recommended only for simple modules.  For more complex modules, you can :doc:`create a web Forms Module using templates <Create-Web-Forms-Module>`.
    
Prerequisites
-------------

* `A local DNN installation <../admin/Set-Up-DNN>`_ with **Host** permissions.

Steps
-----

#. Go to **Pages** > **Add New Page**.

   |step-1|
   
#. Enter the Page Name and scroll down to click **Add Page**.

   |step-2|
   
#. Go to **Module** > **Add New Module**.

   |step-3|
   
#. Search for the Module Creator among the installed modules.

   |step-4|
   
#. Drag the Module Creator module to the page.

   |step-5|
   
#. On the Module Creation form

   |step-6|

   a. Enter the name of your organization.
      
      :muted:`This name is used to create a folder to distinguish your modules from those created by other module creators.  It will also be used as the namespace for your code. The name should only contain numbers and letters.`
      
   #. Enter the name of the module.
   
      :muted:`The name is used to create the module's "friendly name". The full module name will consist of the [Owner Name].[Module Name] with any spaces removed. The module name should only contain numbers and letters.`
      
   #. Choose the language you prefer: C#, VB, or Web.
   
      :muted:`The language selection will control what templates are available. Choosing "Web" as your language will expose an HTML based template where you can use HTML, CSS and JavaScript as your primary development languages.  This is similar to the MVC module type introduced in DNN 8.`
      
      :muted:`This example uses the C# language.`
       
   #. Choose the type of template you wish to use (i.e. Inline Script, Razor, User Control).
   
      :muted:`The most common type of module development relies on User Controls with code-behind files.  Inline script uses User Controls, but without the code-behind files.  The Razor template does away with User Controls and instead uses Razor scripts for handling view rendering.`

      :muted:`This example uses the User Control template.`
       
   #. Enter the name of the module control.
   
      :muted:`The module control name will be used as the name of the primary module control that is registered with DNN.  You will be able to create additional controls once the initial module creation steps are complete.`

#. Your new module has been created and is automatically added to the page, replacing the Module Creator.

   |step-7|
   
   :muted:`Your module is now ready to be customized.`

#. Modify the module.

   a. Click the gear icon and choose **Develop**.
   
      |step-8a|
      
   #. In the **View.ascx** file, delete all the lines of code, except the first one.
   
      |step-8b|
      
   #. Add markup to customize the module. Example:
   
      .. code-block:: aspx-cs
       
         <h1>Hello, <%: UserInfo.DisplayName %></h1>
      
      |step-8c|
       
   #. Click **Update** to save your changes.
   #. From the **Select File** dropdown, choose the **View.ascx.cs** file
      
      |step-8e|
      
   #. Remove all of the code in the **Event Handlers** region and click **Update** to save your changes.
   
      |step-8f|
      
   #. Click **Cancel** (or click the **X** in the upper right) to close the popup dialog.
    
#. Your page displays the new functionality

   |step-9|

See Also
--------

* `Creating Modules <../Creating-Modules>`_
* `Create an MVC Module <Create-MVC-Module>`_
* `Create a SPA Module <Create-SPA-Module>`_


..  ***** Image Substitutions *****

.. |step-1| image:: /../common/img/scr-ModuleCreator-1.png
    :class: img-responsive img-600
    :alt:  

.. |step-2| image:: /../common/img/scr-ModuleCreator-2.png
    :class: img-responsive img-600
    :alt:  

.. |step-3| image:: /../common/img/scr-ModuleCreator-3.png
    :class: img-responsive img-600
    :alt:  

.. |step-4| image:: /../common/img/scr-ModuleCreator-4.png
    :class: img-responsive img-600
    :alt:  

.. |step-5| image:: /../common/img/scr-ModuleCreator-5.png
    :class: img-responsive img-600
    :alt:  

.. |step-6| image:: /../common/img/scr-ModuleCreator-6.png
    :class: img-responsive img-600
    :alt:  

.. |step-7| image:: /../common/img/scr-ModuleCreator-7.png
    :class: img-responsive img-600
    :alt:  

.. |step-8a| image:: /../common/img/scr-ModuleCreator-8a.png
    :class: img-responsive img-600
    :alt:  

.. |step-8b| image:: /../common/img/scr-ModuleCreator-8b.png
    :class: img-responsive img-600
    :alt:  

.. |step-8c| image:: /../common/img/scr-ModuleCreator-8c.png
    :class: img-responsive img-600
    :alt:  

.. |step-8e| image:: /../common/img/scr-ModuleCreator-8e.png
    :class: img-responsive img-600
    :alt:  

.. |step-8f| image:: /../common/img/scr-ModuleCreator-8f.png
    :class: img-responsive img-600
    :alt:  

.. |step-9| image:: /../common/img/scr-ModuleCreator-9.png
    :class: img-responsive img-600
    :alt:  
  