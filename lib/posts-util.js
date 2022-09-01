import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'postsmd')

export function getPostFiles() {
    return fs.readdirSync(postsDirectory);
}

export function getPost(fileName) {
    const postSlug = fileName.replace(/\.md$/, "")
    const filePath = path.join(postsDirectory, `${postSlug}.md`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')

    const { data, content } = matter(fileContent);


    const postData = {
        slug: postSlug,
        ...data,
        content
    }
    return postData;
}


export function getAllPosts() {

    const postsFiles = getPostFiles();


    const allPosts = postsFiles.map(postFile => {
        return getPost(postFile)
    }
    )

    const sortedPost = allPosts.sort((postA, postB) => postA.date > postB.date ? 1 : -1)

    return sortedPost;
}


export function getfeaturedPost() {
    const allPost = getAllPosts();

    const featuredposts = allPost.filter(post => post.isFeatured);

    return featuredposts

}


