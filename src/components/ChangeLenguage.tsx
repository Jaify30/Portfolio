import { useState } from "react";
import { useTranslation } from "react-i18next"

export default function ChangeLenguage() {

  const {i18n} = useTranslation();
  const [isEnglish, setIsEnglish] = useState(false);

  const handleToggle = () => {
    const newLanguage = isEnglish ? "es" : "en"; 
    i18n.changeLanguage(newLanguage);
    setIsEnglish(!isEnglish); 
  };

  return (
    <div className='flex items-center gap-4 bg-gray-900 rounded-full'>
        <img src="espana.png" className=' w-6 h-6 rounded-full' alt="Español" />

        <label className='relative inline-flex items-center cursor-pointer'>
            <input type="checkbox" className=' sr-only peer' checked={isEnglish} onChange={handleToggle} />
            <div className='w-12 h-6 bg-yellow-600 peer-focus:outline-none rounded-full peer peer-checked:bg-yellow-600 transition-all'></div>
            <div className='absolute left-0.5 top-0.5 w-5 h-5 bg-white border-2 border-pink-400 rounded-full transition-all peer-checked:translate-x-6'></div>
        </label>

        <img src="reino-unido.png" alt="Ingles" className="w-6 h-6 rounded-full"/>
    </div>
  )
}
