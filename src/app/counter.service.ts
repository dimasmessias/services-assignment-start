import { User } from './shared/model/user.model';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CounterService
{
	public setHistory(user: User): void
	{
		user.history.push(new Date());
	}
}
