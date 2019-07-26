import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './shared/model/user.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
	public activeUsers: User[] = [];
	public inactiveUsers: User[] = [];

	constructor(private readonly userService: UserService) {}

	public onSetToInactive(id: number): void
	{
		this.userService.setUserStatus(id, false);
		this.updateListOfUsers();
	}

	public onSetToActive(id: number): void
	{
		this.userService.setUserStatus(id, true);
		this.updateListOfUsers();
	}

	public ngOnInit(): void
	{
		this.activeUsers = this.userService.getUsers(true);
		this.inactiveUsers = this.userService.getUsers(false);
	}

	private updateListOfUsers(): void
	{
		this.inactiveUsers = this.userService.getUsers(false);
		this.activeUsers = this.userService.getUsers(true);
	}
}
