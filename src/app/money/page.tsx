import Parent from "@/components/Parent"
import Link from "next/link"

type Props = {}

export default function page({ }: Props) {
  return (
    <div className="m-10 flex flex-col justify-center items-center">
      <Link href={'/'}>Home</Link>
      <h1>Question 1</h1>
      <Parent />
    </div>
  )
}
