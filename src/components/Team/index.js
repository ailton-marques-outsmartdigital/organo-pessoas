import './Team.css'
import Member from '../Member';

const Team = (props) => {
  const css = { backgroundColor: props.secondary };
  return (
    <section className='team' style={css}>
      <h3 style={{ borderColor: props.primary }}>{props.teamName}</h3>
      <div className='team-list'>
        {props.members.map( member => <Member
                  Name={member.Name}
                  Job={member.Job}
                  Image={member.Image}
                /> )}
      </div>
    </section>
  )
}

export default Team;
