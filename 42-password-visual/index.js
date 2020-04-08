var $getPwd = (function(){
  var html=$('<div id="box"><input type="password" id="pwd"><i class="iconfont icon-Eyevision" id="icon"></i></div>');
  function show(container){
    $(container).append(html);
    $pwd = $(container+' #pwd');
  }
  function getPwd(container){
    var $pwd = $('#pwd');
    var $mima=$("<p id='mima'>密码可视化</P>")
    $(container).css({"background":"pink"});
    $("#mima").html($pwd.val());
    $(container).append($mima);
  }
  return{
    show:show,
    getPwd:getPwd
  }
})();