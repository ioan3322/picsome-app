import { PAGE_SIZE_PARAM } from "@/shared/utils/constants"
import { DataImageItem } from "@/shared/utils/types"



const isValidPhoto = (photo: DataImageItem) => {
  const isValid = !!photo && !!photo?.src.original?.length
  return isValid
}

interface IProps {
  page?: number | string,
  category?: string,
}

export const getImagesByCategory = async ({ page = 1, category = "Tech" }: IProps) => {
  const ApiKey = process.env.PEXELS_API_KEY
  const apiUrl = process.env.PEXELS_API_URL

  if (!ApiKey) throw new Error("Missing API key");
  if (!apiUrl) throw new Error("Missing API URL");

  const pageParam = `&page=${page}`
  const queryParam = `?query=${category}`
  const endpoint = `${apiUrl}${queryParam}${pageParam}${PAGE_SIZE_PARAM}`
  const response = await fetch(endpoint, {
    headers: {
      Authorization: ApiKey
    }
  })

  const data = await response.json()
  const photos = Array.isArray(data?.photos) ? data.photos : []
  const validPhotos = photos.filter(isValidPhoto)

  return validPhotos
}
