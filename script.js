
//go away.
//nothing to see here
$(document).ready(function() {
    
	var $banner = $('.banner');
	var $content = $('.content');
	var $project = $('.project');
	var $close = $('.close');
	var $other = $('.other');
	var $closeall = $('#closeall');
	
	$banner.mouseenter( function() {
        $(this).fadeTo('fast', 1);});
    $banner.mouseleave( function() {
	if($(this).parent('.project').children('.content').css("display") == "none") {
        $(this).fadeTo('fast', 0.85);
		}});
	$banner.click(function(){
		$(this).parent('.project').children('.content').toggle();
		$(this).ScrollTo({
		easing: 'swing'
	});
		$(this).fadeTo('slow', 1);});
		
	$close.mouseenter( function() {
        $(this).fadeTo('fast', 1);});
	$close.mouseleave( function() {
        $(this).fadeTo('fast', 0.85);});	
	$close.click(function(){
		$(this).parent('.content').toggle();
		});
	
	$other.mouseenter( function() {
        $(this).fadeTo('fast', 1);});
	$other.mouseleave( function() {
        $(this).fadeTo('fast', 0.85);});	
		
	$closeall.mouseenter( function() {
        $(this).fadeTo('fast', 1);});
	$closeall.mouseleave( function() {
        $(this).fadeTo('fast', 0.85);});	
	$closeall.click(function(){
	if (window.console) console.log('foo');
		$content.hide();
		});		
	
});
	
