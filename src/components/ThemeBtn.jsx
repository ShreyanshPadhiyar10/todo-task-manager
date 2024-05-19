import React from 'react'
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import useTheme from '../context/Theme';

function ThemeBtn() {

    const { themeMode, darkTheme, lightTheme } = useTheme()

    return (
        <div id='themeBtn' className='w-auto absolute right-0 top-0 mr-9 mt-6 p-2 bg-slate-950 rounded-full text-white font-bold'>
            {themeMode === "dark" ? <MdOutlineLightMode onClick={lightTheme} size={'1.5em'} /> : <MdOutlineDarkMode onClick={darkTheme} size={'1.5em'} />}
        </div>
    )
}

export default ThemeBtn
