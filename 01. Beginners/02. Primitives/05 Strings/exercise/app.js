// 1. Create variable name (favActorFirstName) & store your fav Actor name.
// 2. Create variable name (favActorLastName) & store the last name of (FA).
// 3. Create variable name (fullName) & concatenate (favActorFirstName, favActorLastName)
// 4. Create variable name (uppercase) & CAPITALIZE your fav actor name.
// 5. Create a variable name (message) & store `My favorite Actor Is (favActorName) & say something about your fav actor` name should be in UPPERCASE.
// 6. Now append this message to the (message variable) `his best show is Silicon Valley`.
// 7. Now Log your Message.

let favActorFirstName = "Bertram";
let favActorLastName = "Gilfoyle";
let fullName = favActorFirstName + " " + favActorLastName;
let uppercase = fullName.toUpperCase();
let message = `My Favorite Actor is ${uppercase}, `;
message += `his best show is silicon valley`;
console.log(message);
