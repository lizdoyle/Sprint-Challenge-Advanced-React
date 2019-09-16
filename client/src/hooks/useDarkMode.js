import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = () => {

    const darkmode = true;

    const [nighttime, setNighttime] = useLocalStorage(darkmode);

    useEffect(() => {

        document.body.classList.toggle('dark-mode_toggle');


    }, [darkmode]);


    return [nighttime, setNighttime]
}
