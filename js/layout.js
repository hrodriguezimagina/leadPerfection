$( document ).ready(function() {
  /* Toggle sidebar */
  const smBreakpoint = 576 // 576px bootstrap sm breakpoint
  const mdBreakpoint = 992 // 768px bootstrap md breakpoint
  const sidebarCollapsedWidth = '104px';
  const sidebarExpandedWidth = '258px';
  let sidebarIsExpanded = true;

  // stores the selected date
  let selectedDate;

  init();
  configDatepicker()
  
  jQuery(window).resize(function(){
   init();
  });

  jQuery(".sidebar-button-close").on( "click", function() {
    collapseSidebar() 
  }); 

  jQuery(".sidebar-button-open").on( "click", function() {
    expandSidebar();
  }); 
  

  function init(){
    setHeader();
    jQuery(window).width() > mdBreakpoint ? expandSidebar() : collapseSidebar();
  }
  
  function setHeader(){
    if (isMobile()){
      jQuery("#header").addClass('fixed-top');
      const marginTop = jQuery('#header').height() + 8;
      jQuery("#content").css("margin-top", marginTop + 'px');
    } else {
      jQuery("#header").removeClass('fixed-top');
      jQuery("#content").css("margin-top", '0px');
    }
  }

  function isMobile(){
    return (jQuery(window).width() < smBreakpoint);
  }  

  function collapseSidebar(){
    console.log('hello')
    if (isMobile()) { 
      jQuery('#sidebar').hide();      
      jQuery("#main").css("margin-left", '0px');      

    } else {
      jQuery('#sidebar').show();
      jQuery(".sidebar-text").hide();
      //jQuery('#close-sidebar-button').hide();
      jQuery("#sidebar").width(sidebarCollapsedWidth);
      jQuery("#sidebar-menu").removeClass('align-items-stretch');
      jQuery("#main").css("margin-left", sidebarCollapsedWidth);    
      jQuery('#company-logo').hide()
      jQuery('#company-logo-mini').show()
    }
    jQuery('.sidebar-button-close').hide() 
    jQuery('.sidebar-button-open').show() 
    sidebarIsExpanded = false;
  }

  function expandSidebar(){    
    if (isMobile()){
      //jQuery('#close-sidebar-button').show()
    } else {      
      //jQuery('#close-sidebar-button').hide();
      jQuery("#main").css("margin-left", sidebarExpandedWidth);      
    }
    jQuery("#sidebar").width(sidebarExpandedWidth);      
    jQuery("#sidebar-menu").addClass('align-items-stretch');      
    jQuery(".sidebar-text").show();    
    jQuery('#sidebar').show();
    jQuery('.sidebar-button-close').show() 
    jQuery('.sidebar-button-open').hide() 
    jQuery('#company-logo').show()
    jQuery('#company-logo-mini').hide()
    
    sidebarIsExpanded = true;
  }

  /* jquery datepicker */
  function configDatepicker(){  
    const datePickerContainer = jQuery('#datepicker-container');
    // init and hide datepicker
    jQuery("#datepicker").datepicker({
      autoSize: true,
      firstDay: 1, // Start with Monday, 
      dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      onSelect: function(date, obj){
        selectedDate = date
      }
    });
    datePickerContainer.hide();
    
    jQuery('#datepicker-button').on("click", function (e) {
      datePickerContainer.toggle();
    });    
    jQuery('#datepicker-save-button').on("click", function (e) {
      datePickerContainer.hide();
    });
  }
});
