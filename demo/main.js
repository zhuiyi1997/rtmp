
require.config({
    paths: {
        "rtmp-streamer": "../rtmp-streamer.min"
    }
});

require(["rtmp-streamer"], function (RtmpStreamer) {

    var getUrl = function () {
        return document.getElementById('url').value;
    };

    var getName = function () {
        return document.getElementById('stream-name').value;
    };

    var streamer = new RtmpStreamer(document.getElementById('rtmp-streamer'));
    var player = new RtmpStreamer(document.getElementById('rtmp-player'));

    document.getElementById("play").addEventListener("click", function () {
        player.setScreenPosition(0,-190)
        player.setScreenSize(500,750)
        console.log('触发了点击事件')
        player.play(getUrl(), getName());
    });

    document.getElementById("publish").addEventListener("click", function () {
        streamer.setScreenPosition(0,-190)
        streamer.setScreenSize(500,750)
        streamer.publish(getUrl(), getName());
    });

    document.getElementById("streamer-disconnect").addEventListener("click", function () {
        streamer.disconnect();
    });

    document.getElementById("player-disconnect").addEventListener("click", function () {
        player.disconnect();
    });

});

