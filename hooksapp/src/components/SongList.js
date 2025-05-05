import React, {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

const uuid = uuidv4;

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'this wild darkness', id: 1 },
    { title: 'memory gospel', id: 2 },
    { title: 'Song 3', id: 3 }
  ]);
  const [age, setAge] = useState(20);
  const addSong = () => { 
    setSongs([...songs, { title: 'new song', id: uuid() }]);

  }
      useEffect(() => {
        console.log('useEffect hook ran', songs);
      })
  return (
    <div className="song-list">
      <h2>Song List</h2>
      <ul>
        {songs.map(song => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
    <button onClick={addSong}> Add a song</button>
    <button onClick={()=>{setAge(age +1)}} >Add 1 to age: {}</button>
    </div>
  );
}

export default SongList;