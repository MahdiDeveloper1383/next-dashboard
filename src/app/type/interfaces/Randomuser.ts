export interface IRandomUser {
    name: {
        title: string;
        first: string;
        last: string;
    };
    email: string;
    phone: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
}
