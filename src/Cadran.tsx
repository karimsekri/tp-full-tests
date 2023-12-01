import { useCallback, useMemo, useState } from "react";
import {getHour} from "./calculerHeure"


const Cadran = () => {
    const [lune, setLune] = useState(0)
    const [terre, setTerre] = useState(0)
    const [soleil, setSoleil] = useState(0)
    const [resultat, setResultat] = useState("")

    // const resultat = useMemo(() => {
    //     return getHour(lune, terre, soleil)

    // }, [lune, terre, soleil])

    const handleClick = useCallback(() => {
        setLune(lune)
        setTerre(terre)
        setSoleil(soleil)

        setResultat(getHour(lune, terre, soleil))
    }, [lune, terre, soleil])
   
    return (

        <div>
            <h2>Cadran</h2>
            <input type="number" name="lune_name" id="lune_id" onChange={(e) => setLune(parseInt(e.target.value))} />
            <input type="number" name="terre_name" id="terre_id" onChange={(e) => setTerre(parseInt(e.target.value))} />
            <input type="number" name="soleil_name" id="soleil_id" onChange={(e) => setSoleil(parseInt(e.target.value))} />
            <button type="button" onClick={handleClick} >Calculer</button>
            <div>{resultat}</div>
        </div>
    );
}

export default Cadran