/* global jQuery */

(function ($) {
    'use strict';

    $(document).ready(function () {

        $('.toctree-l1')
            .has('.toctree-l2')
            .prepend('<i class="glyphicon glyphicon-triangle-right"></i>');

        // Toggle global nav on mobile
        $('.navbar-toggle').click(function () {
            var $this = $(this);

            if ($this.attr('aria-expanded') === 'false') {
                $this.attr('aria-expanded', true);
            } else {
                $this.attr('aria-expanded', false);
            }

            $('.nav-main-level').slideToggle(200);
        });

        // Toggle subnav on mobile
        $('.dropdown-toggle').click(function () {
            var $this = $(this);

            if ($this.attr('aria-expanded') === 'false') {
                $this.attr('aria-expanded', true);
            } else {
                $this.attr('aria-expanded', false);
            }

            $this.siblings('.nav-sub-level').slideToggle(200);
        });

        // open sub nav on mobile
        $('.doc-main-body').click(function () {
            if ($(window).width() < 992) {
                $('.doc-main-body').addClass('open');
            }
        });

        // close sub nav on mobile
        $('.doc-wrapper').click(function (e) {
            e.stopPropagation();

            if ($(window).width() < 992) {
                $('.doc-btn.open').click();
                $('.doc-main-body').removeClass('open');
            }
        });

        // open subnav for documentation nav
        $('.toctree-l1 > .glyphicon').click(function () {
            ToggleTree($(this));
        });

        // open subnav for current page
        $('.toctree-l1.current')
            .has('.toctree-l2')
            .children('.glyphicon')
            .click();

        // set the height of the documentation page when there isn't enough content to fill the page
        setDocumentHeight();

        // and check to do the same on resize
        $(window).smartresize(function () {
            setTimeout(function () { setDocumentHeight(); }, 270);
        });

        // adjust the HTML rendered by Sphinx for the TOC
        $('.article-nav-wrapper > ul')
            .attr({
                id: 'articleNavAffix',
                class: 'affix-top'
            })
            .children('li')
            .children()
            .wrapAll('<div id="articleNavSpy"></div>')
            .siblings('ul')
            .addClass('nav nav-tabs article-nav');
            
        $('#articleNavSpy > a').text('In this article:');
        
        // If there are no document sections, then hide the nav
        $('#articleNavSpy:not(:has(ul))').hide();
    
        // affix the article nav to the screen as you scroll down (bootstrap library)
        $('#articleNavAffix').affix({
            offset: {
                top: 27, // - $('.header').height(),
                bottom: function () {
                    return (this.bottom = $('.footer').outerHeight(true) + 30);
                },
            },
        });
		
        //have the article nav update as you scroll down the page
        $('body').scrollspy({ target: '#articleNavSpy', });
	
        //make the page scroll to it's location instead of jump	
        //catch all clicks on a tags
        $('a').click(function () {
            //check if it has a hash (i.e. if it's an anchor link)
            if (this.hash && (this.hash === $(this).attr('href'))) {
                var hash = this.hash.substr(1);
                var $toElement = $('[id=' + hash + ']');
                var toPosition = $toElement.offset().top;

                //scroll to element
                $('html').animate({
                    scrollTop: toPosition + 3,
                }, 1270);
            }
        });

        //do the same with urls with hash too (so on page load it will slide nicely)
        if (location.hash) {
            var hash = location.hash;
            window.scroll(0, 0);
            $('a[href=' + hash + ']').click();
        }
    });

    function setDocumentHeight() {
        var $doc = $('.doc');
        var $docWrapper = $('.doc-wrapper');
        var docMinHeight = (window.innerHeight - ($('.header').height() + $('.footer').height()));
        var docNav = $('.doc-nav-wrapper').height();
		var offsetToMakeFitPerfectly = -12;

        if ($doc.height() < docMinHeight || $doc.height() < docNav) {
            docNav > docMinHeight ?
                $docWrapper.height(docNav) :
				$docWrapper.height(docMinHeight + offsetToMakeFitPerfectly) ;
        }
    }
    
    function ToggleTree($elem) {
        if ($elem.hasClass('open')) {
            $elem
                .removeClass('open glyphicon-triangle-bottom')
                .addClass('glyphicon-triangle-right')
                .siblings('ul')
                .slideToggle(200);
            setTimeout(function () { setDocumentHeight(); }, 200);
        } else {
            $('.toctree-l1 > .glypicon.open')
                .removeClass('open glyphicon-triangle-bottom')
                .addClass('glyphicon-triangle-right')
                .siblings('ul')
                .slideToggle(200);
            $elem
                .addClass('glyphicon-triangle-bottom open')
                .siblings('ul')
                .slideToggle(200);
            setTimeout(function () { setDocumentHeight(); }, 200);
        }
    }

} (jQuery));

// debouncing function from John Hann
// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
(function($,sr){
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap) {
                  func.apply(obj, args);
              }

              timeout = null;
          }

          if (timeout){
              clearTimeout(timeout);
          }
          else if (execAsap){
              func.apply(obj, args);
          }

          timeout = setTimeout(delayed, threshold || 100);
      };
  };
  // smartresize 
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');