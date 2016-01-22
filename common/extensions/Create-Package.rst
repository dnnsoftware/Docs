Overview
---------

For easier distribution and installation, the components of an extension (theme or module) can be bundled into a package.

An extension package is simply a zip file that contains all the files required by your extension. The most important part of the process is creating the DNN Manifest, which provides information required by the installer, such as the target locations for the files.

If you use the DNN templates and compile in Visual Studio, the Release build creates the zip file for you.


Steps
-----

#. Prepare your files in folders.

   *  Files that are common among all packages:
      
      .. class:: collapse-list
      
      *  (Optional) **MyLicense.txt** is displayed to the user during package installation.
      *  (Optional) **MyReleaseNotes.txt** lists the changes for the current version of the package and is also provided during installation.
    
      .. tip::
         The license and release notes are HTML files, so you can include special offers, including a call to action and other details.
       
         **Reminder:** Include the version number of your extension in the release notes.
        
#. Create the :doc:`DNN Manifest <Dnn-Manifest>`

#. Zip up your files, including the DNN Manifest in the root folder.


See Also
--------

*  `Install an Extension </admin/Getting-Started/Install-Extensions.html>`_

Sources
-------

* DNN Professional Training video: `Skinning 5: Packaging <http://www.dnnsoftware.com/services/professional-training/training-videos-subscription/skinning-5-packaging>`_
