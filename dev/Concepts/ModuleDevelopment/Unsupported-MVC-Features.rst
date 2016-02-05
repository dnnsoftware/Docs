==========================
 Unsupported MVC Features
==========================

Overview
--------

Some MVC features were not fully implemented in DNN 8 due to the differences between ASP.Net MVC and ASP.Net Web Forms frameworks.

Not Implemented
---------------

*  HTML Helpers

   .. class:: collapse-list
   
   *  FormExtensions (BeginForm, BeginRouteForm, EndForm) 
   *  Html.RouteLink 
   *  All ChildActionExtensions i.e. Html.Action, Html.RenderAction
   
*  Url Helpers

   .. class:: collapse-list
   
   *  Url.Action(string actionName, string controllerName, RouteValueDictionary routeValues, string protocol) 
   *  Url.Action(string actionName, string controllerName, object routeValues, string protocol)
   *  Url.Action(string actionName, string controllerName, RouteValueDictionary routeValues, string protocol, string hostName) 
   *  Url.RouteUrl
   *  Url.HttpRouteUrl

*  Controller Action Return Types - DNN 8 expects actions to return an ActionResult.  All other result types are currently unsupported
   
   .. class:: collapse-list
   
   *  PartialViewResult,
   *  JsonResult
   *  ContentResult
   *  EmptyResult
   *  FileResult
   *  FileStreamResult
   *  JavaScriptResult
   *  RedirectResults
   *  RedirectToRouteResult

*  AsyncControllers

*  Attribute Routing

*  Bundles - DNN implements a different minification and bundling API which is available for MVC modules.

Coming in DNN 8.0.1
-------------------

* Ajax Helpers

* Partial View support