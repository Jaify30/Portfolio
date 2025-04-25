import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faDownload} from "@fortawesome/free-solid-svg-icons"
import { useTranslation } from "react-i18next";
export default function Main() {

    const{t} = useTranslation(["main"]);

    return (
        <div id="sobre-mi" className="flex-wrap">
            <h3 className=" text-2xl text-pink-700 mt-20">{t("h3")}</h3>
            <h1 className="text-6xl underline mt-5">{t("h1")}</h1>
                <p className="text-2xl mt-5 mb-5">{t("p")}</p>
                <a className="bg-pink-700 border border-black rounded-2xl p-3" href="/Curriculum_Josue_Villavicencio.pdf" download="Curriculum_Josue_Villavicencio.pdf"><button className="cursor-pointer">
                    <FontAwesomeIcon icon={faDownload} className="text-2xl"/>
                    {t("Descargar")}</button></a>
        </div>
    )
}
