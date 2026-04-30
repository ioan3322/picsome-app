import { getImagesByCategory } from "@/features/api" 
import { Gallery } from "@/features/gallery/gallery" 

const GalleryPage = async () => { 
    const data = await getImagesByCategory({ page: 2, category: "easter" }) 
return <Gallery data={data} /> }
 export default GalleryPage