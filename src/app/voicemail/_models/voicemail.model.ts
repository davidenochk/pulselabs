export interface IRating{
    easeOfUse: number;
    satisfaction: number;
    usefulness: number;
    preference: number;
}

export interface IVoicemail {
    _id: string;
    by: string;
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