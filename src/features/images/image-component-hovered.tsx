import { ImageItem } from "@/shared/utils/types";
import { useStore } from '../../store'
interface IProps {
  photo: ImageItem;
}
export const ImageComponentHovered = ({ photo }: IProps) => {
  const toggleFavourite = useStore((state) => state.toggleFavourite)
  const isFav = useStore((state) => state.isFavourite(photo.id))
  const addToCart = useStore((state) => state.addToCart)
  const isInCart = useStore((state) => state.isInCart(photo.id))

  return (
     <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-4">
          <a href={photo.photographer_url} target="_blank" className="hover:underline">
            <h2 className="text-lg font-semibold text-white mb-2">
              {photo.photographer}
            </h2>
          </a>

          <button onClick={() => toggleFavourite(photo)} className=" hover:bg-white/20 absolute top-4 right-4 bg-white/10 border border-white/30 px-4 py-2 text-white backdrop-blur-md rounded-full text-sm">
            {isFav ? 'Saved' : 'Save'}
          </button>
          <button onClick={() => addToCart(photo)} className=" hover:bg-white/20 absolute top-4 left-4 bg-white/10 border border-white/30 px-4 py-2 text-white backdrop-blur-md rounded-full text-sm">
            {isInCart ? 'Added' : 'Buy'}
          </button>

          <p className="text-sm text-gray-200">
            {photo.width} x {photo.height}px
          </p>

        </div>
    )
}