import PostGrid from '../../components/PostGrid'
import { getAllPosts } from '../../lib/posts-util'
import classes from '../../styles/allposts.module.css'


export default function AllPosts(props) {
    return (
        <section className={classes.posts}>
            <h1> All Posts </h1>
            <PostGrid posts={props.posts}></PostGrid>
        </section>
    )
}

export function getStaticProps() {
    const allPosts = getAllPosts();
    return ({
        props: {
            posts: allPosts
        }
    })

}