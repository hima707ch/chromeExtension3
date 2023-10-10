chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {

        const receivedData = message.data;
        console.log('Data received in content.js:', receivedData);
        // Perform actions with the received data

        const {likeCount, comment} = receivedData;

        const arr = [...Array(likeCount).keys()];
        const shuffledCount = arr.sort(() => 0.5 - Math.random());

       setTimeout(function(){
            console.log("dom ready");

            const posts = document
            .getElementsByClassName("scaffold-finite-scroll__content")[0]
            .getElementsByClassName("social-details-social-activity update-v2-social-activity");

            for(let i=0;i<likeCount;i++){
                const likeButton = posts[i].getElementsByClassName("reactions-react-button feed-shared-social-action-bar__action-button")[0];
                const commentButton = posts[i].getElementsByClassName("artdeco-button artdeco-button--muted artdeco-button--4 artdeco-button--tertiary ember-view social-actions-button comment-button flex-wrap ")[0];
            
                likeButton.children[0].click();
                commentButton.click();

                posts[i].getElementsByClassName('ql-editor')[0].textContent = comment;
                setTimeout(
                    ()=>{ document
                    .getElementsByClassName("scaffold-finite-scroll__content")[0]
                    .getElementsByClassName("social-details-social-activity update-v2-social-activity")[i]
                    .getElementsByClassName("comments-comment-box__submit-button mt3 artdeco-button artdeco-button--1 artdeco-button--primary ember-view")[0]
                    .click() }
                    ,
                2000)
            }
        },4000)
    
        //observer.observe(document.body,{childList:true,subtree:true})

    })