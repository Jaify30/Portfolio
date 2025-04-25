import { useTranslation } from "react-i18next";
import ChangeLenguage from "./ChangeLenguage";

export default function Header() {

  const{t} = useTranslation(["home"]);


  return (
    <div id="#" className="display flex flex-wrap justify-between items-center bg-gray-900 p-4">

        <a href="#" className="display flex items-center gap-4 text-white">
            <img className=" rounded-full shadow-pink-700 shadow" src="/1725741284748.jpeg" alt="Imagen Portfolio" width='100'/>
            <span className=" text-3xl text-yellow-600 uppercase">JaifyDev</span>
        </a>

        <nav className="flex items-center gap-4 p-4">
            <ul className="flex flex-row flex-wrap items-center gap-6 text-white">
                <li><a href="#sobre-mi">{t("sobremi")}</a></li>
                <li><a href="#tecnologias">{t("tecnologias")}</a></li>
                <li><a href="#footer">{t("redes")}</a></li>
                <li><a href="#proyectos">{t("proyectos")}</a></li>
                <ChangeLenguage/>
            </ul>
        </nav>

    </div>
  )
}
