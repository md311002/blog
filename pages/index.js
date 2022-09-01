import { Fragment } from "react";
import Hero from "../components/Hero";
import FeaturedPosts from '../components/Featuredposts'
import { getfeaturedPost } from "../lib/posts-util";



export default function Home(props) {
  return (
    <Fragment >
      <Hero></Hero>
      <FeaturedPosts posts={props.posts}></FeaturedPosts>

    </Fragment>
  )
}

export function getStaticProps() {
  const FeaturedPosts = getfeaturedPost();

  return {
    props: {
      posts: FeaturedPosts
    }
  }

}