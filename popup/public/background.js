// chrome.runtime.onInstalled.addListener((detail) => {

//     if(detail.reason === chrome.runtime.OnInstalledReason.INSTALL) {

//         chrome.tabs.create({
//             url: './index.html'
//         });

//     }
// });

chrome.browserAction.onClicked.addListener((detail) => {
    const isPopup = localStorage.getItem("isPopup");
    if (isPopup === undefined || !isPopup) {
        chrome.tabs.create({
            url: './onboarding.html'
        })
    }
})