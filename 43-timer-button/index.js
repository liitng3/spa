define(['jquery']),function($){
var $timerButton = (function(){
  function show(conf){
    var cfg={
      num:6,
      container:"body",
      title:"同意",
      onClick:null
    };
    var timer;
    var $btn=$('<input class="timer-button" type="button" value="1">');

    $.extend(cfg,conf);
    $btn.appendTo($(cfg.container));
    console.log(cfg);
    if(cfg.disable){
      $btn.val(cfg.title);
      $btn.click( cfg.onClick )
      return;
    }
    $btn.attr('disabled','disabled');
    $btn.val(cfg.title+'('+cfg.num+'s)');
    if(timer){
      clearInterval(timer);
    }
    timer=setInterval(function(){
      cfg.num--;
      if(cfg.num === 0){
       $btn.val(cfg.title);
        $btn.removeAttr('disabled');
        clearInterval(timer);
      }else{
       $btn.val(cfg.title+'('+ cfg.num +'s)');
      }
    },1000);
    $btn.click( cfg.onClick )
  }
  return ({
    show:show
  })
})();
}

