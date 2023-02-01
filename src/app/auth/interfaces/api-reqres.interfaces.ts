//respuesta del login
/*
{
    "token": "QpwL5tke4Pnpja7X4"
}
*/

export interface LogginForm {
  email: string;
  password: string;
  rol: string;
}

export interface LogginSuccessful {
  token: string;
}

//usuario interface API MOCKAPI
export interface IUser {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  address: string;
  telephone_number: string;
  rol: string;
  created_at?: number;
  id?: string;
}

// respuesta completa del usuario API REQRES - LOGIN
export interface UserDto {
  data: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
    fullname?: string;
  };
  support: {
    url: string;
    text: string;
  };
}
