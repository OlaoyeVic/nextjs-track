export function getServerSideProps(req) {
    return {
        props: {
            user: req.params.user
        }
    }
}

export default function GreetUser({ user }) {
    return (
        <div>Hello {user}!</div>
    )
}