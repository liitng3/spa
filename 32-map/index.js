$(function() {
  var main = new BMap.Map("main"),
  dian = new BMap.Point(114.529963,38.003679);
  main.centerAndZoom(dian, 25),
  main.addControl(new BMap.MapTypeControl({
      mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
  })),
  main.enableScrollWheelZoom(!0),
  main.setMapType(BMAP_HYBRID_MAP);
  var a = new BMap.Marker(dian,{title: "现在在这里哦"});
  a.setAnimation(BMAP_ANIMATION_BOUNCE),
  main.addOverlay(a);
  var n = new BMap.InfoWindow('<div style="width: 250px"><p>你现在在这儿里嗷</p><a href="https://github.com/luyishuang" target="_blank"></a></div>',{
      width: 230,
      height: 100,
      title: "<strong>注意看</strong>"
  });
  a.openInfoWindow(n),
  a.addEventListener("click", function() {
      main.openInfoWindow(n, dian)
  })
});