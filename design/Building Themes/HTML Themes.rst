.. include:: /../common/stub-topic.txt

==================================
|stub-icon| Building an HTML theme
==================================

Prerequisites
-------------

* A :term:`host` (super user) account to upload skins.


Steps
-----

#. Log into DNN with a super user (host) account. Super user privileges are required to upload themes, because themes can include executables. The super user also converts the theme from HTML to ASCX. (An administrator account is sufficient to apply skins and containers to a site.)

#. Create the HTML file for the skin.

   #. In your DNN installation, go to the folder `Portals\_default\Skins` and create a new folder for your theme. The folder name becomes the name of the DNN theme.

   #. In the new folder, create a new file called `index.html` with the following lines:

.. 
   # BUGBUG: This was working for a short time then it stopped working.
.. literalinclude:: sample-index.html
   :language: HTML
   :linenos:
   :emphasize-lines: 8

#. Parse the HTML into ASCX.

   #. Go to :menuselection:`Admin --> Skins`.

.. image:: /../common/img/WLW-DotNetNukeSkinning_6702-SkinsPageMenu_2
   :alt: screenshot of Admin > Skins menu

   #. Find your new skin in the Skins dropdown, and click "Parse Skin Package".

.. image:: /../common/img/WLW-DotNetNukeSkinning_6702-SkinsPage_2
   :alt: screenshot of Admin > Skins dialog

   #. In the parsing results, look for messages that indicate errors. 

   #. DNN converts the your HTML file a new file Index.ascx similar to this:
   ::

   <%@ Control language="vb" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin" %>
   <div id="ContentPane" runat="server" ></div>

   .. note:: The conversion only goes in one direction (from HTML to ASCX).






..
   # Where exactly do you upload the file in Step 2?
   # What do they do with the errors, if any? Do we need a new troubleshooting page?



.. include:: /../common/stub-notice.txt

.. include:: /../common/contribute.txt
