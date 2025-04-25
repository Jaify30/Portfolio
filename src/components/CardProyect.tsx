export default function CardProyect({Name,Description,Git,Linkedin,Img,Link}:{Name:string,Description:string,Git:string,Linkedin?:string,Img:string,Link?:string}) {
  return (
    <div className="bg-yellow-600 grid [grid-template-rows:30%_50%_20%] w-[400px] h-[500px] rounded-[10px] shadow-md overflow-hidden transition-transform duration-300 hover:scale-110 flex-wrap ">
        <div className="flex justify-center items-center mb-2.5">
            <img className=" bg-cover" src={Img} alt="Imagen Proyecto"/>
        </div>
        <div className="flex flex-col justify-center items-center text-white h-full mt-4">
            <h5 className=" text-[20px] text-center">{Name}</h5>
            <p className="text-[18px] text-center mt-4">{Description}</p>
        </div>
        
        <div className="flex justify-center items-center gap-4 mt-2 mb-2">
            <a target="_blank" href={Git}>
                <img className="w-8 h-8" src="/github-brands-solid.svg" alt="GitHub Image"/>
            </a>

            {Linkedin && (
                <a target="_blank" href={Linkedin}>
                    <img className="w-8 h-8" src="/linkedin-brands.svg" alt="Linkedin Image" />
                </a>
            )}

            {Link && (
                <a target="_blank" href={Link}>
                    <img className="w-8 h-8" src="/globe-solid.svg" alt="Link Image" />
                </a>
            )}
        </div>

    </div>
  )
}
