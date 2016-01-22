Overview
---------

For easier distribution and installation, the components of an extension (theme or module) can be bundled into a package.

An extension package is simply a zip file that contains all the files required by your extension. The most important part of the process is creating the DNN Manifest, which provides information required by the installer, such as the target locations for the files.

If you use the DNN templates and compile in Visual Studio, the Release build creates the zip file for you.


Steps
-----

#. Prepare your files in folders.

.. *  <a href="/design/REF-ContentsThemePack.shtml">Layout templates, containers, and associated files</a>
.. *  <a href="/dev/REF-ContentsModulePack.shtml">Modules and associated files</a>

   *  Files that are common among all packages:
      
      *  (Optional) <b>MyLicense.txt</b> is displayed to the user during package installation.</li>.
      *  (Optional) <b>MyReleaseNotes.txt</b> lists the changes for the current version of the package and is also provided during installation.</li>
    
    .. tip::
       The license and release notes are HTML files, so you can include special offers, including a call to action and other details.
       
       <b>Reminder:</b> Include the version number of your extension in the release notes.
        
#. Create the :doc:`DNN Manifest <Dnn-Manifest>`

#. Zip up your files, including the DNN Manifest in the root folder.


See Also
--------

*  `Install an Extension </admin/Getting-Started/Install-Extensions.html>`_

Sources
-------

* DNN Professional Training video: `Skinning 5: Packaging <http://www.dnnsoftware.com/services/professional-training/training-videos-subscription/skinning-5-packaging>`_
