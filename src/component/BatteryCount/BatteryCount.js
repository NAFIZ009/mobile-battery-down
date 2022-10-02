import React, { useState } from 'react';
import BatteryDownBtn from '../BatteryDownBtn/BatteryDownBtn';
import './BatteryCount.css';

const BatteryCount = () => {
    const [parcentage,setParcentage]=useState(100);
    return (
        <div>
            <div className="battery-count">
                <h1>{parcentage}</h1>
            </div>
            <BatteryDownBtn setLevel={setParcentage}/>
        </div>
    );
};

export default BatteryCount;