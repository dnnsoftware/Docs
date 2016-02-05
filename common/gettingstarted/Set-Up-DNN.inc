  
Overview
--------

DNN offers three products:

.. class:: collapse-list

*  DNN Platform is the free open-source package.
*  Evoq Content adds more advanced website management features over the DNN Platform.
*  Evoq Engage adds user engagement features over Evoq Content.

You can `compare the features <http://www.dnnsoftware.com/products/compare-dnn-platform-to-evoq>`_ in detail.</p>

.. 
    Cover older versions in the next iteration of the docs website.
    <li>**Determine what DNN version to install.** Decide on the oldest DNN version that you are willing to support.
        <ul>
            <li>What is the oldest DNN version that you or your clients have in production?
            <li>If there is a specific feature that you want to use, which DNN version introduced that feature?
        </ul>
        <p>**Note:** DNN 8.0 is mostly backward-compatible, except where noted in DNN 8 compatibility page. If you compile your module on an older DNN version, it will likely be compatible with newer versions; however, you should test your module on newer versions to ensure compatibility.
    
   
Requirements
------------

.. class:: collapse-list

*  `DNN 8.0 Requirements </docs/DNN8-Requirements.html>`_
*  (Optional) **Developers:** Visual Studio 2015 is the recommended IDE for developing DNN modules. It is required if you are contributing to the DNN Platform.


Steps
-----

.. class:: collapse-list

1. :doc:`Download DNN and set up folder permissions for the user account that will run your website. <Setup/Set-Up-DNN-Folder>`
#. :doc:`Enable and set up IIS. <Setup/Set-Up-IIS>`
#. :doc:`Install and set up SQL. <Setup/Set-Up-SQL-Server>`
#. :doc:`Run the DNN Installation Wizard. <Setup/Run-Install-Wizard>`

.. 
    <!--
    <p>**Note:** The screenshots were captured in an environment with the following:
        <ul>
            <li>Windows 10
            <li>.NET Framework 4.6
            <li>IIS with ASP.NET 3.5 and 4.6
            <li>SQL Server 2014 Express Edition
            <li>DNN 8.0 Beta
        </ul>
    </p>
    -->


See Also
--------

*  :doc:`Install an Extension <Install-Extensions>`

.. include:: /../common/gettingstarted/Set-Up-Sources.inc
