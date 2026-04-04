import { ImageItem } from "@/shared/utils/types";
import Image from "next/image";
interface IProps {
  photo: ImageItem;
}

export const ImageComponent = ({ photo }: IProps) => {
  console.log("Image component", photo)
  return (
    <div className="relative w-full">

      <Image
        src={photo.src.medium}
        alt={photo.alt || " Photo by " + photo.photographer}
        width={photo.width}
        height={photo.height}
        className="w-full h-auto"
      />


      <div className="px-4 pt-3 pb-4 bg-gray-200 rounded-b-md shadow-lg">
        <h2 className="text-lg text-gray-800 leading-tight">
          {photo.photographer}
        </h2>


      </div>
    </div >

  )
}