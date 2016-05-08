"use strict";

chrome.runtime.onInstalled.addListener(function () {
	// 読み込み/更新時に既存のタブで実行する
	chrome.tabs.query({
		url: "*://*/*"
	}, function (result) {
		result.forEach(function (tab) {
			chrome.tabs.executeScript(tab.id, {
				file: "wheel2volume.js",
				allFrames: true
			}, function (result) {
				if (typeof result === "undefined") {
					console.info("ページが読み込まれていません", tab.url, tab);
				}
			});
		});
	});
});
