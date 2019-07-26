import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-inactive-users',
	templateUrl: './inactive-users.component.html',
	styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent
{
	@Input() public users: string[];
	@Output() public userSetToActive = new EventEmitter<number>();

	public onSetToActive(id: number): void
	{
		this.userSetToActive.emit(id);
	}
}
