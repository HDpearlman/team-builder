import React from 'react';

function Members(props){
    console.log('member props', props)
    
    return(
    props.members.map(member =>
        <div>
            {member.name}
            </div>)
    )
}

export default Members;