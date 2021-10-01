import React from 'react';
import { formatTime } from '../helpers';
import './TimeDisplay.css';

const TimeDisplay = ({ time, status, progress}) => {
    document.title = `(${formatTime(time)}) Pomodoro`;

    const radius = 150;
    const stroke = 5;
    const normalizeRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <div className="TimeDisplay">
            <svg width="100%" viewBox={`0 0 ${radius * 2} ${radius * 2}`}>
                <circle 
                    stroke = "#ddd"
                    fill = "#fff"
                    strokeWidth = {stroke}
                    r = {nor}
                >
                </circle>
            </svg>
        </div>
    )
}