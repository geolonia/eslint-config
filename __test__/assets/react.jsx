import React, {useState} from 'react';

export const App = (props) => {
  const [name, setName] = useState(props.defaultName );
  return <div>
    <span>{`Hello, ${name}!`}</span>
    <input type="text" onChange={(e) => setName(e.target.value)} />
  </div>;
};
