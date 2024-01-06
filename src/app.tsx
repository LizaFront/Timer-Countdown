import { Routes, Route } from 'react-router-dom';

import CounterPage from 'pages/CounterPage';
import TimerPage from 'pages/TimerPage';

const App = (): JSX.Element => {
    return (
        <Routes>
            <Route path='/' element={<TimerPage />} />
            <Route path='/countdown' element={<CounterPage />} />
        </Routes>
    );
};

export default App;
