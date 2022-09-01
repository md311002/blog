import Image from 'next/image';
import classes from './postheader.module.css'

export default function Header(props) {
    const { title, image } = props;


    return (
        <header className={classes.header}>
            <h1>{title}</h1>
            <Image alt='hii' src={image} height={150} width={200}></Image>
        </header>

    )
}