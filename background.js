"use strict";

chrome.runtime.onInstalled.addListener(function (details) {
	// インストール時に既存のタブで実行する
	// ※ 更新時は実行しない
	if (details.reason === "install") {
		chrome.tabs.query({
			url: "https://www.facebook.com/*"
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
	}
});
