// Define a string literal union type UserStatus that accepts only "active", "inactive", or "pending".
type UserStatus = "active" | "inactive" | "pending";
// Define a tuple type Coordinate containing exactly two numbers: [latitude: number, longitude: number].
type Coordinate = [latitude: number, longitude: number];
// Define a type alias UserProfile with properties: - id: readonly number - user: string - email: string - status: UserStatus - location: Coordinate - bio: optional string.
type UserProfile = {
  readonly id: number;
  user: string;
  email: string;
  status: UserStatus;
  location: Coordinate;
  bio?: string;
};
let Paikka: Coordinate = [1, 2];
let Tomi: UserProfile = {
  id: 1,
  user: "tomtom",
  email: "tom@tom.com",
  status: "active",
  location: Paikka,
};
let ToinenPaikka: Coordinate = [3, 4];
let Timo: UserProfile = {
  id: 2,
  user: "timtim",
  email: "tim@tim.com",
  status: "inactive",
  location: ToinenPaikka,
  bio: "moikkelis",
};
console.log(Tomi);
console.log(Timo);
// Create and export a function createUser(id: number, username: string, email: string, location: Coordinate): UserProfile that initializes the user with status "pending".
function createUser(
  id: number,
  username: string,
  email: string,
  location: Coordinate,
) {
  let profile: UserProfile = {
    id: id,
    user: username,
    email: email,
    status: "pending",
    location: location,
  };
  return profile;
}
let KolmasPaikka: Coordinate = [5, 6];
let Tiina: UserProfile = createUser(3, "Tiina", "tin@tin.com", KolmasPaikka);
console.log(Tiina);
