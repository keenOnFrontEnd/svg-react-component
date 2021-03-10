import React from 'react';

export const CustomButton = ({styles,func,text, value}) => {

    return <label className={styles}>
        {text}
        <input type="button" onClick={func} defaultValue={value}/>
    </label>
}