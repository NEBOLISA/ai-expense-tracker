import Guest from "@/components/Guest"
import { currentUser } from "@clerk/nextjs/server"


export default async function Home() {
  const user = await currentUser()
  if (!user) {
    return <Guest/>
  }
  return <div className='h-full bg-white/95 dark:bg-gray-900/95'></div>
}