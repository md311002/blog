import Link from "next/link";
import Image from "next/image";
import classes from './postitem.module.css'

export default function PostItem(props) {
    const { slug, title, image, date, excerpt } = props.post;

    const imagePath = `/Images/postss/${slug}/${image}`;
    const linkPath = `/posts/${slug}`;

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    return (

        <li className={classes.post}>
            <Link href={linkPath}>
                <a >
                    <div className={classes.image}>
                        <Image height={200} alt={title} width={300} layout='responsive' src={imagePath} />
                    </div>
                    <div className={classes.content} >
                        <h1 >{title}</h1>
                        <time >{formattedDate}</time>
                        <p  >{excerpt}</p>

                    </div>
                </a>

            </Link>
        </li >

    )
}