"use client";

import Link from "next/link";
import { useRouter } from 'next/navigation'

export default function PostList() {
    const router = useRouter() 
    const goToPost1 = () => {
        router.push('/posts/1')
    }

    return(
        <>
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <p>Post List:</p>
          <ul>
            <li>
                <Link className="text-sm font-medium text-gray-600 hover:text-gray-900" href='/posts/1'>Post 1</Link>
            </li>
            <li>
                <Link className="text-sm font-medium text-gray-600 hover:text-gray-900" href='/posts/2'>Post 2</Link>
            </li>
            <li>
                <Link className="text-sm font-medium text-gray-600 hover:text-gray-900" href='/posts/3'>Post 3</Link>
            </li>
          </ul>

          <p>Navigate Programatically to Post 1 here:</p>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"onClick={goToPost1}>Post 1</button>
      </main>
    </div>
    </>
    )
}
