function UserData(){
  const user = {
    first:"George",
    last:"Salayka",
    age: 41,
  };

  return (
    <div>
      <ul>
        User Data
        <li>First: {user.first}</li>
        <li>Last: {user.last}</li>
        <li>Age: {user.age}</li>
      </ul>
    </div>
  );
}
export default UserData;