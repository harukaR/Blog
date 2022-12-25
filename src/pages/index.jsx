import Link from "next/link"


export default function Home() {
  return (
    <>
     <h1>Haruka-Blog</h1>
     <Link href='/blog'>
      <p>のぞいてみる</p>
     </Link>
    </>
  )
  
}

