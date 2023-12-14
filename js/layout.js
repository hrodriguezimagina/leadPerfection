$( document ).ready(function() {
  /* Toggle sidebar */
  const mdBreakpoint = 576 // 576px bootstrap md breakpoint
  let sidebarIsExpanded = false;
  let sidebarCollapsedWidth = '128px';
  let sidebarExpandedWidth = '256px';

  isMobile() ? collapseSidebar() : expandSidebar();


  jQuery(window).resize(function(){
    isMobile() ? collapseSidebar() : expandSidebar();
  });

  jQuery(".toggleSidebarButton").on( "click", function() {
    sidebarIsExpanded ? collapseSidebar() : expandSidebar();
  }); 
  

  function isMobile(){
    return (jQuery(window).width() < mdBreakpoint);
  }


  function collapseSidebar(){
    if (isMobile()) { 
      jQuery('#sidebar').hide();
      jQuery("#main").css("margin-left", '0px');
    } else {
      jQuery('#closeSidebarButton').hide();
      jQuery("#sidebar").width(sidebarCollapsedWidth);
      jQuery("#sidebar-menu").removeClass('align-items-stretch');      
      jQuery(".sidebar-text").hide();
      //jQuery("header").css("margin-left", sidebarCollapsedWidth);
      jQuery("#main").css("margin-left", sidebarCollapsedWidth);
    }
    sidebarIsExpanded = false;
  }

  function expandSidebar(){
    jQuery('#sidebar').show();
    if (isMobile()) { 
      jQuery('#closeSidebarButton').show();
    } else {
      jQuery('#closeSidebarButton').hide();
      jQuery('#sidebar').show();
      jQuery("#sidebar").width(sidebarExpandedWidth);      
      jQuery("#sidebar-menu").addClass('align-items-stretch');      
      jQuery(".sidebar-text").show();
      //jQuery("#header").css("margin-left", sidebarExpandedWidth);
      jQuery("#main").css("margin-left", sidebarExpandedWidth);
    }
    sidebarIsExpanded = true;
  }
});
