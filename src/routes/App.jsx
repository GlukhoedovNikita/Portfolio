import { Routes, Route } from 'react-router-dom'

import Main from '@pages/Main'
import Tools from '@pages/Tools'
import Works from '@pages/Works'

const App = () => {
    return (
        <Routes>
            <Route path="*" element={<Main />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/works" element={<Works />} />
        </Routes>
    )
}

export default App
