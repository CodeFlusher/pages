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