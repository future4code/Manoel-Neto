let postInformation={
    title : null,
    author: null,
    image: null,
    post : null,
}

let postPublished = []

function createPost() {
    let postTitle = document.getElementById("title")
    let postAuthor = document.getElementById("author")
    let postImage = document.getElementById("image")
    let postContent = document.getElementById("post")

    let newPost={
        ...postInformation,
        title : postTitle.value,
        author : postAuthor.value,
        image: postImage.value,
        post :  postContent.value,
    }
    
    postPublished.push(newPost)

    document.getElementById("postPublished").innerHTML += `Title: ${newPost.title}<br>Author: ${newPost.author}<br><img src="${newPost.image}"><br>Post: ${newPost.post}<br><br>`

    postTitle.value = ""
    postAuthor.value = ""
    postImage.value = ""
    postContent.value = ""  
}

function openPage(){
    for(let i = 0; i < postPublished.length; i++){
        document.getElementById("postPublished").innerHTML += `Title: ${newPost.title}<br>Author: ${newPost.author}<br><img src="${newPost.image}"><br>Post: ${newPost.post}<br><br>`
    }
}



