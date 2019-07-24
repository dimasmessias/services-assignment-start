import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent
{
	public activeUsers = ['Max', 'Anna'];
	public inactiveUsers = ['Chris', 'Manu'];

	public onSetToInactive(id: number): void
	{
		this.inactiveUsers.push(this.activeUsers[id]);
		this.activeUsers.splice(id, 1);
	}

	public onSetToActive(id: number): void
	{
		this.activeUsers.push(this.inactiveUsers[id]);
		this.inactiveUsers.splice(id, 1);
	}
}
