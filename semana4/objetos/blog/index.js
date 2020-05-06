let postInformation={
    title : null,
    author: null,
    post : null
}

let postPublished = []

function createPost() {
    let postTitle = document.getElementById("title")
    let postAuthor = document.getElementById("author")
    let postContent = document.getElementById("post")

    let newPost={
        ...postInformation,
        title : postTitle.value,
        author : postAuthor.value,
        post :  postContent.value,
    }

    postPublished.push(newPost)    
    console.log(postPublished)
}




