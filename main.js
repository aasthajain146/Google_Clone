const searchInput =document.querySelector("#search-input");

searchInput.addEventListener("keydown",function(event){
    if(event.code ==="Enter"){
        search();
    }
});

function search(){
    const input=searchInput.value;

    window,location.href="https://www.google.co.in/search?q=" + input + "&sxsrf=ALiCzsZofRHQq78PqlLF3bIfnZIBtrXlpA%3A1659249468635&source=hp&ei=PCPmYrCAJJeLmAWsn42YCQ&iflsig=AJiK0e8AAAAAYuYxTFhYg800ziRHpV2kdgcFPjB9Dxgx&ved=0ahUKEwiwjq35waL5AhWXBaYKHaxPA5MQ4dUDCAc&uact=5&oq=" + input + "&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEMsBMggIABCABBCxAzIFCC4QywEyBQgAEMsBMggILhDUAhDLATIFCAAQywEyBQgAEMsBMgUIABDLATIFCAAQywEyCAguENQCEMsBOgcIIxDqAhAnOgsIABCABBCxAxCDAToICAAQsQMQgwE6DgguEIAEELEDEIMBENQCOgUIABCABDoRCC4QgAQQsQMQgwEQxwEQ0QM6BAgjECc6BggjECcQEzoFCC4QgAQ6CwguEIAEELEDEIMBOggILhCABBCxAzoECAAQAzoICC4QsQMQgwE6DQgAEIAEELEDEAIQnwE6BQgAELEDUI0EWNsJYO4PaAFwAHgAgAGcAYgBqwWSAQMwLjWYAQCgAQGwAQo&sclient=gws-wiz"
}