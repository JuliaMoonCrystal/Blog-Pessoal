interface UserLogin{
    id : number;
    nome : string;
    senha :	string;
    usuario:	string ;
    token?: string | null;
}

export default UserLogin;