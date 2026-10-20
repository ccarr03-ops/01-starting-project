function UserData(){
    const User ={First: "Charles", Last: "Carr", Age: "19"};
return(
  <div>
    <ul>
      User Data
      <li>First: {User.First}</li>
      <li>Last: {User.Last}</li>
      <li>Age: {User.Age}</li>
    </ul>
  </div>
);
}

export default UserData;