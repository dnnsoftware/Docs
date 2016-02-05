=====================
 Module Architecture
=====================

Although every module provides a different set of features and functionality, some foundational architectural elements are common to virtually every module. Most DNN modules are developed using an n-tier architecture. Whether you build a Web Forms module, an MVC module, or a SPA module, you will implement most of these layers in your module.

|module-architecture|

Data Access Layer
-----------------

DNN supports three Data Access Layer (DAL) frameworks: DAL, DAL+ and DAL2. All three are based on the same underlying provider model, which enables DNN to be used with different underlying database management systems. 

.. note::
   DNN ships with a SQL Server database provider, which is used as the default . Other third-party providers are available for the following databases: Oracle, MySQL and MS Access; however, MySQL and MS Access providers are no longer maintained or supported.

DAL is a fully abstracted implementation that requires the following:

*  an abstract data provider class that defines your data layer API. 
*  a concrete implementation of this abstract class for every database type you wish to support (typically just SQL Server). 
*  database scripts to create the stored procedures, tables and views your module requires.

DAL+ adds generic data access methods to the core platform to eliminate the need for the abstract and concrete data provider classes. You can still use alternate databases, and you must still provide the necessary database scripts.

DAL2 uses the PetaPOCO Micro-ORM, which eliminates the need for writing stored procedures. DAL2 provides additional features, including integrated cache management which further simplifies your code. 
   
You can use any data access method, even those not directly supported by DNN. You can use more than one DAL technology within a single module. 

.. tip::
   Use DAL2 for most of your standard CRUD queries and DAL+ for more complex queries that may require performance tuning. This approach simplifies development and lets you focus your performance tuning efforts where it will have the most impact.
   
Caching Layer
-------------

One of the slowest actions you can perform in any web application is accessing the database. In many systems, data is stored in a format that is different from the format in which it will be used. Applications often perform complex queries to filter the dataset and then alter the format of the results prior to use. If the database is not local, the query takes longer, depending on network speed. Database queries are orders of magnitude slower than using an in-memory cache, and should be avoided when possible.

DNN provides built-in caching with the Cache API to improve your module's performance. If you use DNN's DAL or DAL+ APIs you should implement the `Cache-Aside Pattern <https://msdn.microsoft.com/en-us/library/dn589799.aspx>`_ to ensure optimum performance. The DAL2 provides built-in caching which you configure using attributes in your code.

 

You can use caching for: 

*  any data that is expensive to compute and yields the same results for a period of time. 
*  any data segment that is invariant for a subset of users or for a specific URL.

The Cache API can be extended to use different cache stores. The abstraction provided by the Cache API ensures that modules perform seamlessly, regardless of the caching provider installed by the site administrator.

.. tip::
   If a class would be stored in the cache, mark it :code:`[Serializable]` to ensure that it is stored correctly by out of process caching providers.
   
   .. code-block:: c#

      [Serializable]
      public class MyInfoClass
      {
          // Property declarations...
      }      

Business Logic Layer
--------------------

The business logic layer is where most of your business rules will be implemented. These rules can be as simple as validating data or as complex as orchestrating workflows across multiple backend systems. This layer is also responsible for coordinating calls to the caching and data access layers.

DNN provides APIs for handling common tasks like application security, file storage, list management, event logging, full-text search and many more. These APIs are fully abstracted and extensible so you can focus on just the business rules that are specific to your module.

Service Layer
-------------

DNN offers a Service Framework, built using ASP.Net Web API, that you can use for quickly defining web services. The Service Framework provides integrated access to common DNN entities within your service methods, so that your service can determine what site is being called, the user making the request, and the module facilitating the request. You can also secure your web services by specifying which applications and which users can access your service endpoints.

Presentation Layer
------------------

The core component in the presentation layer is the **Module Control**. Every unique view of a module is registered as a module control in the DNN manifest (see :ref:`Module Component <module-component>`). 

DNN APIs make it easy to access any module control, thus simplifying view management within your module.

Alternatively, modules can implement their own view dispatch methods to control when specific views are shown or how the module appears on the page.

Historically, the module control was implemented as an ASP.Net User Control. In Web Forms development, this is a natural element to use as the primary view component. With the introduction of SPA and MVC module types in DNN 8.0, DNN expanded the definition of module controls to more fully encompass the differences between the view rendering pipelines of the various frameworks.

For Web Forms modules, the primary view component is an ASP.NET User Control. In DNN this is called a module control. For MVC and SPA modules, DNN expanded the definition of module controls to accommodate their alternative view rendering pipelines.

**Next:** :doc:`Web-Forms-Module-Development`

See Also
--------

* :doc:`/HowTo/CreatingModules/Creating-Modules`
 
..  ***** Image Substitutions *****

.. |module-architecture| image:: /../common/img/module-architecture.png
    :class: img-responsive img-600 dnn-border
    :alt:  
