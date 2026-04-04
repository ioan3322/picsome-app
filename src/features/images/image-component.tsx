import { ImageItem } from "@/shared/utils/types";

interface IProps {
  imageItem: ImageItem;
}


export const ImageComponent = ({ imageItem }: IProps) => {
  console.log("Image component", imageItem)
  return (
    <div>Image </div>
  )
}