================================
 Overview of Module Development
================================

.. toctree::
   :hidden: 

   Module-Features
   Module-Architecture
   
The module is one of the foundational building blocks for extending the DNN platform. It is the primary extension type for adding functionality that enables users to view, create and edit content. In fact most of the administrative features within DNN are implemented as modules.

.. tip::
   The DNN platform source code provides more than two dozen modules that you can use as examples of how to build modules for DNN.
   
Pages within DNN are comprised of one or more modules. Each module on the page is used for managing a specific block of content which makes it easy to build very complex pages with mix of simple and complex content types. You can rearrange modules on a page or even share the module and its content on another page, since each module is managed independently.

|module-overview|

Due to the modular nature of page composition in DNN, modules are usually built to manage and display one specific type of content. Consider creating multiple modules when managing complex content types, or include rich templating support so that administrators can control the layout of content on the page. 

..  ***** Image Substitutions *****

.. |module-overview| image:: /../common/img/module-overview.png
    :class: img-responsive img-600 dnn-border
    :alt:  
