import PostContent from "../../components/PostCOntent"
import { getPost, getPostFiles } from "../../lib/posts-util"

export default function BlogDetail(props) {

    return (
        <PostContent post={props.posts}></PostContent>
    )
}



export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params
    const post = getPost(slug);

    return ({
        props: {
            posts: post
        },
        revalidate: 3600
    })
}
export function getStaticPaths() {
    const postFileNames = getPostFiles();
    const slugs = postFileNames.map(fileName => fileName.replace(/\.md$/, ''));

    return ({
        paths: slugs.map((slug) => ({ params: { slug: slug } })),
        fallback: false
    })
}