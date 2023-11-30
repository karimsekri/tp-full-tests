

export function calculerHeure(lune: number, terre: number, soleil: number): string {

    return "mortin";
}

export function calculerHeureInt(lune: number, terre: number, soleil: number): number {
    let resultat = 0;

    if (lune === 1  && terre === 1 && soleil === 1) {
        resultat = (lune +soleil)-2
    } 

    if (lune === 1  && terre === 1 && soleil === 2) {
        resultat = (lune + (terre*2) + soleil)-2+2
    } 

    if (lune === 1  && terre === 2 && soleil === 2) {
        resultat = 6 
    } 

    if (lune === 2  && terre === 2 && soleil === 2) {
        resultat = 6
    } 

    if (lune === 1  && terre === 2 && soleil === 1) {
        resultat = (lune + soleil)-2
    } 

    if (lune === 2  && terre === 1 && soleil === 1) {
        resultat = ((lune + soleil ))/2
    } 

    if (lune === 2  && terre === 2 && soleil === 1) {
        resultat = ((lune + soleil ))/2
    } 

    if (lune === 2  && terre === 1 && soleil === 2) {
        resultat = ((lune + (terre*2) + soleil )+2)/2
    } 

    return resultat
}

export function calculerHeureString(valeur: number) : string {
    
    if (valeur <= 1) {
        return "mortin"
    } 
    else if (valeur > 1 && valeur <= 2) {
        return "aprenoon"
    } 
    else if (valeur > 2 && valeur <= 4) {
        return "soirning"
    }
    else{
        return "mortin"  
    }
    
}

export function getHour(lune: number, terre: number, soleil: number) : string {
    let val = calculerHeureInt(lune, terre, soleil)
    return calculerHeureString(val)
}

