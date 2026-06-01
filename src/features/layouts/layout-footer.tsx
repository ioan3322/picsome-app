

export const LayoutFooter = () => {
  return (
    <div className=" flex flex-col items-center justify-center text-center py-20 px-9 bg-gradient-to-b from-gray-800 to-black">

      <div className="text-gray-400">

      </div>
      <div className="text-gray-400 mt-4">
        Built with{" "}
        <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Next.js</a>,{" "}
        <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Tailwind CSS</a>,{" "}
        <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">TypeScript</a>
      </div>
      <div className="text-gray-400 mt-4">
        Api used: {" "}
        <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Pexels</a>
      </div>
      <div className="text-gray-400  mt-6">
        {" "}
        &copy; {new Date().getFullYear()} PicSome App. All rights reserved.
      </div>


    </div>
  )
}