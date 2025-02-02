import Image from "next/image"

export default function ProfileImage() {
  return (
    <div className="rounded-full overflow-hidden border-2 border-white shadow-lg">
      <Image src="/placeholder.svg" alt="Profile" width={40} height={40} className="object-cover" />
    </div>
  )
}

