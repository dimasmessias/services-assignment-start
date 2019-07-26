import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../shared/model/user.model';

@Component({
	selector: 'app-inactive-users',
	templateUrl: './inactive-users.component.html',
	styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent
{
	@Input() public users: User[];
	@Output() public userSetToActive = new EventEmitter<number>();

	public onSetToActive(id: number): void
	{
		this.userSetToActive.emit(id);
	}
}
