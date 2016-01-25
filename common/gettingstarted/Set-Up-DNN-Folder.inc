
Steps
-----

#. `Download DNN and extract the files. <http://www.dnnsoftware.com/community/download>`_ The folder where you extract the files becomes the DNN installation folder.

   .. note:: Developers and Designers:
      :class: has-title
   
      For module or theme development, you don't need the DNN source files.


#. Determine the user account used to run your website. The account name differs, depending on your IIS and Windows version:

   .. class:: table-bordered dnn-table

      +-------------------------+------------------------+---------------------------------------+
      |If your OS is            |and your IIS version is |then the account name is               |
      +=========================+========================+=======================================+
      |Windows Vista            |IIS 7                   |**localmachine\\Network Service**      |
      |                         |                        |                                       | 
      |Windows Server 2008      |                        |                                       |
      +-------------------------+------------------------+---------------------------------------+
      |Windows 7                |IIS 7.5                 |the **NETWORK SERVICE** account, or    |
      |                         |                        |                                       | 
      |Windows Server 2008 R2   |                        |the **IIS AppPool\\AppPoolName**, which|
      +-------------------------+------------------------+is the name of the automatically       |
      |Windows 8                |IIS 8                   |generated pool.                        |
      |                         |                        |                                       | 
      |Windows Server 2012      |                        |                                       |
      +-------------------------+------------------------+                                       |
      |Windows 10               |IIS 10                  |                                       |
      +-------------------------+------------------------+---------------------------------------+

#. Give **Full** or **Modify** permissions for the DNN installation folder to the user account that will run your website.

   .. Make this section expandable. Do we really want to go into this much detail? 
   
   a. In Windows Explorer, right-click on the DNN installation folder, and choose **Properties**.
      
      |folder-perm|

   #. Go to the **Security** tab and click **Edit...**.
      
      |edit-security|

   #. Click **Add...**.
      
      |add-perm|

   #. In **Select Users or Groups**, enter the user name, then click **Check Names**. After the name is resolved, click OK.
      
      |check-name|

   #. Highlight the newly added user name and check **Full Control** and **Modify** under **Allow**.
      
      |full-control|

.. include:: /../common/gettingstarted/Set-Up-Sources.inc

..  ***** Image Substitutions *****

.. |folder-perm| image:: /../common/img/scr-FolderPerms-1.png
    :class: img-responsive img-600
    :alt: Right-click on the DNN folder and choose Properties
     
.. |edit-security| image:: /../common/img/scr-FolderPerms-2.png
    :class: img-responsive img-600
    :alt: In the Security tab, click Edit...
     
.. |add-perm| image:: /../common/img/scr-FolderPerms-3.png
    :class: img-responsive img-600
    :alt: Click Add...
     
.. |check-name| image:: /../common/img/scr-FolderPerms-5a.png
    :class: img-responsive img-600
    :alt: In Select Users or Groups, enter the user name, then click Check Names.
     
.. |full-control| image:: /../common/img/scr-FolderPerms-6.png
    :class: img-responsive img-600
    :alt: Highlight the newly added user name and check Full Control and Modify under Allow.
     
