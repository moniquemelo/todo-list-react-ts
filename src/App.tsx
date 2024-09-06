import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Todo from './pages/Todo/Todo';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Todo/>} />
      </Routes>
    </Router>
  );
}
