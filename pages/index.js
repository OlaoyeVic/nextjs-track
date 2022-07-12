import Head from "next/head"
import Link from "next/link"
import axios from "axios"
import { useEffect, useState } from "react"
import { useQuery } from "@apollo/client"
import GET_LATEST_SIGNS from "../lib/apollo/queries/getLatestSigns"
import Sign from "../components/Sign"
import Loading from "../components/Loading"


// export const getServerSideProps = async() => {
//   const usersReq = await axios.get('https://api.rwnjs.com/04/users')
//   console.log(usersReq.data)
//   return {
//     props: {
//       users: usersReq.data
//     }
//   }
// }

const HomePage = ({users}) => {
  const { loading, data } = useQuery(GET_LATEST_SIGNS, {
    fetchPolicy: 'no-cache'
  })

  if(loading) {
    return <Loading />
  }

  return (
    <div className="flex justify-center items-center flex-col mt-20">
      <h1 className="text-3xl mb-5">Real World Next.js Signbook</h1>
      <Link href='/new-sign'>
        <button className="mb-8 border-2 border-purple-800 text-purple-900 p-2 rounded-lg text-gray-50 m-auto mt-4">
          Add new Sign
        </button>
      </Link>
      <div>
        {data && data?.sign.map((sign) => (
          <Sign key={sign.uuid} {...sign} />
        ))}
      </div>
    </div>
  )
}
export default HomePage

// const Users = () => {
//   const [loading, setLoading] = useState(true)
//   const [data, setData] = useState(null)

//   useEffect(async () => {
//     const req = await axios.get('https://api.rwnjs.com/04/users')
//     // const users = await req.json()

//     setLoading(false)
//     setData(users)
//   }, [])

//   return (
//     <div>
//      {loading && <div>Loading users ...</div>}
//      {loading && <HomePage users={data} />}
//     </div>
//   )
// }