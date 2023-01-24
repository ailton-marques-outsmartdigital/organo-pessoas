import './App.css';
import Form from './components/Form/Form';
import Banner from './components/Banner/Banner';
import { useState } from 'react';

function App() {
  const [members, setMembers] =useState([])

  const onNewMember = (member) => {
    console.log(member);
    setMembers([...members, member]);
  }

  return (
    <div className="App">
      <Banner />
      <Form  onMemberAdded={member => onNewMember(member)} />
    </div>
  );
}

export default App;
