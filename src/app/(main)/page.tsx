import { getImagesApi } from "@/features/api";
import { Home } from "@/features/home/home";
import Image from "next/image";

const HomePage = async () => {
  const data = await getImagesApi()
  console.log("HomePage", data[0])
  /*
  Integrate Zustand Store
    - 3add data to Zustand Store 
    - deliver data from Zustand Store (save the data to ZustandStore and use it across the aplication)
    - 1 make sure o aknowlege about 2props in react and typescript 4aply knowledge to current project
    - 
    
  */

  return (
    <Home data={data} />
  );
}
export default HomePage