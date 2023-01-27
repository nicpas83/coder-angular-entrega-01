//respuesta del login
/*
{
    "token": "QpwL5tke4Pnpja7X4"
}
*/

export interface LogginForm{
  email: string;
  password: string;
  rol: string;
}

export interface LogginSuccessful {
  token: string;
}

//usuario simple
export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  fullname?: string;
}

// respuesta completa del usuario
export interface UserDto {
  data:    IUser;
  support: {
    url:  string;
    text: string;
  };
}


