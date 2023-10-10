chrome.runtime.onMessage.addListener(function(message){

    chrome.tabs.create({url:"https://www.linkedin.com/"}, function(newTab){

    chrome.tabs.onUpdated.addListener(function (tabId, changeInfo) {
        if (tabId === newTab.id && changeInfo.status === 'complete') {
            // The tab is fully loaded, send data to the tab
            
            chrome.tabs.sendMessage(newTab.id, { action: 'start', data: message.data });
           
        }
    });

    })
  
    
})