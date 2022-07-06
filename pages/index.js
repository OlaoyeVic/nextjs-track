import Head from "next/head"
import Link from "next/link"
import axios from "axios"


export const getServerSideProps = async() => {
  const usersReq = await axios.get('https://api.rwnjs.com/04/users')
  console.log(usersReq.data)
  return {
    props: {
      users: usersReq.data
    }
  }
}

// export const getServerSideProps = async() => {
//   const response = await axios.get('https://trip-buddy-be.herokuapp.com/api/v1/tripbuddy')
//   console.log(response.data)
//   return {
//     props: {
//     }
//   }
// }

const HomePage = ({users}) => {
  return (
    <ul>
      {users?.map((user) =>
        <li key={user.id}>
          <Link href={`/users/${username}`} passHref>
            <a>{user.username}</a>
          </Link>
        </li>
      )}
    </ul>
  )
}
export default HomePage