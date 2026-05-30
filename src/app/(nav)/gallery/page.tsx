import { getImagesByCategory } from "@/features/api" 
import { Gallery } from "@/features/gallery/gallery" 

const GalleryPage = async () => { 
    const data = await getImagesByCategory({ }) 
return <Gallery data={data} /> }
 export default GalleryPage