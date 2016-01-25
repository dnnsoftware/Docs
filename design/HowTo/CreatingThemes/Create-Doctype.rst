==============================
 Create a Doctype Declaration
==============================

Overview
--------

When creating themes, designers often rely on specific HTML and CSS versions in order to achieve the desired design. A design intended to be viewed using HTML 5 will not look correct if rendered using the XHTML or HTML 4 specification.
Theme designers can set the doctype of the theme to any valid HTML doctype by creating a doctype declaration file.  

A theme may contain a single doctype file called skin.doctype.xml which will apply to all layouts in the theme. Additionally, themes may contain a separate doctype file specific to an individual layout. This layout specific doctype will override the theme wide doctype. 

.. note::
   If no doctype is specified by the theme designer then the fallback doctype configured in **Host Settings** will be used. By default DNN uses the HTML 4.0 Transitional doctype (:code:`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">`)

Steps
-----

1. Create a theme doctype file named **skin.doctype.xml**.

   **Example:** If your layout template file is called **MyAwesomeLayout.html**, give your doctype file the name **MyAwesomeLayout.doctype.xml**.


#. Enter one of the following in your DocType file:

   *  HTML 4.01 Transitional

      .. code-block:: xml  

         <SkinDocType>
             <![CDATA[<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">]]>
         </SkinDocType>
       
   *  XHTML Strict

      .. code-block:: xml  

         <SkinDocType>
             <![CDATA[<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">]]>
         </SkinDocType>

   *  XHTML Transitional

      .. code-block:: xml  

         <SkinDocType>
             <![CDATA[<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">]]>
         </SkinDocType>

   *  HTML5

      .. code-block:: xml  

         <SkinDocType>
             <![CDATA[<!DOCTYPE html>]]>
         </SkinDocType>


See Also
--------

*  DNN Wiki: `DotNetNuke Skins <http://www.dnnsoftware.com/wiki/dotnetnuke-skins>`_

Sources
-------

* DNN Community blog: `>DotNetNuke Skinning 101 (Part 2) <http://www.dnnsoftware.com/community-blog/cid/131999/dotnetnuke-skinning-101-part-2>`_ by `Joe Brinkman <http://www.dnnsoftware.com/activity-feed/userid/8129>`_
