import React, { useCallback, useEffect, useState } from 'react';

import { ThemeProvider } from '@mui/system';

import { Title } from 'components';
import Display from './Display';

import { customTheme } from 'assets/styles/themeStyles';
import { BtnsWrapper, ClockHolder, ResetButton, StartButton, StopButton, StopWatch } from './styledComponents';
import { Wrapper } from 'assets/styles/globalStyleComponents';

import { Theme } from 'store/themeSlice';

const Timer = ({ theme }: Theme) => {
    const [time, setTime] = useState({ ms: 0, s: 0, m: 0 });
    const [interv, setInterv] = useState<NodeJS.Timeout | undefined>(undefined);
    const [status, setStatus] = useState(0);

    const run = useCallback(() => {
        setTime(prevTime => {
            let updatedSec = prevTime.s;
            let updatedMin = prevTime.m;
            let updatedMSec = prevTime.ms + 1;

            if (updatedSec === 60) {
                updatedMin++;
                updatedSec = 0;
            }

            if (updatedMSec === 100) {
                updatedSec++;
                updatedMSec = 0;
            }

            return { ms: updatedMSec, s: updatedSec, m: updatedMin };
        });
    }, []);

    const start = useCallback(() => {
        run();
        setInterv(setInterval(run, 10));
        setStatus(1);
    }, [run]);

    const stop = useCallback(() => {
        clearInterval(interv);
        setStatus(2);
    }, [interv]);

    const reset = useCallback(() => {
        clearInterval(interv);
        setStatus(0);
        setTime({ ms: 0, s: 0, m: 0 });
    }, [interv]);

    const resume = useCallback(() => start(), [start]);

    useEffect(() => {
        return () => {
            if (interv) {
                clearInterval(interv);
            }
        };
    }, [interv]);

    return (
        <ThemeProvider theme={customTheme}>
            <Wrapper color={theme}>
                <Title theme={theme}>Timer</Title>
                <ClockHolder>
                    <StopWatch color={theme}>
                        <Display time={time} />
                        {status === 0 ? (
                            <StartButton color={theme} onClick={start}>
                                Start
                            </StartButton>
                        ) : (
                            <BtnsWrapper>
                                {status === 2 ? (
                                    <StopButton color={theme} onClick={resume}>
                                        Resume
                                    </StopButton>
                                ) : (
                                    <StopButton color={theme} onClick={stop}>
                                        Stop
                                    </StopButton>
                                )}
                                <ResetButton color={theme} onClick={reset}>
                                    Reset
                                </ResetButton>
                            </BtnsWrapper>
                        )}
                    </StopWatch>
                </ClockHolder>
            </Wrapper>
        </ThemeProvider>
    );
};

export default React.memo(Timer);
