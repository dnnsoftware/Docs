
Overview
---------

The **DNN manifest** is an XML file (e.g., MyDNNExtension.dnn) that indicates how specific files in the extension package must be processed during installation.

Only the files specifically declared in the manifest would be installed. Files inside any zip file specified in :code:`component type="ResourceFile"` do not have to be listed individually. Nonexistent files mentioned in the manifest will cause an error message.

The manifest file extension must be :code:`.dnn`. You can add the DNN version at the end; e.g., :code:`MyDNNExtension.dnn7`.

.. TODO: Change the extension to .dnn8 after the maintenance release that allows that.

Save the manifest file in the base folder of your package and include it when zipping your package files.
 
Schema
------

.. code-block:: xml

   <dotnetnuke type="Package" version="8.0">
       <packages>
           <package name="MyCompany.SampleModule" type="Module" version="1.0.0">
               <friendlyName>My Sample Module</friendlyName>
               <description>My Sample Module is a demonstration module.</description>
               <iconFile>MyIcon.png</iconFile>
               <owner>
                   <name>MyCompany or MyName</name>
                   <organization>MyCompany Corporation</organization>
                   <url>www.example.com</url>
                   <email>support@example.com</email>
               </owner>
               <license src="MyLicense.txt" />
               <releaseNotes src="MyReleaseNotes.txt" />
               <azureCompatible>true</azureCompatible>
               <dependencies>
                   <dependency type="coreVersion">08.00.00</dependency>
                   ...
               </dependencies>
               <components>
                   <component type="Module">
                       ...
                   </component>
                   ...
               </components>
           </package>
       </packages>
   </dotnetnuke>

package
+++++++

.. code-block:: xml

   <package name="MyCompany.MySampleModule" type="Module" version="1.0.0">
   ...
   </package>

*  **name** must be unique. To ensure your package's uniqueness, add your company as the prefix.

*  **type** can be one of the following:

   .. class:: collapse-list
   
   *  **Auth_System**
   *  **Container**
   *  **CoreLanguagePack**
   *  `DashboardControl <http://www.dnnsoftware.com/wiki/manifest-dashboardcontrol-component>`_
   *  **ExtensionLanguagePack**
   *  **JavaScript_Library**
   *  **Library**
   *  `Module <http://www.dnnsoftware.com/wiki/modules>`__
   *  `Provider <http://www.dnnsoftware.com/wiki/providers>`__
   *  `Skin <http://www.dnnsoftware.com/wiki/dotnetnuke-skins>`__
   *  **SkinObject**
   *  other custom extension types

*  **version** holds the version of your extension.

Each package represents a DNN extension. You can install multiple extensions using a single DNN manifest by creating a **package** section for each extension inside the **packages** tag.

Packages are installed in the order they appear in the manifest.

Only the information about the *first* package is displayed during installation. This includes the package name, description, owner, license, and release notes.

friendlyName and description
++++++++++++++++++++++++++++

.. code-block:: xml

   <friendlyName>My Sample Module</friendlyName>
   <description>My Sample Module is a demonstration module.</description>

The **friendlyName** and **description** are displayed during installation and are used in the **Host** > **Extensions** page, which lists the extensions that are installed or are available for installation. The **friendlyName** can contain spaces and up to 250 characters; the **description** can hold up to 2000 characters.


iconFile
++++++++

.. code-block:: xml

   <iconFile>MyIcon.png</iconFile>

Optional. The icon is displayed in the DNN Control Panel's dropdown list and in the Extensions page. The **.png** format is preferred. If not specified, the DNN default icon is used.
    
owner
+++++

.. code-block:: xml

   <owner>
       <name>MyCompany or MyName</name>
       <organization>MyCompany Inc.</organization>
       <url>www.example.com</url>
       <email>support@example.com</email>
   </owner>

Optional, but encouraged. Information about the owner or creator of the extension.

license and releaseNotes
++++++++++++++++++++++++

.. code-block:: xml

   <license src="MyLicense.txt" />
   <releaseNotes src="MyReleaseNotes.txt" />

Optional, but encouraged. These text files are displayed during the installation. The user is prompted to accept or decline the license. The release notes is displayed during the installation. The actual text can also be embedded within the tag without the **src** attribute.

azureCompatible
+++++++++++++++

.. code-block:: xml

   <azureCompatible>true</azureCompatible>

Optional. Default is **false**. Set to **true** if the extension is compatible with Microsoft Azure.

dependencies
++++++++++++

.. code-block:: xml

   <dependencies>
       <dependency type="coreVersion">08.00.00</dependency>
       ...
   </dependencies>

Dependencies can be any of these types (case-insensitive):

*  **coreVersion**. Minimum DNN version required by the extension being installed. Example:

   .. code-block:: xml

      <dependency type="coreVersion">08.00.00</dependency>

*  **managedPackage**. The name and minimum version of a package required by the extension being installed. The required package must already be listed in the core Packages table. Example:

   .. code-block:: xml

      <dependency type="managedPackage" version="1.0.0">AnotherPackageRequiredByThisComponent</dependency>

*  **package**. The name of a package required by the extension being installed. The required package must already be listed in the core **Packages** table. Example:

   .. code-block:: xml

      <dependency type="package">AnotherPackageRequiredByThisComponent</dependency>

.. FYI: Per Joe's tech review, the permission dependency "is only relevant if the application is running in a partial trust environment. DNN no longer supports running in a partial trust environment and therefore this dependency check should not be used." Therefore, not included here.

*  **type**. A type in .NET, in a DNN library, or a third-party library. Ensures that the installation can create an object of the specified type. Example:

   .. code-block:: xml

      <dependency type="type">System.Security.Principal.GenericPrincipal</dependency>

   .. tip::
      
      `Fully qualify <https://msdn.microsoft.com/en-us/library/yfsftwz6%28v=vs.110%29.aspx?f=255&MSPPError=-2147217396>`_ a type if it is not in the **App_Code** folder to avoid conflicts with similarly named types from multiple sources.


*  Any custom dependency type included in the **Dependency** list. DNN can be extended by creating custom dependency types, which inherit from :code:`DotNetNuke.Services.Installer.Dependencies.DependencyBase` and must be included in a list called :code:`Dependency` (**Host** > **Lists**). Example:

   .. code-block:: xml

      <dependency type="SomeCustomDependencyType">ValueNeededBySomeCustomDependencyType</dependency>

   .. note::
      
      The custom dependency type must already be installed before it is used in another installation.

components
++++++++++

.. code-block:: xml

   <components>
       <component type="..." />
       <component type="..." />
       ...
   </components>

Some component types are applicable only to the package type of the same name; generic component types can be used with any package type.

**Generic component types**

.. class:: collapse-list

* Assembly
* Cleanup
* Config
* File
* ResourceFile
* Script

.. list-table::
   :widths: 50 50
   :header-rows: 1
   
   * - Specific Component Type
     - Package type
   * - AuthenticationSystem
     - Auth_System
   * - Container
     - Container
   * - CoreLanguage
     - CoreLanguagePack
   * - DashboardControl
     - DashboardControl
   * - ExtensionLanguage
     - ExtensionLanguagePack
   * - Module
     - Module
   * - Provider
     - Provider
   * - URL Provider
     - Provider
   * - Skin
     - Skin
   * - SkinObject
     - SkinObject

*  `Assembly <http://www.dnnsoftware.com/wiki/manifest-assembly-component>`_. Assemblies to be installed in the main :code:`\bin` folder of the installation. Assemblies are the compiled code portion of your extension. They can be your own assemblies or third-party assemblies that you ship with your extension.

   .. code-block:: xml

        <component type="Assembly">
            <assemblies>
                <assembly>
                    <path />  <!-- Path of the assembly to install. Relative to the \bin folder of the DNN installation. -->
                    <name />  <!-- Name of the assembly to install. -->
                    <version />  <!-- Version of the assembly to install. -->
                </assembly>
                <assembly action="Unregister">
                    <path />  <!-- Path of the assembly to remove. Relative to the \bin folder of the DNN installation. -->
                    <name />  <!-- Name of the assembly to remove. -->
                    <version />  <!-- Version of the assembly to remove. -->
                </assembly>
                ...
            </assemblies>
        </component>


*  `AuthenticationSystem <http://www.dnnsoftware.com/wiki/manifest-authenticationsystem-component>`_.
    Authentication providers used by the extension, such as **Facebook**, **Google**, **Twitter**, and **Microsoft Accounts**.
    By default, DNN authenticates using its own database.
    
    .. code-block:: xml

        <component type="AuthenticationSystem">
        <authenticationService>
            <type>Facebook</type>
            <settingsControlSrc />
            <loginControlSrc />
            <logoffControlSrc />
        </authenticationService>
        <authenticationService />
        ...
        </component>

*  `Cleanup <http://www.dnnsoftware.com/wiki/cleanup-component>`_.
    List of files that must be deleted during installation or upgrade of the package.
    
    You can list the files individually in the manifest.

    .. code-block:: xml

        <component type="Cleanup" version="07.40.00">
            <files>
                <file>
                    <path>bin</path>
                    <name>MyFile.dll</name>
                </file>
                <file />
                ...
            </files>
        </component>

    You can also list the files with their paths in a text file instead.

    .. code-block:: xml

        <component type="Cleanup" version="07.40.00" fileName="ListOfFilesToDelete.txt" />

    See also:

    .. class:: collapse-list

    *  Component type :ref:`Config <Config-Component>` to update configuration files during uninstall.
    *  Component type :ref:`Script <Script-Component>` for data provider scripts that must be uninstalled.


.. _Config-Component:

*  `Config <http://www.dnnsoftware.com/wiki/manifest-config-component>`_.
    Changes to do on the specified config file.

    .. code-block:: xml

        <component type="Config">
        <config>
            <configFile>web.config</configFile>  <!-- Name of config file, including its path relative to the root of the DNN installation. -->
            <install>
                <configuration>
                    <nodes>
                        <node path="/configuration/system.webServer/handlers" action="update" key="path" collision="overwrite">
                            ...
                        </node>
                        <node />
                        ...
                    </nodes>
                </configuration>
            </install>
            <uninstall>
                <configuration>
                    <nodes />
                </configuration>
            </uninstall>
        </config>
        <config />
        ...
        </component>

    For information on :code:`node` attributes, see `Manifest: XML Merge <http://www.dnnsoftware.com/wiki/manifest-xml-merge>`_.



*  `Container <http://www.dnnsoftware.com/wiki/manifest-container-component>`_.
    Containers to be installed.

    .. code-block:: xml

        <component type="Container">
        <containerFiles>
            <basePath />  <!-- Target base folder for the component installation. Relative to the root of the DNN installation. -->
            <containerName />
            <containerFile>
                <path />  <!-- Target file folder. Relative to basePath. -->
                <name />
            </containerFile>
            <containerFile />
            ...
        </containerFiles>
        </component>

*  `DashboardControl <http://www.dnnsoftware.com/wiki/manifest-dashboardcontrol-component>`_.
    Controls that will appear as separate tabs in the DNN Dashboard (**Host** > **Dashboard**).
    
    .. code-block:: xml

        <component type="DashboardControl">
        <dashboardControl>
            <key />
            <src />
            <localResources />
            <controllerClass />
            <isEnabled />
            <viewOrder />
        </dashboardControl>
        <dashboardControl />
        ...
        </component>

*  `File <http://www.dnnsoftware.com/wiki/manifest-file-component>`_.
    Files to be installed. By default, only files with allowed file extensions are installed; however, the host user can bypass this security check during installation. To view or modify the list of file extensions, go to **Host** > **Host Settings** > **Other Settings** > **Allowable File Extensions** in your DNN installation.

    .. code-block:: xml

        <component type="File">
        <files>
            <basePath />  <!-- Target base folder for the component installation. Relative to the root of the DNN installation. -->
            <file>
                <path />  <!-- Target file folder. Relative to basePath. Also assumed to be the source file folder in the zip file, if sourceFileName is not defined. -->
                <name />
                <sourceFileName />  <!-- The path and name of a file inside the zip file. -->
            </file>
            <file />
            ...
        </files>
        </component>

    **Example:** To copy :code:`img/MyAwesomeImageFile.jpg` from the zip file to :code:`desktopmodules/mymodule/images/MyFile.jpg`,

    .. code-block:: xml

        <basePath>desktopmodules/mymodule</basePath>
        <file>
        <path>images</path>
        <name>MyFile.jpg</name>
        <sourceFileName>img/MyAwesomeImageFile.jpg</sourceFileName>
        </file>

*  `CoreLanguage <http://www.dnnsoftware.com/wiki/manifest-corelanguage-component>`_.
    Language pack files required to localize the core DNN Platform for a specific culture. A core language pack can be installed during the DNN Platform installation or anytime after.

    .. code-block:: xml

        <component type="CoreLanguage">
        <languageFiles>
            <code />
            <displayName />
            <fallback />  <!-- Code for the alternative language. Used if a resource is not found in the current language pack. -->
            <languageFile>
                <path />  <!-- Target file folder. Relative to the root of the DNN installation. -->
                <name />
            </languageFile>
            <languageFile />
            ...
        </languageFiles>
        </component>

    For the list of supported language codes, see the .NET `CultureInfo <https://msdn.microsoft.com/en-us/library/system.globalization.cultureinfo(VS.80).aspx>`_ class.



*  `ExtensionLanguage <http://www.dnnsoftware.com/wiki/manifest-extensionlanguage-component>`_.
    Language pack files required to localize a DNN extension for a specific culture.

    .. code-block:: xml

        <component type="ExtensionLanguage">
        <languageFiles>
            <code />
            <package />  <!-- Name of another package that contains the extension that this language pack is intended for. -->
            <basePath />  <!-- Target base folder for the component installation. Relative to the root of the DNN installation. -->
            <languageFile>
                <path />  <!-- Target file folder. Relative to basePath. -->
                <name />
            </languageFile>
            <languageFile />
            ...
        </languageFiles>
        </component>

    For the list of supported language codes, see the .NET `CultureInfo <https://msdn.microsoft.com/en-us/library/system.globalization.cultureinfo(VS.80).aspx>`_ class.

*  `Module <http://www.dnnsoftware.com/wiki/module-component>`_.
    Only one component with :code:`type="Module"` is allowed within a **package** section. To install a set of modules as a unit, create one **package** section per module in the same manifest.

    .. code-block:: xml

        <component type="Module">
        <desktopModule>
            <moduleName />
            <foldername />
            <businessControllerClass />
            <codeSubdirectory />
            <isAdmin />
            <isPremium />
            <supportedFeatures> <!-- Requires a value for businessControllerClass. -->
                <supportedFeature type="Portable" /> <!-- The module has import/export capabilities using the IPortable interface. -->
                <supportedFeature type="Searchable" /> <!-- The module can be indexed or searched using the ISearchable interface. -->
                <supportedFeature type="Upgradeable" /> <!-- The module can be upgraded using the IUpgradeable interface. -->
                ...
            </supportedFeatures>
            <moduleDefinition>
                <friendlyName />
                <defaultCacheTime />
                <moduleControls>
                    <moduleControl>
                        <controlKey />
                        <controlSrc />
                        <supportsPartialRendering />
                        <controlTitle />
                        <controlType />
                        <iconFile />
                        <helpUrl />
                    </moduleControl>
                    <moduleControl />
                    ...
                </moduleControls>
                <permissions>
                    <!-- In <permission>,
                        "code" is the code for the module,
                        "key" is the code for the permission, and
                        "name" is the user-friendly name for the permission.
                    -->
                    <permission code="..." key="..." name="..." />
                    <permission code="..." key="..." name="..." />
                    ...
                </permissions>
            </moduleDefinition>
        </desktopModule>
        <eventMessage>
            <processorType />
            <processorCommand />
            <attributes>
                <node>value</node>
            </attributes>
        </eventMessage>
        </component>

*  `Provider <http://www.dnnsoftware.com/wiki/manifest-provider-component>`_.
    Extends the list of allowed file extensions. These additional file extensions apply only to the current installation and are not added to the global list of file extensions found in **Host** > **Host Settings** > **Other Settings** > **Allowable File Extensions**. The following file extensions can be allowed: .ashx, .aspx, .ascx, .vb, .cs, .resx, .css, .js, .resources, .config, .xml, .htc, .html, .htm, .text, .vbproj, .csproj, and .sln.

    .. code-block:: xml

        <component type="Provider" />

*  `ResourceFile <http://www.dnnsoftware.com/wiki/manifest-resourcefile-component>`_.
    Zip files to be expanded during installation. Can be used instead of :code:`component type="File"` to simplify the manifest for packages that contain many files.

    .. code-block:: xml

        <component type="ResourceFile">
        <resourceFiles>
            <basePath /> <!-- Target folder where the contents of the zip file will be installed. Relative to the root of the DNN installation. -->
            <resourceFile>
                <name /> <!-- Name of zip file. -->
            </resourceFile>
            <resourceFile />
            ...
        </resourceFiles>
        </component>

.. _Script-Component:

*  `Script <http://www.dnnsoftware.com/wiki/script-component>`_.
    Database scripts that the extension needs. The following scripts are handled differently:

    *  **install.&lt;dataprovidertype>** (e.g., :code:`install.SqlDataProvider`) is executed <i>before</i> all other scripts, if the package is being installed for the first time.
    *  **upgrade.&lt;dataprovidertype>** (e.g., :code:`upgrade.SqlDataProvider`) is executed <i>after</i> all regular scripts.

    .. code-block:: xml

        <component type="Script">
        <scripts>
            <basePath /> <!-- Target base folder for the component installation. Relative to the root of the DNN installation. -->
            <script type="Install" >
                <path /> <!-- Target file folder. Relative to basePath. -->
                <name /> <!-- Must be named "<scriptversion>.<dataprovider>". Example: 01.00.00.SqlDataProvider -->
                <version /> <!-- Version of script file to be installed. -->
            </script>
            <script type="UnInstall" >
                <path /> <!-- Location of script file. Relative to basePath. -->
                <name /> <!-- Must be named "uninstall.<dataprovidertype>". Example: uninstall.SqlDataProvider -->
                <version /> <!-- Version of script file to be removed. -->
            </script>
            ...
        </scripts>
        </component>

*  `Skin <http://www.dnnsoftware.com/wiki/manifest-skin-component>`_.
    All files related to the theme. The installer needs to parse the main theme files at installation time to replace relative folder names; therefore, every file of type **ASCX**, **HTML**, or **CSS** must be declared as a **skinFile**. Other files (i.e., images and scripts) can be packaged using component type "ResourceFile" to simplify the complexity of the theme manifest.

    .. code-block:: xml

        <component type="Skin">
        <skinFiles>
            <basePath /> <!-- Target base folder for the component installation. Relative to the root of the DNN installation. -->
            <skinName />
            <skinFile>
                <path /> <!-- Target file folder. Relative to basePath. -->
                <name />
            </skinFile>
            <skinFile />
            ...
        </skinFiles>
        </component>

*  `SkinObject <http://www.dnnsoftware.com/wiki/manifest-skinobject-component>`_.
    Custom theme objects. 

    .. code-block:: xml

        <component type="SkinObject">
        <moduleControl>
            <controlKey /> <!-- Token of the skin object within square brackets []; e.g., [COPYRIGHT] -->
            <controlSrc /> <!-- Target file folder for the theme object's ASCX file. -->
            <supportsPartialRendering /> <!-- "true" if the theme object supports partial rendering through an MS AJAX update panel wrapper. Default: "false" -->
        </moduleControl>
        </component>

*  `URL Provider <http://www.dnnsoftware.com/wiki/manifest-url-provider>`_.
    Custom URL provider to be used with the Advanced URL Management System (AUM).

    .. code-block:: xml

        <component type="URLProvider">
        <urlProvider>
            <name />
            <type />
            <settingsControlSrc />
            <redirectAllUrls />
            <replaceAllUrls />
            <rewriteAllUrls />
            <desktopModule />
        </urlProvider>
        </component>

Example
-------

Below is a sample theme manifest: 

.. literalinclude:: ../common/samples/MyThemeManifest.dnn
    :language: xml
    :linenos:
    
See Also
--------

.. class:: collapse-list

*  `Top 5 DotNetNuke Manifest file Module Packaging Tips <http://www.ifinity.com.au/Blog/EntryId/89/Top-5-DotNetNuke-Manifest-file-Module-Packaging-Tips>`_ by `Bruce Chapman <http://www.dnnsoftware.com/users/bruce-chapman>`_
*  DNN Community blog: `DAL 2 - A New DotNetNuke Data Layer for a New Decade <http://www.dnnsoftware.com/community-blog/cid/142201/dal-2-a-new-dotnetnuke-data-layer-for-a-new-decade>`_ by `Charles Nurse <http://www.dnnsoftware.com/activity-feed/userid/43261>`_

.. 
   `Contents of a Theme Package </design/REF-ContentsThemePack.shtml>`_
   `Contents of a Module Package </dev/REF-ContentsModulePack.shtml>`_ 


Sources
-------

.. class:: collapse-list

*  DNN Wiki: `Manifests <http://www.dnnsoftware.com/wiki/manifests>`_
*  DNN Community blog: `The New Extension Installer Manifest - Part 1, Introduction <http://www.dnnsoftware.com/community-blog/cid/135060/the-new-extension-installer-manifest-part-1-introduction>`_ by `Charles Nurse <http://www.dnnsoftware.com/activity-feed/userid/43261>`_
