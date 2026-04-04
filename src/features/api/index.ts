import { DataImageItem, ImageItem } from "@/shared/utils/types"

const pageSizeParam = "&per_page=20"


const isValidPhoto = (photo: any) => {
  const isValid = !!photo && !!photo?.src.original?.length
  return isValid
}

interface IProps {
  page?: number,
  category?: string,
}

export const getImagesByCategory = async ({ page = 1, category = "horse" }: IProps) => {
  const ApiKey = process.env.PEXELS_API_KEY
  const apiUrl = process.env.PEXELS_API_URL

  if (!ApiKey) throw new Error("Missing API key");
  if (!apiUrl) throw new Error("Missing API URL");

  const pageParam = `&page=${page}`
  const queryParam = `?query=${category}`
  const endpoint = `${apiUrl}${queryParam}${pageParam}${pageSizeParam}`
  const response = await fetch(endpoint, {
    headers: {
      Authorization: ApiKey
    }
  })
  const data = await response.json()

  const photos = Array.isArray(data?.photos) ? data.photos : []
  const dataPhotos = photos.map((photo: DataImageItem) => {

    return {
      id: photo.id,
      width: photo.width,
      height: photo.height,
      photographer: photo.photographer,
      src: {
        original: photo.src.original,
        medium: photo.src.medium
      },
      alt: photo.alt

    }

  })

  const validPhotos = photos.filter(isValidPhoto)


  return validPhotos
}
///HOMEWORK
//configure env variables for the new api in vercel,make sure to usethe same variables used localy in env.local
//after configuring the variables deploy the project to vercell adn test to see if the pictures are showing in the browser
//use image component from next.js, require a configuration in next.config to allow images from api domain
//beacuse images will be recevied in diferent sizes make seure to apply masonry layout ;taiwind.css has a masonry layout avariable
//keep traking pexels API
//play with the API and make sure is alaways fetched on server side component
//the last thing is to fix the warnings and errors
//investigate the fetch result in postman and make sure you define the right type declatarion for the imgaes data