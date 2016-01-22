===================
 Set Up SQL Server
===================

Steps
-----

#. Install SQL. (`Check compatible versions. </DNN8-Requirements.html>`_)

   a. Choose **New SQL Server stand-alone installation...**.

      |new-server|
      
   #. Include any product updates.

   #. Accept the defaults in **Feature Selection**, **Instance Configuration**, and **Server Configuration**.

   #. In **Database Engine Configuration**, under **Authentication Mode**, choose **Mixed Mode**.

      |mixed-mode|
              
   #. Accept the defaults in remaining dialogs.


#. **Create a SQL database for your website.**

   a. In the **Microsoft SQL Server Management Studio** &gt; **Object Explorer**, right-click on **Databases**, and choose **New Database...**.

      |new-db|
              
   #. Enter the name of the new database. Click OK.

      |db-name|
              
   .. note::
   
      Remember the database name, because it will be required by the DNN Installation Wizard.

#. **Create a SQL user account.**
   
   a. Under **Security**, right-click on **Logins**, and choose **New Login...**.

      |new-login|
        
   #. Enter the username, choose **SQL Server authentication**, add a password, uncheck **Enforce password policy**, and choose the database.

      |sql-auth|
              
   .. note::
   
      Remember the username and password, because they will be required by the DNN Installation Wizard.


#. Give the new SQL user **db_owner** access to the new database. 

   a. In **Object Explorer**, under your database > **Security**, right-click on **Users**, and choose **New User...**.

      |new-user|
      
   #. Set **User type** to **SQL user with login**.

      |user-type|
        
   #. Enter the username of the account you just created, then click **Check Names**.

      |win-features|
              
   #. Under **Select a page**, select **Membership**, and check the **db_owner** database role membership.

      |db-owner|

.. include:: Set-Up-Sources.rst

..  ***** Image Substitutions *****

.. |new-server| image:: /../common/img/scr-InstallSQL-1.png
    :class: img-responsive img-600
    :alt: New SQL Server stand-alone installation

.. |mixed-mode| image:: /../common/img/scr-InstallSQL-6.png
    :class: img-responsive img-600
    :alt: Database Engine Conf > Authentication Mode > Mixed Mode

.. |new-db| image:: /../common/img/scr-SetupSQL-2.png
    :class: img-responsive img-600
    :alt: In Object Explorer, right-click Databases, choose New Database.

.. |db-name| image:: /../common/img/scr-SetupSQL-3.png
    :class: img-responsive img-600
    :alt: Enter new database name.

.. |new-login| image:: /../common/img/scr-SetupSQL-4.png
    :class: img-responsive img-600
    :alt: Under Security, right-click Logins, choose New Login.

.. |sql-auth| image:: /../common/img/scr-SetupSQL-5.png
    :class: img-responsive img-600
    :alt: Choose SQL Server authentication. Uncheck Enforce password policy.

.. |new-user| image:: /../common/img/scr-SetupSQL-6.png
    :class: img-responsive img-600
    :alt: Under your database > Security, right-click Users, choose New User.

.. |user-type| image:: /../common/img/scr-SetupSQL-7.png
    :class: img-responsive img-600
    :alt: User type = SQL user with login

.. |win-features| image:: /../common/img/scr-SetupSQL-8.png
    :class: img-responsive img-600
    :alt: Enter the new account's login name, then click Check Names.

.. |db-owner| image:: /../common/img/scr-SetupSQL-10.png
    :class: img-responsive img-600
    :alt: For Membership page, check db_owner


