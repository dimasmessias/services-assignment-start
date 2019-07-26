export class User
{
	constructor(public id: number, public name: string, public status: boolean, public history: Date[]) {}

	public get getNumberOfChanges(): number
	{
		return this.history.length;
	}
}
