import React, {useState} from 'react';

type Props = { defaultName: string }

export const App = (props: Props) => {
  const [name, setName] = useState(props.defaultName );
  return <div>
    <span>{`Hello, ${name}!`}</span>
    <input type="text" onChange={(e) => setName(e.target.value)} />
  </div>;
};
