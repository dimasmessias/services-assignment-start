import { Injectable } from '@angular/core';
import { CounterServiceService } from './counter-service.service';
import { User } from './shared/model/user.model';

@Injectable({providedIn: 'root'})
export class DataStorageService
{
	private readonly users: User[] = [
		new User(1, 'Max', true, []),
		new User(2, 'Anna', true, []),
		new User(3, 'Chris', false, []),
		new User(4, 'Manu', false, []),
	];

	constructor(private readonly counterService: CounterServiceService) {}

	public getUser(id: number): User
	{
		return this.users.find((u) => u.id === id);
	}

	public getUsers(status: boolean): User[]
	{
		return this.users.filter((u) => u.status === status);
	}

	public setUserStatus(id: number, status: boolean): void
	{
		const user = this.getUser(id);
		user.status = status;
		this.counterService.setHistory(user);
	}
}
