=================================
 Run the DNN Installation Wizard
=================================

Prerequisites
-------------

.. class:: simple-list

* :doc:`DNN installed with folder permissions for the user account that will run your website. <Set-Up-DNN-Folder>`

* :doc:`IIS enabled and set up. <Set-Up-IIS>`

* :doc:`SQL installed and set up. <Set-Up-SQL-Server>`


Steps
-----

#. Run the DNN Installation Wizard. 

   .. Verify the actual names of the UI objects. Need screenshots. -->

   a. Open your website (:code:`http://www.dnndev.me`) in a browser.

   #. Under **Administrative Information**, enter the username, password, and email address for the host / super user account to create. This account will have permissions for all websites created in this DNN installation.

      .. note:: 
   
         Remember the host's username and password, which you will need to manage your websites.
    
   #. Under **Website Information**, enter the name, template, and language to use for the first website.
   
   #. Under **Database Information**,

      *  **Database Setup:** Custom
      *  **Database Type:** SQL Server/SQL Server Express Database
      *  **Server Name:**
         
         .. note:: Developers and Designers:
            :class: has-title
            
            You can use the default value (example: :code:`.\SQLExpress` or :code:`(local)`).
        
         .. note:: Administrators:
            :class: has-title

            Set the value to the name of your database server (example :code:`mydbserver`).
    
      *  **Database Name:** Enter the name of the SQL database you created earlier.

      *  **Object Qualifier:**
        
         .. note:: Developers: 
            :class: has-title
            
            You should always set **objectQualifier** to :code:`dnn` to prepend :code:`dnn_` to all DNN-generated objects, such as tables and stored procedures. This practice is recommended in your local development environment, so that you can catch name-matching errors that could occur if the target DNN installation's **objectQualifier** setting (found in web.config) is not blank.
    
      *  **Security:** User Defined

      *  For **Database Username / Password**, enter the information for the SQL user you created earlier. 
    
   #. Follow the prompts to the end of the wizard.

      |install-wiz|


#. Test the installation by viewing the first website.

#. (optional) To assist with localization, modify the web.config file to set ShowMissingKeys to :code:`true`.
    
   .. code-block:: xml
    
      <add key="ShowMissingKeys" value="true" />

   If **TRUE**,

   .. class:: simple-list 

   *  Any localized text in DNN will be displayed with an "L" in front of it to help with translating text in your module.

   *  DNN displays an error if the localized version of a string is missing from the resource files. The resource files are XML files that contain the localized string tables.

..  What else needs to be updated in web.config?


Sources
-------

.. class:: simple-list

*  DNN Wiki: `Setting up Your Module Development Environment <http://www.dnnsoftware.com/wiki/setting-up-your-module-development-environment>`_, based on `Setting up your DotNetNuke Module Development Environment <http://www.christoc.com/Tutorials/All-Tutorials/aid/1>`_ by `Chris Hammond <http://www.dnnsoftware.com/users/chris-hammond>`_
*  DNN Community Blog: `Installing DNN <http://www.dnnsoftware.com/community-blog/cid/155070/installing-dnn>`_ by `Clinton Patterson <http://www.dnnsoftware.com/activity-feed/userid/710933>`_

.. *  `How to obtain versions of Internet Information Server (IIS) <https://support.microsoft.com/en-us/kb/224609>`_


..  ***** Image Substitutions *****

.. |install-wiz| image:: /../common/img/scr-InstallWizard-7.png
    :class: img-responsive img-600
    :alt: DNN Installation Wizard


