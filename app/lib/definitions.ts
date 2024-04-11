
export type User ={
    id:string;
    name:string;
    email:string;
    password:string;
}

export type TestTable = {
    id:string;
    title:string;
    teacher_name:string;
    date:string;
    status: 'live' | 'expired' | 'notlive';
}