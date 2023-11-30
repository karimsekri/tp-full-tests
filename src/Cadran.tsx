import { useCallback } from "react";

const Cadran = ( )  => {

   
    return (

        <div>
            <h2>Cadran</h2>            
            <input type="number" name="lune_name" id="lune_id" />
            <input type="number" name="terre_name" id="terre_id" />
            <input type="number" name="soleil_name" id="soleil_id" />
            <button type="button">Calculer</button>
            <input type="text" name="resultat_name" id="resultat_id" />
        </div>
    );
}

export default Cadran