export default function CardTech({ children, link }: { children: React.ReactNode; link: string }) {
  return (
    <div className="text-center p-5 border border-gray-300 rounded-[10px] shadow-md w-[150px] h-[200px] transition-transform duration-300 hover:scale-110">
        <img src={link} alt="Imagen Tecnologia"  />
        <p>{children}</p>
    </div>
  )
}