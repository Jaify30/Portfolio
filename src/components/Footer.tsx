import { useTranslation } from "react-i18next";

export default function Footer() {

    const{t} = useTranslation(["home"]);

  return (
    <div id="footer" className=" text-white px-10 py-8">
        <footer className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
    {/* Enlaces rápidos */}
            <div>
                <h4 className="text-lg font-semibold mb-4">{t("enlaces")}</h4>
                <ul className="space-y-2 text-sm text-blue-400">
                    <li><a href="#" className="hover:underline">{t("inicio")}</a></li>
                    <li><a href="#sobre_mi" className="hover:underline">{t("sobremi")}</a></li>
                    <li><a href="#Tecnologias" className="hover:underline">{t("tecnologias")}</a></li>
                    <li><a href="#Proyectos" className="hover:underline">{t("proyectos")}</a></li>
                </ul>
            </div>

    {/* Redes */}
            <div>
                <h4 className="text-lg font-semibold mb-4">{t("redes")}</h4>
                <div className="flex items-center gap-4">
                    <a href="https://github.com/Jaify30" target="_blank" rel="noopener noreferrer">
                    <img src="/github-brands-solid.svg" alt="GitHub" className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/josuevillavicenciodev/" target="_blank" rel="noopener noreferrer">
                    <img src="/linkedin-brands.svg" alt="LinkedIn" className="w-6 h-6" />
                    </a>
                    <a href="https://www.instagram.com/josuealex_3/" target="_blank" rel="noopener noreferrer">
                    <img src="/instagram-brands.svg" alt="Instagram" className="w-6 h-6" />
                    </a>
                </div>
            </div>
  </footer>

    {/* Derechos reservados */}
    <div className="text-center text-sm text-gray-300 mt-10">
        {t("copy")}
    </div>
</div>

  )
}
