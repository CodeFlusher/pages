export const copyToClipborard = (copy: string)=>{
    if(copy){
        navigator.clipboard.writeText(copy);
    }
}

export const openLink = (link: string)=>{
    if (window){
        window.open(link);
    }
}

export const randomInRange = (max: number, min: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
}