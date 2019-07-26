import { Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { User } from './shared/model/user.model';

@Injectable({providedIn: 'root'})
export class UserService
{
	constructor(private readonly dataStorageService: DataStorageService) {}

	public setUserStatus(userId: number, status: boolean): void
	{
		this.dataStorageService.setUserStatus(userId, status);
	}

	public getUsers(status: boolean): User[]
	{
		return this.dataStorageService.getUsers(status);
	}
}
