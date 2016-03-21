 /* $(document).ready(function(){
    $('ul.tabs').tabs('select_tab', 'tab_id');

  });*/

$(document).ready(function(){
	$('ul.tabs').tabs();
	$(".button-collapse").sideNav();
	$('.materialboxed').materialbox();
	$('.collapsible-popout').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
});