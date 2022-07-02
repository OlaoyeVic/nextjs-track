import PostHead from '../../components/PostHead'
import posts from '../../data/posts'

export const getServerSideProps = ({ params }) => {
    const { slug } = params
    const post = posts.length > 0 && posts.find((p) => p?.slug === slug)
    console.log(post)
    return {
        props: {
            post
        }
    }
}

const Post = ({post}) => {
    return (
        <div>
            <PostHead {...post} />
            <h1>{post?.title}</h1>
            <p>{post?.subtitle}</p>
        </div>
    )
}
export default Post