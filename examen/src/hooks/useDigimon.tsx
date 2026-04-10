import { useEffect, useState } from "react";

interface Digimon {
    name: string;
    img: string;
    level: string;
}

const useDigimon = () => {
    const [filtro, setFiltro] = useState("");
    const [Digimon, setDigimon] = useState<Digimon[]>([]);
    const [Nivel, setNivel] = useState("all")
    useEffect(()=>{
    const traerDigimon = async () => {
        try {
            const respuesta = await fetch('https://Digimon-api.vercel.app/api/Digimon');
            const datos = await respuesta.json();
            console.log(datos)
            setDigimon(datos);
        }catch(error){
            console.error("Hubo error al traer los datos", error);
        }
    }
   
        traerDigimon()
    },[]);
    const filtrarDigimon = Digimon.filter((p)=>{
        const filtrarTexto = p.name.toLowerCase().includes(filtro.toLowerCase());
        const filtratNivel = Nivel === "all" || p.level === Nivel;
        
        return filtrarTexto && filtratNivel
    })
    return {
        Digimon: filtrarDigimon,
        setFiltro,
        setNivel
    }
}
export default useDigimon;
 