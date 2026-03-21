import { getImagesByCategory } from "@/features/api"
import { Store } from "@/features/store/store"

const StorePage = async () => {
    const data = await getImagesByCategory({ page: 1, category: "cars" })
    return <Store data={data} />
}

export default StorePage