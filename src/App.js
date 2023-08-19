import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react';
import TopButtons from './components/topButtons';
import Inputs from './components/inputs';


function App() {
return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-grey-400'>
        <TopButtons />
        <Inputs />
    </div>
)
}

export default App;
