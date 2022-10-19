export interface IRating{
    easeOfUse: number;
    satisfaction: number;
    usefulness: number;
    preference: number;
}

export interface IVoicemail {
    _id: string;
    "by": number;
    gender: string,
    age: number,
    session: number;
    date: string,
    rating: IRating;
    title: string;
    description: string;
    tags: string[];
    questionsCount: number;
    chatCount: number;
    mediaLink: string;
    mediaThumbnail: string;
}

export interface IFilter {
    id: string;
    value: string;
}

export interface ISort {
    active: string;
    direction: "asc" | "desc";
}

export interface IOptions {
    start: number,
    end: number,
    total: number,
    query: string,
    sort: ISort,
    filter: IFilter
}