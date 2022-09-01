import ReactMarkdown from 'react-markdown'
import PostDetailHeader from './PostDetailHeader'
import classes from './postcontent.module.css'
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';



export default function PostContent(props) {
    const { post } = props;
    const imagePath = `/Images/postss/${post.slug}/${post.image}`



    const customRenderes = {
        p(paragraph) {
            const { node } = paragraph;


            if (node.children[0].tagName === 'img') {
                const image = node.children[0];

                return (
                    <div className={classes.image}>
                        <Image
                            src={`/Images/postss/${post.slug}/${image.properties.src}`}
                            alt={image.alt}
                            width={600}
                            height={300}
                        />
                    </div>
                );
            }

            return <p>{paragraph.children}</p>;
        },
        code(code) {

            const { className, children } = code;
            const language = className.split('-')[1];
            return (
                <SyntaxHighlighter
                    style={atomDark}
                    language={language}>
                    {children}
                </SyntaxHighlighter>
            );
        },
    }


    return (
        <article className={classes.content} >
            <PostDetailHeader image={imagePath} title={post.title}></PostDetailHeader>
            <ReactMarkdown components={customRenderes}>{post.content}</ReactMarkdown>
        </article>
    )
}