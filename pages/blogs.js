export default function Blog({ posts }) {
    return (
        <ul>
            {posts.data.map((post) => (
                <li>{post.map.ItemName}</li>
            ))}
        </ul>
    )
}
// This function gets called at build time
export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://127.0.0.1:8000/api/tools/get')
    const posts = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts,
        },
    }
}