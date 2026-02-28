export const getImagesApi = async () => {
  const baseUrl = "https://picsum.photos/v2/list"
  const pageQuery = "?page=1"
  const limitQuery = "&limit=20"

  /*
  improve API:
      - look over the course and analyze project configuration
      - we need to understand how to improve API quality to fetch data based on categories  e.g fetch data only for cats or dogs 
      - we need to validate data ,make sure is an array and if it is undefined to return an empty array
      - if error keep returning empty array 
  */
  try {
    const response = await fetch(baseUrl + pageQuery + limitQuery)
    const data = await response.json()
    console.log({ data })
    return data || []
  } catch (error: any) {
    console.log(error.mesage)
  }
}
