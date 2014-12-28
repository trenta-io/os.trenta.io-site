var _init = $.ui.dialog.prototype._init;
$.ui.dialog.prototype._init = function() {
    //Run the original initialization code
    _init.apply(this, arguments);
     
    //set some variables for use later
    var dialog_element = this;
    var dialog_id = this.uiDialogTitlebar.next().attr('id');
     
    //append our minimize icon
    this.uiDialogTitlebar.append('<a href="#" id="' + dialog_id + 
    '-minbutton" class="ui-dialog-titlebar-minimize ui-corner-all">'+
    '<span class="ui-icon ui-icon-minusthick"></span></a>');
     
    //append our minimized state
    $('#dialog_window_minimized_container').append(
        '<div class="dialog_window_minimized ui-widget ui-state-default ui-corner-all" id="' + 
        dialog_id + '_minimized">' + this.uiDialogTitlebar.find('.ui-dialog-title').text() + 
        '<span class="ui-icon ui-icon-newwin"></div>');
     
    //create a hover event for the minimize button so that it looks good
    $('#' + dialog_id + '-minbutton').hover(function() {
        $(this).addClass('ui-state-hover');
    }, function() {
        $(this).removeClass('ui-state-hover');
    }).click(function() {
        //add a click event as well to do our "minimalization" of the window
        dialog_element.close();
        $('#' + dialog_id + '_minimized').show();
    });
     
    //create another click event that maximizes our minimized window
    $('#' + dialog_id + '_minimized').click(function() {
        $(this).hide();
        dialog_element.open();
    });
};