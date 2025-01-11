export type SocialCard = {
    name: string,
    url: string,
    image: Component,
    userId: string,
    description: string,
    color: string,
    active: boolean,
}

export type StackMiniCard = {
    name: string,
    image: string,
    url: string
}


export type ProjectCard = {
    name: string,
    description: string,
    reason: string,

    image: string,
    url: string,
    stack: StackMiniCard[]
}

export type StackCard = {
    name: string,
    description: string,
    image: string,
    url: string,
    color: string,
    additional: string
}

export type PawRow = {
    x: number,
    y: number,
    rotation: number,
}