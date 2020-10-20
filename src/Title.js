import React from 'react';

const Title = ({bigTitle, season, className}) =>{
    return(
        <div>
            <h2 className={className}>{bigTitle} {season}</h2>
        </div>
    )
}
export default Title;