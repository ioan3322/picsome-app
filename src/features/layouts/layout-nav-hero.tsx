import Link from "next/link"

export const LayoutNavHero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center py-20 px-4 bg-cover bg-center rounded-[0_0_8px_8px] shadow-md overflow-hidden"
      style={{ backgroundImage: `url("/images/image1.jpg")` }}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-green-500/30" />
      <div className="relative z-10" />
      <h1 className="text-4xl font-bold text-white mb-4 z-20">
        Wellcome to PicSome App
      </h1>
    </div>
  )
}