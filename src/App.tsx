import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MarkdownPreviewer from './MarkdownPreviewer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MarkdownPreviewer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
