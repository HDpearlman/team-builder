import React from 'react';

function Members(props){
    console.log('member props', props)
    
    return(
        <div>
       {props.members[0].name}
    
    </div>
    )
    
}

export default Members;