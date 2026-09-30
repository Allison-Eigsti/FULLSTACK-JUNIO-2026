import connectDB from '@/lib/mongodb'
import User from "@/models/User"

export default async function Home() {
  connectDB();
  const user = await User.find({})

  console.log(user)

  return (
    <>
    </>
  )
}
