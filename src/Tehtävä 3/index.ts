// Define an interface Entity with readonly id: string.
// Create an abstract class BaseRepository<T extends Entity>: - private items: Map<string, T> = new Map() - protected log(action: string, entityId: string): void (stores or prints log)
// - public add(item: T): void (stores item in Map and calls protected log("ADD", item.id)) - public getById(id: string): T | undefined (retrieves item by id
// - public getAll(): readonly T[] (returns array of all items) - public abstract validate(item: T): boolean (abstract method)
// Create a concrete class UserRepository extending BaseRepository<User> where User has id: string, name: string, age: number. In validate,
// return true if  age >= 18 and name.length > 0. If add is called with an invalid user, throw an Error.
