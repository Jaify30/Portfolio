import { useTranslation } from "react-i18next";
import CardProyect from "./CardProyect";

export default function Proyects() {
  
  const{t} = useTranslation(["proyect"]);

  return (
    <div id="proyectos">
        <h2 className="text-3xl mt-15 mb-5">{t("h2")}</h2>

        <div className="flex flex-wrap gap-4 justify-center items-center mb-10">
            <CardProyect Name={t("titulo-hospital")} Description={t("descripcion-hospital")}
                  Git="https://github.com/Jaify30/AdministracionHospital"
                  Linkedin="https://www.linkedin.com/posts/josuevillavicenciodev_dotnet-wpf-desarrollodesoftware-activity-7246339648304599040-nrsg?utm_source=share&utm_medium=member_desktop"
                  Img="/Administracion-hospital.jpeg"/>
            <CardProyect
              Name={t("titulo-ventas")}
              Description={t("descripcion-ventas")}
              Git="https://github.com/Jaify30/Venta_De_Cursos"
              Img="/Curdev.png"
              Link="https://jaify30.github.io/Venta_De_Cursos/index.html"
            />
            <CardProyect
              Name={t("titulo-crypto")}
              Description={t("descripcion-crypto")}
              Git="https://github.com/Jaify30/CryptoQuote"
              Img="/Crypto.jpg"
              Link="https://deft-gumdrop-73150a.netlify.app/"
            />
            <CardProyect
              Name={t("titulo-portfolio")}
              Description={t("descripcion-portfolio")}
              Git="https://github.com/Jaify30/Portfolio"
              Img="/Portfolio.jpg"
              Link="https://jaifydev.netlify.app/"
            />
            <CardProyect
              Name={t("titulo-coctail")}
              Description={t("descripcion-coctail")}
              Git="https://github.com/Jaify30/Buscador-bebidas"
              Img="/image.png"
              Link="https://coctailapp.netlify.app/"
            />
        </div>
    </div>
  )
}
