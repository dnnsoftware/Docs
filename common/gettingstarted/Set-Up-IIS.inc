
You can create a new IIS website or set up an existing one.

Prerequisites
-------------

* :doc:`DNN installed with folder permissions for the user account that will run your website.<Set-Up-DNN-Folder>`


Steps
-----

#. Enable IIS. (`Check compatible versions. </DNN8-Requirements.html>`_)

   a. Go to **Control Panel** > **Programs and Features** > **Turn Windows features on or off**.
   
      |win-features| 
        
   #. Under **Internet Information Services**, turn on the following:

      *  **Web Management Tools**: IIS Management Console

      *  **World Wide Web Services**
      
         .. class:: collapse-list

         *  **Application Development Features**: ASP.NET 3.5 and 4.6 

         *  **Common HTTP Features**: Default Document and Static Content

         *  (Optional) **Security**: Basic Authentication
            
         .. TODO: Per Joe's tech review on 20160106: Add Windows Authentication here and in the screenshot.

   #. **Internet Information Services Hostable Web Core**
      
      |IIS-options|
    
   .. TODO: Per Joe's tech review on 20160106: Add (Optional) Performance Features: Static Content Compression
    

#. You can create a new website or set up an existing one for use with DNN.

   *  To create a new website and point it to the DNN installation folder:

      a. Go to **Control Panel** > **Administrative Tools** > **Internet Information Services (IIS) Manager**.

      #. In the **Connections** panel, expand your host tree, right-click on **Sites**, and choose **Add Website**.

         |add-website|
            
      #. Enter the new site's name and choose the location.

         |site-name| 
            
      #. **Developers and Designers:** If setting up a local development environment, you can use :code:`www.dnndev.me` (or any subdomain) as the Host name. DNNDEV.ME is a registered domain which points to the loopback address of 127.0.0.1, so it will always resolve locally.
         
         **Administrators:** If setting up a live site, use your site's domain.

         |dnndev-me| 
          
   *  To use an existing IIS website:

      a. In the **Connections** panel, right-click on the name of the existing site, and choose **Edit Bindings...**.

         |edit-bindings|
                  
      #. In **Site Bindings**, click **Add...**. Then, in **Add Site Binding**, enter :code:`www.dnndev.me` as the Host name.

         |site-binding|            


#. If you do not use **NETWORK SERVICE** as the user account to run your website, verify that the automatically created :code:`IIS AppPool\AppPoolName` has **Full** or **Modify** permissions for the DNN installation folder. See :doc:`Set Up DNN Folder and the User Account <Set-Up-DNN-Folder>`

.. include:: /../common/gettingstarted/Set-Up-Sources.inc

..  ***** Image Substitutions *****

.. |win-features| image:: /../common/img/scr-InstallIIS-1.png
    :class: img-responsive img-600
    :alt: Turn Windows features on or off

.. |IIS-options| image:: /../common/img/scr-InstallIIS-6.png
    :class: img-responsive img-600
    :alt: IIS options to turn on

.. |add-website| image:: /../common/img/scr-NewSiteInIIS-1.png
    :class: img-responsive img-600
    :alt: In Connections, Sites, then Add Website

.. |site-name| image:: /../common/img/scr-NewSiteInIIS-2.png
    :class: img-responsive img-600
    :alt: Enter the new site's name and choose the location.

.. |dnndev-me| image:: /../common/img/scr-NewSiteInIIS-4.png
    :class: img-responsive img-600
    :alt: For local, use www.dnndev.me.

.. |edit-bindings| image:: /../common/img/scr-NewSiteInIIS-6.png
    :class: img-responsive img-600
    :alt: Right-click on the site and choose Edit Bindings.

.. |site-binding| image:: /../common/img/scr-NewSiteInIIS-7.png
    :class: img-responsive img-600
    :alt: For local, use www.dnndev.me.

