==========================
 Using the Module Creator
==========================

Overview
--------

.. note::
    These instructions use the DNN Module Creator, which is generally recommended only for simple modules.  For more complex modules, you can 
    :doc:`create a web Forms Module using templates <Create-Web-Forms-Module>`.
    
Prerequisites
-------------

* `A local DNN installation <../admin/Set-Up-DNN>`_ with **Host** permissions.

Steps
-----

#. Go to **Module** > **Add New Module**
   |step-1|
#. Search for the Module Creator in the control panel
   |step-2|
#. Drag the Module Creator module to the page
   |step-3|
#. On the Module Creation form
   |step-4|

   a. Enter the name of your organization
   #. Enter the name of the module
   #. (Optional) Add a description
   #. Choose the language you prefer (C#, VB or Web)
   #. Choose the type of template you wish to use (i.e. Inline Script, Razor, User Control)
   #. Enter the name of the module control
   #. Click **Create Module**
   
#. You'll see a basic DNN module on the page
   |step-5|
#. To modify the module

   a. Click the gear icon and choose **Develop**
      |step-6a|
   #. In the **View.ascx** file, Delete all the lines of code, except the first one 
      |step-6b|
   #. Add the following line ::
       
      <h1>Hello, <%: UserInfo.DisplayName %></h1>
      
      |step-6c|
       
   #. Click **Update** to save your changes
   #. From the **Select File** dropdown, choose the **View.ascx.cs** file
      |step-6e|
   #. Remove all of the code in the **Event Handlers** region
      |step-6f|
   #. Click **Update** to save your changes
   #. Click **Cancel** (or click the **X** in the upper right) to close the popup dialog
    
#. Your page displays the new functionality
   |step-7|

See Also
--------

* `Creating modules <../Creating-Modules>`_
* `Create an MVC module <Create-MVC-Module>`_
* `Create a SPA module <Create-SPA-Module>`_

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

.. |step-6a| image:: /../common/img/scr-ModuleCreator-6a.png
    :class: img-responsive img-600
    :alt:  

.. |step-6b| image:: /../common/img/scr-ModuleCreator-6b.png
    :class: img-responsive img-600
    :alt:  

.. |step-6c| image:: /../common/img/scr-ModuleCreator-6c.png
    :class: img-responsive img-600
    :alt:  

.. |step-6e| image:: /../common/img/scr-ModuleCreator-6e.png
    :class: img-responsive img-600
    :alt:  

.. |step-6f| image:: /../common/img/scr-ModuleCreator-6f.png
    :class: img-responsive img-600
    :alt:  

.. |step-7| image:: /../common/img/scr-ModuleCreator-7.png
    :class: img-responsive img-600
    :alt:  
  