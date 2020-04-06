$(function () {
    var t = $("progress"), timer = 0, c = 0;
    $("#start-button").click(function () {
        0 === timer && (timer = window.setInterval(function () {
            t.attr("value", c++)
        }, 100))
    }), $("#stop-button").click(function () {
        window.clearInterval(timer), timer = 0
    }), $("#reset-button").click(function () {
        t.attr("value", c = 0)
    })
});