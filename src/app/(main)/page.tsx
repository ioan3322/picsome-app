import { getImagesByCategory } from "@/features/api";
import { Home } from "@/features/home/home";
import Image from "next/image";

const HomePage = async () => {
  const data = await getImagesByCategory({
    page: 1, category: "easter"
  })

  return (
    <Home data={data} />
  );
}
export default HomePage