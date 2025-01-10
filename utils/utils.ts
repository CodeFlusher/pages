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

export const clamp = (value: number, max: number = 100, min: number = 0) => {
    if(value > max) {
        return max
    }
    if(value < min){
        return min
    }
    return value
}