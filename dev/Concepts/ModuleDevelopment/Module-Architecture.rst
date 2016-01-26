=====================
 Module Architecture
=====================

While every module provides a different set of features and functionality, there are some foundational architectural elements that are common to virtually every module. DNN modules are generally developed using an n-tier architecture. Regardless of whether you are building your module using Web Forms, MVC or even the new SPA module type, you will end up implementing most of these layers in your module.

Data Access Layer
-----------------

The DNN Data Access Layer (DAL) framework has gone through many evolutions over the last ten years.  Currently, there are three different DAL variations supported in DNN: DAL, DAL+ and DAL2. All DAL implementations are based on the same underlying provider model which enables DNN to be used with different underlying database systems. 

.. note::
   Since its inception DNN has had providers for MS Access, MySQL, SQL Server and Oracle. DNN currently ships and supports a SQL Server database provider. There is also a 3rd party Oracle provider available. MySQL and MS Access providers are no longer maintained or supported.
   
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

Business Logic Layer
--------------------

Service Layer
-------------

Presentation Layer
------------------
 
- Module Controls
 
..  ***** Image Substitutions *****

.. |module-action-menu| image:: /../common/img/module-action-menu.png
    :class: img-responsive img-600 dnn-border
    :alt:  
