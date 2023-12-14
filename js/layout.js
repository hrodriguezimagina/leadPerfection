$( document ).ready(function() {
  /* Toggle sidebar */
  const smBreakpoint = 576 // 576px bootstrap sm breakpoint
  const mdBreakpoint = 768 // 768px bootstrap md breakpoint
  let sidebarIsExpanded = true;
  let sidebarCollapsedWidth = '128px';
  let sidebarExpandedWidth = '256px';

  init();
  
  jQuery(window).resize(function(){
   init();
  });

  jQuery(".toggleSidebarButton").on( "click", function() {
    sidebarIsExpanded ? collapseSidebar() : expandSidebar();
  });


  function init(){
    setHeader();
    jQuery(window).width() > mdBreakpoint ? expandSidebar() : collapseSidebar();
  }
  
  function setHeader(){
    isMobile() ? jQuery("#header").addClass('fixed-top') : jQuery("#header").removeClass('fixed-top');
  }

  function isMobile(){
    return (jQuery(window).width() < smBreakpoint);
  }  

  function collapseSidebar(){
    if (isMobile()) { 
      jQuery('#sidebar').hide();      
      jQuery("#main").css("margin-left", '0px');      
    } else {
      jQuery('#sidebar').show();
      jQuery(".sidebar-text").hide();
      jQuery('#closeSidebarButton').hide();
      jQuery("#sidebar").width(sidebarCollapsedWidth);
      jQuery("#sidebar-menu").removeClass('align-items-stretch');
      jQuery("#main").css("margin-left", sidebarCollapsedWidth);
    }
    sidebarIsExpanded = false;
  }

  function expandSidebar(){    
    if (isMobile()){
      jQuery('#closeSidebarButton').show() 
    } else {      
      jQuery('#closeSidebarButton').hide();
      jQuery("#main").css("margin-left", sidebarExpandedWidth);
    }
    jQuery("#sidebar").width(sidebarExpandedWidth);      
    jQuery("#sidebar-menu").addClass('align-items-stretch');      
    jQuery(".sidebar-text").show();    
    jQuery('#sidebar').show();
    sidebarIsExpanded = true;
  }
});
