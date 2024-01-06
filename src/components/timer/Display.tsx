import { ITime } from 'types/time.interface';

import { DisplayWrapper, TimerBlock } from './styledComponents';

const Display = ({ time }: ITime) => {
    const { ms, s, m } = time;
    return (
        <DisplayWrapper>
            <TimerBlock>{m >= 10 ? m : `0${m}`}</TimerBlock>
            <span>:</span>
            <TimerBlock>{s >= 10 ? s : `0${s}`}</TimerBlock>
            <span>:</span>
            <TimerBlock>{ms >= 10 ? ms : `0${ms}`}</TimerBlock>
        </DisplayWrapper>
    );
};

export default Display;
