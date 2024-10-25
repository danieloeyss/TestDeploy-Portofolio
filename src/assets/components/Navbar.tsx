
function Navbar() {
  
  const links =['Skill','Portofolio','Contact']
  
  return (
      <div className="bg-[#020617]">
        <div className="container mx-auto flex items-baseline justify-between bg-[#020617] p-1 text-[#FFFFFF] ">
        <div className="h-8 w-15 text-center hover:font-semibold">Logo</div>
        <div className="flex h-8 gap-4 mr-6 text-[#94a3b8]">{links.map((link, index) => (<a key={index} href={`#${link.toLowerCase()}`} className=" hover:font-medium hover:underline-offset-4 hover:text-white transition duration-300">{link}</a>))}</div>
        </div>
    </div>
  )
}

export default Navbar