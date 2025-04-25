import { useTranslation } from "react-i18next";
import CardTech from "./CardTech";

export default function Technologies() {

  const{t} = useTranslation(["technologies"]);

  return (

    <div id="tecnologias">
        <h2 className="text-3xl mt-15 mb-5">{t("h2")}</h2>
        
        <div className="flex flex-wrap justify-center gap-5 mb-10">
            <CardTech link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg">HTML</CardTech>
            <CardTech link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg">CSS</CardTech>
            <CardTech link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg">JavaScript</CardTech>
            <CardTech link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg">React</CardTech>
            <CardTech link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg">TypeScript</CardTech>
            <CardTech link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg">Git</CardTech>
            <CardTech link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg">Bootstrap</CardTech>
            <CardTech link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg">Tailwindcss</CardTech>
            <CardTech link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg">C#</CardTech>
            <CardTech link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg">.NET</CardTech>
            <CardTech link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg">SQL Server</CardTech>
            <CardTech link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg">MySQL</CardTech>
            <CardTech link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg">NPM</CardTech>
            <CardTech link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg">NodeJS</CardTech>
            <CardTech link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg">VS Code</CardTech>
        </div>
    </div>
  )
}
