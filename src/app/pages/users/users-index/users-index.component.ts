import { UserFormComponent } from './../user-form/user-form.component';
import { MatDialog } from '@angular/material/dialog';
import { IUser } from './../../../auth/interfaces/api-reqres.interfaces';
import { Component, OnInit } from '@angular/core';

import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-index',
  templateUrl: './users-index.component.html',
  styleUrls: ['./users-index.component.css'],
})
export class UsersIndexComponent implements OnInit {
  public users: IUser[] = [];

  public displayedColumns = [
    'id',
    'first_name',
    'last_name',
    'email',
    'telephone_number',
    'rol',
    'actions',
  ];

  constructor(
    private usersService: UsersService,
    private dialog: MatDialog
    ) {}

  ngOnInit(): void {
    this.getusers();
  }

  getusers() {
    this.usersService.getAll().subscribe({
      next: (resp: IUser[]) => {

        this.users = resp;
        // console.log(this.users)
      },
      error: (err) => console.log(err)
    });
  }


  openDialogUserForm(user_id?: number){
    let title = user_id? 'Editar usuario' : 'Crear usuario';

    const dialogRef = this.dialog.open(UserFormComponent, {
      data: {
        title: title,
        data: user_id
      }
    })

    dialogRef.afterClosed().subscribe( data => {


      console.log(data.lenght)

      if(data.lenght > 0){
        console.log(user_id)
        if(user_id){
                    console.log(data)
console.log(user_id)
          this.usersService.update(user_id, data).subscribe( () => this.getusers() )
        }else{

          console.log(data)
console.log(user_id)
          this.usersService.create(data).subscribe( () => this.getusers() )
        }
      }
    })
  }





  deleteUser(id: number){

  }
}
