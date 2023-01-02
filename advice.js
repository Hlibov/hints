function initHideNotice() {
  jQuery('.notice').each(function() {
    var holder = jQuery(this);
    var btn = holder.find('.notice_btn');

    btn.on('click', function(e){
      e.preventDefault();
      holder.css('display', 'none');
    })
  });
}