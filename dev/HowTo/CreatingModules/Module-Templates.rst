==============================
 Using Module Templates
==============================

Prerequisites
-------------

.. class:: collapse-list

*  :doc:`A local DNN installation <../../GettingStarted/Set-Up-DNN>` with **Host** permissions.

*  Visual Studio 2015 is the recommended IDE for developing DNN modules.


Steps
-----

#. **Download and install the templates.**

   *  For Chris Hammond's templates,
   
      a. Run Visual Studio as an administrator.
     
      #. Go to **Tools** > **Extensions and Updates**.
        
         |extensions|
        
      #. Highlight the **Online** > **Visual Studio Gallery** tree and search for :code:`DotNetNuke`.
                           
         |search-dnn|
        
      #. Click the **Download** button for the **DotNetNuke Project Templates**. 
     
      .. note:: 
        
         See `Chris Hammond's instructions <http://www.chrishammond.com/blog/itemid/2616/using-the-new-module-development-templates-for-dot>`_ for other installation methods.
        
   *  For the DNN 8 templates,
   
      a. `Download the appropriate .vsix file. <https://github.com/dnnsoftware/DNN.Templates/releases>`_ Two are included:
     
         .. class:: collapse-list
         
         *  Dnn.Mvc.Module.vsix
        
         *  Dnn.Spa.Module.vsix
        
            |download-templates|

      #. In your download folder, double-click the .vsix file to install the template in Visual Studio.

#. **Create a new Visual Studio project.**

   a. Run Visual Studio as an administrator.
   
   #. **File** > **New** > **Project**
   
   #. Select the template for the new project.
   
      *  For Chris Hammond's templates, go to **Installed** > **Templates** > **Visual C#** or **Visual Basic** > **DotNetNuke**
      
         |chris-templates|
        
      *  For the DNN 8 templates, go to **Installed** > **Templates** > **Visual C#** > **Dnn**.
      
         |dnn8-templates|
         
   #. Set the following:
   
      .. class:: collapse-list
      
      *  **Name:** the name of your new module
      *  **Location:** a subfolder inside the :code:`DesktopModules` folder of your DNN installation folder
      
         .. tip::
        
            Use your company name or a unique name as the subfolder name to avoid conflicts with other module creators in a production environment.
      
   #. Uncheck **Create directory for solution**. The templates expect Visual Studio's solution file (.sln) to be in the same folder as the project file. Checking this option puts the solution file in a different folder, which can cause build errors.
   
See Also
--------

.. class:: collapse-list

*  :doc:`Creating Modules <Creating-Modules>`

.. *  :doc:`Create a Web Forms module. <CreateWebFormsModule>`
.. *  :doc:`Create an MVC module. <CreateMVCModule>`
.. *  :doc:`Create a SPA module.<CreateSPAModule>`

Sources
-------

.. class:: collapse-list

*  DNN Community Blog: `Module Development for Non-Developers, Skinners, & DNN Beginners - Blog Series <a href="http://www.dnnsoftware.com/community-blog/cid/155064/module-development-for-non-developers-skinners-dnn-beginners--blog-series-intro>`_ by `Clinton Patterson <http://www.dnnsoftware.com/activity-feed/userid/710933>`_
*  `Using the new Module Development Templates for DotNetNuke 7 <http://www.chrishammond.com/blog/itemid/2616/using-the-new-module-development-templates-for-dot>`_ by `Chris Hammond <http://www.dnnsoftware.com/users/chris-hammond>`_

..  ***** Image Substitutions *****

.. |extensions| image:: /../common/img/scr-VS2015ExtAndUpdates.png
    :class: img-responsive img-600
    :alt: Tools > Extensions and Updates

.. |search-dnn| image:: /../common/img/scr-VS2015Search4DNN.png
    :class: img-responsive img-600
    :alt: In the Online > Visual Studio Gallery tree, search for DotNetNuke then Download.

.. |download-templates| image:: /../common/img/scr-VS2015DNN8Templates-11.png
    :class: img-responsive img-600
    :alt: Download DNN8 templates from Github.

.. |chris-templates| image:: /../common/img/scr-VS2015NewProjectWithTemplates-02.png
    :class: img-responsive img-600
    :alt: Visual Studio > New > Project with Chris Hammond's templates

.. |dnn8-templates| image:: /../common/img/scr-VS2015NewProjectWithTemplates-01.png
    :class: img-responsive img-600
    :alt: Visual Studio > New > Project with DNN8 templates

