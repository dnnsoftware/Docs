
Overview
---------

A DNN extension can contain a module, a theme, or other components that extend the functionality of the DNN Platform.

.. include::  /../common/bptext/3rdPartyExtensions.inc

You can also create your custom `modules </dev/CreatingModules.shtml>`_ and `themes </design/CreatingThemes.shtml>`_.

The extension must be added by the host / super user account to the DNN installation before it can be used in any of the websites.

Prerequisites
--------------

* .. include::  /../common/bptext/PrereqHost.inc

Steps
------

1. Go to **Host** > **Extensions**.

   |host-ext|
   
#. Click **Install Extension Wizard**.

   |ext-wiz|
   
#. Click **Choose File** and select the zip file of the extension. The button name changes to the name of the zip file.

   |choose-zip|
   
#. Informational pages will be displayed one after the other:

   1. **Package Information** includes the extension's version and description, as well as information about the creator.
      
      |pkg-info|
      
   #. **Release Notes** displays what's new in the current release of the extension.
      
      |release-notes|
      
   #. **License** displays the creator's license terms. Accept the license to continue.
      
      |license|
      
   #. **Package Installation Report** displays a log of actions performed by the installation.
      
      |pkg-report|

#. Verify that the newly installed extension appears in the list under the **Installed Extensions** tab.
            
   |done|
   

See Also
--------

.. class:: collapse-list

* `Create the Package </common/Extensions/CreatePackage.shtml>`_

* `The DNN Manifest Schema </common/Extensions/DNNManifestSchema.shtml>`_

Sources
-------

.. class:: collapse-list

* DNN Community blog: `Installing Our Module in Another DNN Instance <http://www.dnnsoftware.com/community-blog/cid/155092/installing-our-module-in-another-dnn-instance>`_ by `Clinton Patterson <http://www.dnnsoftware.com/Activity-Feed/userId/710933>`_

* DNN Forge: `2sxc 8.0.11 - Amazing Content and Apps <http://www.dnnsoftware.com/forge/2sxc-800-amazing-content-and-apps-9733-9733-9733-9733-9733-rating>`_ by `2sxc <http://2sxc.org>`_ 

..  ***** Image Substitutions *****

.. |host-ext| image:: /../common/img/scr-InstallExt-1.png
    :class: img-responsive img-600
    :alt: Host Extensions

.. |ext-wiz| image:: /../common/img/scr-InstallExt-3.png
    :class: img-responsive img-600
    :alt: Install Extension Wizard

.. |choose-zip| image:: /../common/img/scr-InstallExt-4.png
    :class: img-responsive img-600
    :alt: Choose zip file of the extension

.. |pkg-info| image:: /../common/img/scr-InstallExt-6.png
    :class: img-responsive img-600
    :alt: Package Information

.. |release-notes| image:: /../common/img/scr-InstallExt-7.png
    :class: img-responsive img-600
    :alt: Release Notes

.. |license| image:: /../common/img/scr-InstallExt-8.png
    :class: img-responsive img-600
    :alt: License

.. |pkg-report| image:: /../common/img/scr-InstallExt-10.png
    :class: img-responsive img-600
    :alt: Package Installation Report

.. |done| image:: /../common/img/scr-InstallExt-11.png
    :class: img-responsive img-600
    :alt: New extension appears under Installed Extensions.
