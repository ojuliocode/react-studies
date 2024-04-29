import { useState } from 'react'
import moon from '../../assets/moon.svg'
import sun from '../../assets/sun.svg'
import './style.css'
export default function ThemeToggle(){
    const [theme, setTheme] = useState('light')

    function toggleTheme(){
        if(theme == 'light')
            return 'dark'
        return 'light'
    }

    return (
        <button className='icon-button' onClick={() => setTheme(toggleTheme())}>
            <img width={30} src={theme == 'light' ? moon : sun } alt="Botão de tema escuro/claro"  />
        </button>
    )
}