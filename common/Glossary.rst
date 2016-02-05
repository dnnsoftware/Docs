.. glossary::
   :sorted:
   
   Advanced URL Management (AUM)
      The latest implementation of the Friendly URL Rewriter. Includes additional tools that give DNN administrators greater control over the formatting of URLs within DNN.
    
   container
      A set of related components that define the look and feel of a module. In contrast, a :term:`skin` or :term:`theme` defines the look and feel of an entire web page or site.
        
   databaseOwner
      A token used in database scripts to refer to the SQL Server database schema that is used during DNN installation. Default: :code:`dbo`.
    
   extension
      A combination of themes, modules, or other components that extend the functionality of DNN Platform.
    
   Forge
      The `list of open-source extensions <http://www.dnnsoftware.com/forge>`_ (including modules and themes) from the DNN community.

   friendly URL
      A URL that hides a coded path. Example: :code:`http://www.example.com/myanswerpage` might actually resolve to :code:`http://www.example.com/default.aspx?tabid=42`. DNN provides three modes of friendly URLs:

      *  **Advanced** provides both human-friendly and search-friendly URLs.
      *  **HumanFriendly** uses simple URLs for page names and uses :code:`tabid` in more complicated URLs. Limited redirect support.
      *  **SearchFriendly** includes :code:`tabid` patterns in URLs.

      See `URL Rewriting <http://www.dnnsoftware.com/wiki/url-rewriting>`_.
        

   host
      Also known as **super user**. An administrator account used to manage the server and its apps. A host account is the most privileged administrative account and has complete access to all DNN functionality and all websites supported by the DNN installation.
        
   manifest
      An XML file (e.g., MyExtension.dnn) that specifies how to install an extension. The manifest contains information regarding the extension type, and the various components that make up the extension. See the `DNN Manifest Schema </common/Extensions/DNNManifestSchema.shtml>`_.
        
   module
      Code that provides some functionality in a webpage. Example: A module could produce dynamic content, which is displayed in a :term:`pane` on the page.
        
    
   module action menu
      The set of menus that provides access to the functionality of a module. Available only if the page is in **Edit** mode. The menus can include the pencil menu (module editing, optional), the gear menu (module settings), and the plus menu (additional module features, optional). The DNN Platform provides actions that are common to all modules, and the specific module can provide additional actions. Actions performed through the module action menu affect only that specific module in that specific webpage.

   objectQualifier
      A custom string used as a prefix to names of DNN-related SQL objects, such as tables and stored procedures. This allows you to identify the DNN objects in a database that supports other applications besides DNN. Default: blank.

   package
      The zip file that contains all files required to install an extension in a DNN-based website. Also, a section of the DNN Manifest schema that specifies how the core components of the extension are installed.

   page
      Formerly **tab**. A DNN object that includes all components of a webpage, including scripts and UI components.

   pane
      A layout template area that holds a module. Theme designers determine the names and positions of panes. Administrators and webpage editors select the pane for each module added to the webpage. When the webpage is viewed, the pane can display content, depending on the module's functionality.

   portal
      See :term:`site`.

   portal alias
      A URL that refers to a specific website in a DNN installation. Examples: :code:`http://www.example.com` (parent portal alias), :code:`http://www.example.com/pathname` (child portal alias). Each website can have one or more portal aliases.

   provider
      A type of DNN extension that provides an alternative implementation of a specific functionality of the DNN Platform. Examples: authentication providers, data providers, and navigation providers. In most cases, even if multiple implementations are available in a DNN installation, only one implementation of each provider type is active at any time. See `Providers Reference </dev/REF-Providers.shtml>`_.

   site
      Also known as **portal**. A specific website in a DNN installation, which can host multiple websites that share files and resources.

   skin
      See :term:`theme`.

   skin object
      See :term:`theme object`.

   super user
      See :term:`host`.

   tab
      See :term:`page`.

   theme
      Formerly **skin**. A set of related components that define the look and feel of a page or site. These components include:
        
      * one or more layout templates, and
      * an optional CSS for each of the templates, or an optional master CSS for the entire site.
    
      In contrast, a :term:`container` and any associated CSS define the look and feel of a module in a single pane of a page.

   theme object
      A type of DNN extension used in themes to provide additional functionality for common UI elements on a webpage. Examples: menu bar, copyright notice, login/registration links, privacy link, terms of service link, and search box. Theme objects are configured by the theme designer.  See :term:`token`

   token
      In an HTML content template, a placeholder for data to be injected into the HTML output. Example: :code:`[User:UserName]` is replaced with the actual username.
        
      In an HTML layout template, a word that represents DNN-standard code for a :term:`theme object`. Examples: [NAV], [COPYRIGHT], [LOGIN], [PRIVACY], [TERMS], and [SEARCH].
        

See Also
--------

.. class:: collapse-list

*  DNN wiki: `DNN Glossary <http://www.dnnsoftware.com/wiki/dotnetnuke-glossary>`_
*  DNN wiki: `Globalization Glossary <http://www.dnnsoftware.com/wiki/international-glossary>`_
    