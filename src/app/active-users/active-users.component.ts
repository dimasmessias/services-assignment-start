import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-active-users',
	templateUrl: './active-users.component.html',
	styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent
{
	@Input() public users: string[];
	@Output() public userSetToInactive = new EventEmitter<number>();

	public onSetToInactive(id: number): void
	{
		this.userSetToInactive.emit(id);
	}
}
