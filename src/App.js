import './App.css';
import Form from './components/Form/Form';
import Banner from './components/Banner/Banner';
import Team from './components/Team';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [members, setMembers] =useState([])

  const teams = [
    {
    teamName: 'Programação',
    primaryColor: '#57C278',
    secondaryColor: '#D9F7E9'
  },
  {
    teamName: 'Front End',
    primaryColor: '#82CFFA',
    secondaryColor: '#E8FFFF'
  },   {
    teamName: 'Data Science',
    primaryColor: '#A6D157',
    secondaryColor: '#E9FFE3'
  },   {
    teamName: 'Devops',
    primaryColor: '#E06B69',
    secondaryColor: '#FDE7E8'
  },   {
    teamName: 'UX e Design',
    primaryColor: '#DB6EBF',
    secondaryColor: '#FAE9F5'
  },   {
    teamName: 'Mobile',
    primaryColor: '#FFBA05',
    secondaryColor: '#FFF5D9'
  },   {
    teamName: 'Inovação e Gestão',
    primaryColor: '#FF8A29',
    secondaryColor: '#FFEEDF'
  },
];

  const onNewMember = (member) => {
    console.log(member);
    setMembers([...members, member]);
  }

  return (
    <div className="App">
      <Banner />
      <Form teamList={teams.map(team => team.teamName)}  onMemberAdded={member => onNewMember(member)} />

      {teams.map(team => <Team
                                            key={team.teamName}
                                            teamName={team.teamName}
                                            primary={team.primaryColor}
                                            secondary={team.secondaryColor}
                                            members={members.filter(member => member.Team === team.teamName)}
                                          />)}
      <Footer />
    </div>
  );
}

export default App;
