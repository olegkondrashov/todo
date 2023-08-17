import './App.scss';
import { TodoProvider } from './context/context';
import Input from './components/input/input.component';
import ListItems from './components/list/list-item.component';

function App() {

    return (
        <div className='App'>
            <h1>Todo List</h1>
            <TodoProvider>
                <Input/>
                <ListItems/>
            </TodoProvider>
        </div>
    );
}

export default App;
