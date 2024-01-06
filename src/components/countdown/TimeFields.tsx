import React, { ChangeEvent, useEffect, useState } from 'react';

import { Box, Slider, TextField } from '@mui/material';

import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';

import { updateMin, updateSec } from 'store/countdownSlice';
import { disabledField } from 'store/actions';

const TimeFields = () => {
    const dispatch = useAppDispatch();
    const disabled = useAppSelector(disabledField);

    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);
    const [totalTime, setTotalTime] = useState(0);

    const handleMinutesChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = Number(e.target.value);
        setMin(value);
    };

    const handleSecondsChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = Number(e.target.value);
        setSec(value);
    };

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        if (typeof newValue === 'number') {
            setTotalTime(newValue);
            const timeInSeconds = newValue * 60;
            if (timeInSeconds > 59) {
                const minutes = timeInSeconds / 60;
                const seconds = (minutes % 1) * 60;
                setMin(Math.floor(minutes));
                setSec(seconds);
            } else {
                setSec(timeInSeconds);
            }
        }
    };

    useEffect(() => {
        if (sec > 59) {
            setSec(0);
        }
        if (min > 720) {
            setMin(0);
        }
        setTotalTime((min * 60 + sec) / 60);
        dispatch(updateMin(min));
        dispatch(updateSec(sec));
    }, [sec, min, dispatch]);

    return (
        <>
            <Box
                width='100%'
                display='flex'
                justifyContent='space-between'
                marginTop='20px'
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '50%' },
                }}
            >
                <TextField
                    id='outlined-number'
                    label='Minutes'
                    type='number'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{ min: 0, max: 720 }}
                    value={min}
                    onChange={handleMinutesChange}
                    variant='standard'
                    disabled={disabled}
                />
                <TextField
                    id='outlined-number'
                    label='Seconds'
                    type='number'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{ min: 0, max: 59 }}
                    value={sec}
                    onChange={handleSecondsChange}
                    variant='standard'
                    disabled={disabled}
                />
            </Box>
            <Box width='100%' display='flex' justifyContent='space-between' marginTop='10px'>
                <Slider
                    valueLabelDisplay='off'
                    step={0.25}
                    marks={false}
                    min={0}
                    max={60}
                    value={totalTime}
                    onChange={handleSliderChange}
                    sx={{
                        '& .MuiSlider-rail': { color: '#f74646' },
                    }}
                    disabled={disabled}
                />
            </Box>
        </>
    );
};

export default React.memo(TimeFields);
