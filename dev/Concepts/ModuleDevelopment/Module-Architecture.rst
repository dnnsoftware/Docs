=====================
 Module Architecture
=====================

While every module provides a different set of features and functionality, there are some foundational architectural elements that are common to virtually every module. DNN modules are generally developed using an n-tier architecture. Regardless of whether you are building your module using Web Forms, MVC or even the new SPA module type, you will end up implementing most of these layers in your module.

|module-architecture|

Data Access Layer
-----------------

The DNN Data Access Layer (DAL) framework has gone through many evolutions over the last ten years.  Currently, there are three different DAL variations supported in DNN: DAL, DAL+ and DAL2. All DAL implementations are based on the same underlying provider model which enables DNN to be used with different underlying database systems. 

.. note::
   Since its inception DNN has had providers for MS Access, MySQL, SQL Server and Oracle. DNN currently ships and supports a SQL Server database provider. There is also a 3rd party Oracle provider available. MySQL and MS Access providers are no longer maintained or supported.

The DAL is a fully abstracted implementation that requires the use of an abstract data provider class that defines your data layer API. In addition, you must provide a concrete implementation of this abstract class for every database type you wish to support (typically just SQL Server). Finally, you need to create corresponding database scripts for any stored procedures, tables and views your module requires.

The DAL+ adds some generic data access methods into the core platform which allows you to eliminate the need for the abstract and concrete data provider classes. DNN still implements these generic methods using the provider model which means you still get full support for alternate databases if you choose. While this approach cuts down on the boilerplate code you have to write, you are still required to provide the necessary database scripts.

The DAL2 was created to take advantage of more modern ORM approach to database access. The DAL2 uses the PetaPOCO Micro-ORM under the covers which eliminates the need for writing stored procedures. In addition, the DAL2 provides features like integrated cache management which further simplifies your code. 
   
You are free to use any data access method you choose, even ones not directly supported by the framework. You can even mix different DAL technology in a single module. Many developers like the simplicity of the DAL2 framework, while others prefer the greater level of control provided by the DAL or DAL+ frameworks. 

.. tip::
   Use the DAL2 for most of your standard CRUD queries and DAL+ for more complex queries that may require performance tuning. This approach simplifies development and lets you focus your performance tuning efforts where it will have the most impact.
   
Caching Layer
-------------

One of the slowest actions you can perform in any web application is accessing the database. In many systems, data is stored in a format that is different from the format in which it will be used. Applications must often perform complex queries to filter datasets or alter the shape of the data returned. In addition, accessing the database often involves making a call across the network, which is a relatively slow operation. Due to these issues and more, a database query is often orders of magnitude slower than retrieving the same data from an in-memory cache.

DNN provides a Cache API that you can use to significantly speed up your module's performance. When using DNN's DAL or DAL+ APIs you should implement the `Cache-Aside Pattern <https://msdn.microsoft.com/en-us/library/dn589799.aspx>`_ to ensure optimum performance. The DAL2 provides built-in caching which greatly simplifies your development efforts. 

Caching is not just useful for database access. Any data which is expensive to compute and that yields the same results for some fixed period of time, can benefit from using the DNN cache. Sometimes you may even choose to segment data by different parameters in order to identify data which is invariant for a subset of users or for a specific URL.

The DNN cache is very flexible and can provide significant performance improvements if used consistently throughout your module. Like many aspects of DNN, the Cache API is extensible so that you can take advantage of different Cache stores depending on the need of your site. The Cache API is designed so that your module will continue to operate seamlessly, regardless of the Caching Provider installed by the administrator.

.. tip::
   Your module should always mark any class that is stored in the cache as :code:`[Serializable]`. The attribute ensures that your class can be properly stored in the cache when using out of process caching providers.
   
   .. code-block:: c#

      [Serializable]
      public class MyInfoClass
      {
          // Property declarations...
      }      

Business Logic Layer
--------------------

The business logic layer is where most of your business rules will be implemented. This can be as simple as validating data or as complex as orchestrating workflows across multiple backend systems. This layer is also responsible for coordinating calls to the caching and data access layers.

While DNN does not provide a common pattern for building out your business logic, it does provide a large set of APIs that you can leverage within your module. DNN provides APIs for handling common tasks like application security, file storage, list management, event logging, full-text search and many more. Often these APIs are fully abstracted and extensible so that your module doesn't have to worry about where a file is stored, or how a user is authenticated, but instead you can focus on just the business rules that are specific to your module.

Service Layer
-------------

When developing modules you often want to make your module data and business methods available as a set of web services. Typically, web services are just thin wrappers around existing business methods.

DNN offers a Service Framework, built using ASP.Net Web API, that you can use for quickly defining your web services. The Service Framework offers a base class that provides integrated access to common DNN entities within your service methods. Your service can quickly determine what site is being called, what user is making the request, and what module is making the request. DNN makes it easy for you to create secure web services putting you in charge of which applications and users can call your service endpoints.

.. note::
   The DNN Service Framework was updated in DNN 8.0 to use Web API 2.1, and to include a new JWT based authentication system.

Presentation Layer
------------------

Like with the data access layer, DNN is very opinionated when it comes to building the presentation layer. Regardless of whether you are building modules using Web Forms, MVC or SPA module approaches, DNN provides a set of base classes and APIs aimed at accelerating your development. DNN also attempts to prescribe development approaches to ensure your module will behave consistently with the core platform and other modules in the ecosystem.    

The foundational DNN component in the presentation layer is the **Module Control**. Traditionally, every unique view within a module is registered as a module control in the module definition section of the DNN manifest (see :ref:`Module Component <module-component>`). DNN provides APIs that make it easy to navigate to any specified module control which simplifies view management within your module.

Alternatively, some modules implement their own view dispatch methods which gives them greater control over when specific views are shown, and how their module appears on the page. Implementing your own custom dispatch method involves a lot of extra work; sometimes that extra control over your user experience is worth the effort.

Historically, the module control was implemented as an ASP.Net User Control. In Web Forms development, this is a natural element to use as the primary view component. With the introduction of SPA and MVC module types in DNN 8.0, DNN expanded the definition of module controls to more fully encompass the differences between the view rendering pipelines of the various frameworks.


 
..  ***** Image Substitutions *****

.. |module-architecture| image:: /../common/img/module-architecture.png
    :class: img-responsive img-600 dnn-border
    :alt:  

.. |module-action-menu| image:: /../common/img/module-action-menu.png
    :class: img-responsive img-600 dnn-border
    :alt:  
