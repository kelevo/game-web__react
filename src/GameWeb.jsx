import { useEffect, useState } from "react";
import { Loading, Main } from "./layouts";

export const GameWeb = () => {

  const [mostrarContenido, setmostrarContenido] = useState(false)

  useEffect(() => {
    
    setTimeout(() => {
      setmostrarContenido(true);
    }, 3000);

  }, [])
  
  return (
    mostrarContenido
      ? <Main />
      : <Loading />
  )
}
