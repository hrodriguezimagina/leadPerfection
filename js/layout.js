$( document ).ready(function() {
  /* Toggle sidebar */
  const smBreakpoint = 576 // 576px bootstrap sm breakpoint
  const mdBreakpoint = 992 // 768px bootstrap md breakpoint
  const sidebarCollapsedWidth = '104px';
  const sidebarExpandedWidth = '258px';

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
    const header = jQuery("#header");
    const content  = jQuery("#content");
    if (isMobile()){
      header.addClass('fixed-top');
      header.css('background-color', '#ffffff');
      header.addClass('border-bottom');
      const marginTop = header.height() + 20;
      content.css("margin", '10px');
      content.css("margin-top", marginTop + 'px');
    } else {
      header.removeClass('fixed-top');
      header.removeClass('border-bottom');
      header.css('background-color', 'rgba(255, 255, 255, 0.7)');            
      content.css("margin", '30px');
    }
  }

  function isMobile(){
    return (jQuery(window).width() < smBreakpoint);
  }  

  function collapseSidebar(){
    if (isMobile()) { 
      jQuery('#sidebar').hide();      
      jQuery("#main").css("margin-left", '0px');      
      jQuery(".sidebar-button-open").css('margin-left', '0px')
    } else {
      jQuery('#sidebar').show();
      jQuery(".sidebar-text").hide();
      jQuery("#sidebar").width(sidebarCollapsedWidth);
      jQuery("#sidebar-menu").removeClass('align-items-stretch');
      jQuery("#main").css("margin-left", sidebarCollapsedWidth);    
      jQuery('#company-logo').hide()
      jQuery('#company-logo-mini').show()      
      jQuery(".sidebar-button-open").css('margin-left', '100px')
    }
    jQuery('.sidebar-button-close').hide() 
    jQuery('.sidebar-button-open').show()
  }

  function expandSidebar(){    
    if (isMobile()){
    } else {
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
  }

  /* jQuery datepicker */
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
