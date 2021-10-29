export type Category = {
    [tag: string]: {
        id: number,
        title: string,
        color: string,
        expense: boolean,
    }
};