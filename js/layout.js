$( document ).ready(function() {
  /* Toggle sidebar */
  let sidebarIsExpanded = false;
  let sidebarCollapsedWidth;
  let sidebarExpandedWidth;

  sidebarIsExpanded ? collapseSidebar() : expandSidebar();

  jQuery(window).resize(function(){
    checkWidth();
    resizeSidebar();
  });

  jQuery("#toggleSidebarButton").on( "click", function() {
    sidebarIsExpanded ? collapseSidebar() : expandSidebar();
  });

  function checkWidth(){
    const windowsize = jQuery(window).width();
    if (windowsize > 576 ) { //sm breakpoint
      sidebarCollapsedWidth = '128px';
      sidebarExpandedWidth = '256px';
    } else {
      sidebarCollapsedWidth = '64px';
      sidebarExpandedWidth = '140px';
    }
  }

  function resizeSidebar(){
    !sidebarIsExpanded ? collapseSidebar() : expandSidebar();
  }

  function collapseSidebar(){
    checkWidth();
    jQuery("#sidebar-menu").removeClass('align-items-stretch');
    jQuery("#sidebar").width(sidebarCollapsedWidth);
    jQuery(".sidebar-text").hide();
    //jQuery("header").css("margin-left", sidebarCollapsedWidth);
    jQuery("#main").css("margin-left", sidebarCollapsedWidth);
    sidebarIsExpanded = false;
  }

  function expandSidebar(){
    checkWidth();
    jQuery("#sidebar-menu").addClass('align-items-stretch');
    jQuery("#sidebar").width(sidebarExpandedWidth);
    jQuery(".sidebar-text").show();
    //jQuery("#header").css("margin-left", sidebarExpandedWidth);
    jQuery("#main").css("margin-left", sidebarExpandedWidth);
    sidebarIsExpanded = true;
  }
});
