$( document ).ready(function() {
  /* Toggle sidebar */
  let sidebarIsExpanded = false;
  const sidebarCollapsedWidth = '128px';
  const sidebarExpandedWidth = '256px';

  sidebarIsExpanded ? collapseSidebar() : expandSidebar();
  
  jQuery("#toggleSidebarButton").on( "click", function() {
    sidebarIsExpanded ? collapseSidebar() : expandSidebar();
  });

  function collapseSidebar(){
    jQuery("#sidebar-menu").removeClass('align-items-stretch');
    jQuery("#sidebar").width(sidebarCollapsedWidth);
    jQuery(".sidebar-text").hide();
    jQuery("#main").css("margin-left", sidebarCollapsedWidth);
    sidebarIsExpanded = false;
  }

  function expandSidebar(){
    jQuery("#sidebar-menu").addClass('align-items-stretch');
    jQuery("#sidebar").width(sidebarExpandedWidth);
    jQuery(".sidebar-text").show();
    jQuery("#main").css("margin-left", sidebarExpandedWidth);
    sidebarIsExpanded = true;
  }
});