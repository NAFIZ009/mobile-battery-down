import React from 'react';

const BatteryDownBtn = ({setLevel}) => {
    return (
        <div>
            <button onClick={()=>setLevel(prev=>prev==0?prev=0:prev-1)}>
                battery down
            </button>
        </div>
    );
};

export default BatteryDownBtn;