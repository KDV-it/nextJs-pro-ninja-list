import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(ninja => {
        return {
            params: {id: ninja.id.toString()}
        }
    })
    return {
        paths, 
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: {ninja: data}
    }
}

const Detail = ( {ninja} ) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{ninja.name}</h1>
            <p className={styles.text}>{ninja.email}</p>
            <p className={styles.text}>{ninja.website}</p>
            <p className={styles.text}>{ninja.address.city}</p>

            <Link href='/ninjas'><a className={styles.btn}>Go back Ninja List!</a></Link>
        </div>
    );
}
 
export default Detail;