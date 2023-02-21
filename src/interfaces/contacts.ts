export interface IContact {
  name: string;
  id: string;
  number: string;
}

export interface IState {
  phonebook: {
    filter: string;
    contacts: IContact[];
  }
}