
// listen for our browserAction to be clicked
chrome.browserAction.onClicked.addListener(function (tab) {
    console.log("This works :) ")
	// for the current tab, inject the "inject.js" file & execute it
	chrome.tabs.executeScript(tab.ib, {
		file: 'inject.js'
	});
}); 