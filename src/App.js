const listOfusers = [
  { username: 'Jon', genrePref: 'rock' },
  { username: 'Lucy', genrePref: 'pop' },
  { username: 'Mike', genrePref: 'rock' },
  { username: 'Luke', genrePref: 'house' },
  { username: 'James', genrePref: 'house' },
  { username: 'Dave', genrePref: 'bass' },
  { username: 'Sarah', genrePref: 'country' },
  { username: 'Natalie', genrePref: 'bass' }]
function App() {
  const listMap=listOfusers.map(user=>{
    const itemvalues=`${user.username} genre fav ${user.genrePref}`;
    return(
      <li>{itemvalues}</li>
    )
  })
  return (
    <ul>{listMap}</ul>
  );
}

export default App;
