import { getImagesByCategory } from "@/features/api"
import { Gallery } from "@/features/gallery/gallery"


const GalleryPage = async () => {
    const data = await getImagesByCategory({
        page: 1, category: "cars"
    })
    return <Gallery data={data} />
}

export default GalleryPage