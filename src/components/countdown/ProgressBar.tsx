import React, { useCallback, useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import { Button } from '@mui/material';
import { WrapperBtns, WrapperProgressBar } from './styledComponents';

import { useAppSelector } from 'hooks/useAppSelector';
import { useAppDispatch } from 'hooks/useAppDispatch';

import { updateMinAction, updateSecAction } from 'store/actions';
import { disabledFalse, disabledTrue } from 'store/disabledSlice';

import { Theme } from 'store/themeSlice';

import alarm from 'assets/sound/alarm.mp3';

import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = ({ theme }: Theme) => {
    const dispatch = useAppDispatch();

    const min = useAppSelector(updateMinAction);
    const sec = useAppSelector(updateSecAction);

    const [status, setStatus] = useState(0);
    const [interv, setInterv] = useState<NodeJS.Timeout | undefined>(undefined);
    const [progressPercent, setProgressPercent] = useState(0);
    const [secondsLeft, setSecondsLeft] = useState(0);

    const textColor = theme === 'light' ? '#1e2a47' : '#FFF';
    const countdown = secondsLeft ? `${Math.floor(secondsLeft / 60)} : ${secondsLeft % 60}` : `${min}:${sec}`;

    const handleStart = useCallback(() => {
        let totalTime = min * 60 + sec;
        if (totalTime) {
            setInterv(
                setInterval(() => {
                    setSecondsLeft(totalTime--);
                }, 1000)
            );
        }

        setStatus(1);
        dispatch(disabledTrue());
    }, [dispatch, min, sec]);

    const handleStop = useCallback(() => {
        setStatus(2);
        dispatch(disabledTrue());
        clearInterval(interv);
        setSecondsLeft(secondsLeft);
    }, [dispatch, interv, secondsLeft]);

    const handleReset = useCallback(() => {
        dispatch(disabledFalse());
        setSecondsLeft(0);
        setProgressPercent(0);
        setStatus(0);
        clearInterval(interv);
    }, [dispatch, interv]);

    const handleResume = useCallback(() => {
        let totalTime = secondsLeft;
        setInterv(
            setInterval(() => {
                setSecondsLeft(totalTime--);
            }, 1000)
        );

        setStatus(1);
        dispatch(disabledTrue());
    }, [dispatch, secondsLeft]);

    const playSound = () => {
        new Audio(alarm).play();
    };

    useEffect(() => {
        const totalTime = min * 60 + sec;
        if (totalTime) {
            const percent = Math.round((secondsLeft / totalTime) * 100);
            setProgressPercent(percent);
        }

        if (secondsLeft === 0) {
            setSecondsLeft(0);
            dispatch(disabledFalse());
            clearInterval(interv);
            setStatus(0);
        }

        if (secondsLeft === 1) {
            setTimeout(() => playSound(), 1000);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [secondsLeft, min, sec]);

    useEffect(() => {
        return () => {
            if (interv) {
                clearInterval(interv);
            }
        };
    }, [interv]);

    return (
        <>
            <WrapperProgressBar>
                <CircularProgressbar
                    value={progressPercent}
                    text={`${countdown}`}
                    styles={buildStyles({
                        textColor: `${textColor}`,
                        pathColor: '#f74646',
                        textSize: '15px',
                        trailColor: `${textColor}`,
                        rotation: 1,
                    })}
                />
            </WrapperProgressBar>
            {status === 0 ? (
                <WrapperBtns>
                    <Button variant='contained' color='success' size='medium' onClick={handleStart}>
                        Start
                    </Button>
                </WrapperBtns>
            ) : (
                <WrapperBtns>
                    {status === 2 ? (
                        <Button variant='contained' color='success' size='medium' onClick={handleResume}>
                            Resume
                        </Button>
                    ) : (
                        <Button variant='contained' color='success' size='medium' onClick={handleStop}>
                            Stop
                        </Button>
                    )}

                    <Button variant='outlined' color='error' size='medium' onClick={handleReset}>
                        Reset
                    </Button>
                </WrapperBtns>
            )}
        </>
    );
};

export default React.memo(ProgressBar);
