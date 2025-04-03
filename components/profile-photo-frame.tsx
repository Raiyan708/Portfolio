import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LinkedinIcon } from "lucide-react"

interface ProfilePhotoFrameProps {
  imageUrl: string
  name: string
  title: string
}

export default function ProfilePhotoFrame({ imageUrl, name, title }: ProfilePhotoFrameProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 h-24"></div>
      <CardContent className="pt-0 pb-6">
        <div className="flex flex-col items-center">
          <div className="relative w-32 h-32 -mt-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image src={imageUrl || "/placeholder.svg"} alt="Profile photo" fill className="object-cover" priority />
          </div>

          <h2 className="mt-4 text-xl font-semibold">{name}</h2>
          <p className="text-gray-500">{title}</p>

          <div className="flex gap-2 mt-4">
            <Badge variant="outline" className="flex items-center gap-1">
              <LinkedinIcon size={14} />
              <span>Connected</span>
            </Badge>
            <Badge variant="secondary">Professional</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

