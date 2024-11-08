{
  //
  // Problem 6
  interface Profile {
    name: string;
    age: number;
    email: string;
  }
  const myProfile: Profile = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  };
  function updateProfile(
    myObj: Profile,
    updatesObj: Partial<Profile>
  ): Profile {
    return { ...myObj, ...updatesObj };
  }
  console.log(updateProfile(myProfile, { age: 26 }));
  //
}
