
(function () {
	"use strict";

	if (location.href.startsWith("https://www.youtube.com/")) return;

	document.body.addEventListener("wheel", evt => {
		if (evt.target.tagName === "VIDEO") {
			evt.preventDefault();

			var player = evt.target;

			// 回転方向：上 = +1(正), 下 = -1(負)
			var sign = Math.sign(evt.wheelDelta);
			volume(player, sign);
		}
	});

	/*
	* player: <video>
	* sign: 音量を増やすか減らすか (-1, 1)
	*/
	function volume(player, sign) {
		var diff = 0.1 * sign;
		var volume = player.volume + diff;
		if (volume > 1) volume = 1;
		else if (volume < 0) volume = 0;

		player.volume = volume;
		// mute状態は音量調整で解除されない
		player.muted = false;
	}
})();
