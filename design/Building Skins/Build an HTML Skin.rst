.. include:: /../common/stub-topic.txt

..
   # See the HTML with the same name for the most up-to-date version of this page.


==================================
|stub-icon| Building an HTML Theme
==================================

Prerequisites
-------------

* A :term:`host` (super user) account to upload skins.


Steps
-----

1. Log into DNN with a super user (host) account. Super user privileges are required to upload themes, because themes can include executables. The super user also converts the theme from HTML to ASCX. (An administrator account is sufficient to apply skins and containers to a site.)

2. Create the HTML file for the skin.

   a. In your DNN installation, go to the folder `Portals\_default\Skins` and create a new folder for your theme. The folder name becomes the name of the DNN theme.

   b. In the new folder, create a new file called `index.html` with the following lines:

..
   # BUGBUG: This was working for a short time then it stopped working.

.. literalinclude:: sample-index.html
   :language: HTML
   :linenos:
   :emphasize-lines: 8

3. Parse the HTML into ASCX.

   a. Go to :menuselection:`Admin --> Skins`.

.. image:: /../common/img/WLW-DotNetNukeSkinning_6702-SkinsPageMenu_2.png

.. #  :alt: screenshot of Admin_Skins menu

   b. Find your new skin in the Skins dropdown, and click "Parse Skin Package".

.. image:: /../common/img/WLW-DotNetNukeSkinning_6702-SkinsPage_2.png

.. #   :alt: screenshot of Admin_Skins dialog
   
   c. In the parsing results, look for messages that indicate errors.

   d. DNN converts the your HTML file a new file Index.ascx similar to this:
   ::

   <%@ Control language="vb" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin" %>
   <div id="ContentPane" runat="server" ></div>

   .. note:: The conversion only goes in one direction (from HTML to ASCX).






..
   # Where exactly do you upload the file in Step 2?
   # What do they do with the errors, if any? Do we need a new troubleshooting page?



.. include:: /../common/stub-notice.txt

.. include:: /../common/contribute.txt
