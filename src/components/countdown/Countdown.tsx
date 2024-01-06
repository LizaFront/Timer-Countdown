import { Wrapper } from 'assets/styles/globalStyleComponents';

import Title from 'components/title/Title';
import TimeFields from './TimeFields';
import ProgressBar from './ProgressBar';

import { Theme } from 'store/themeSlice';

const Countdown = ({ theme }: Theme) => {
    return (
        <Wrapper>
            <Title theme={theme}>Countdown</Title>
            <TimeFields />
            <ProgressBar theme={theme} />
        </Wrapper>
    );
};

export default Countdown;
