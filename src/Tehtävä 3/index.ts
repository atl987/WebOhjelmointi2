// Define an interface Entity with readonly id: string.
// Create an abstract class BaseRepository<T extends Entity>: - private items: Map<string, T> = new Map() - protected log(action: string, entityId: string): void (stores or prints log)
// - public add(item: T): void (stores item in Map and calls protected log("ADD", item.id)) - public getById(id: string): T | undefined (retrieves item by id
// - public getAll(): readonly T[] (returns array of all items) - public abstract validate(item: T): boolean (abstract method)

interface Entity {
  readonly id: string;
}

abstract class BaseRepository<T extends Entity> {
  private items: Map<string, T> = new Map();

  // stores or prints log
  protected log(action: string, entityId: string): void {
    console.log(action, ",", entityId);
  }
  // stores item in Map and calls protected log("ADD", item.id)
  public add(item: T): void {
    this.items.set(item.id.toString(), item);
    this.log("ADD", item.id);
  }
  //retrieves item by id
  public getById(id: string): T | undefined {
    //if found retuirns item
    if (this.items.has(id)) {
      return this.items.get(id);
      //otherwise returns undefined
    } else {
      return undefined;
    }
  }
  //returns array of all items
  public getAll(): readonly T[] {
    return Array.from(this.items.values());
  }

  public abstract validate(item: T): boolean;
}
// Create a concrete class UserRepository extending BaseRepository<User> where User has id: string, name: string, age: number. In validate,
// return true if  age >= 18 and name.length > 0. If add is called with an invalid user, throw an Error.

class UserRepository<User extends Entity> extends BaseRepository<User> {
  constructor() {
    super();
  }
  public add(item: User): void {
    try {
      if (this.validate(item)) {
        super.add(item);
      } else {
        throw new Error("invalid user");
      }
    } catch (err) {
      console.log(
        `add failed for user with name: ${item.name}, age: ${item.age}, Reason:"`,
        err.message,
        `"`,
      );
    }
  }

  public validate(item: User): boolean {
    if (item.age >= 18 && item.name.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}
let user = { id: "12345", name: "xbx", age: 20 };
let repo = new UserRepository();
repo.add(user);
console.log(repo.getById(user.id));
let user2 = { id: "67890", name: "xdx", age: 17 };
repo.add(user2);
let user3 = { id: "ABCD", name: "juh", age: 70 };
repo.add(user3);
let all = repo.getAll();
all.forEach((item) => {
  console.log(item);
});
