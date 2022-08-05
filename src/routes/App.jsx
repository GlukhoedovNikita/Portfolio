import { Routes, Route } from 'react-router-dom'

import Main from '@pages/Main'
import Tools from '@pages/Tools'

const App = () => {
    return (
        <Routes>
            <Route path="*" element={<Main />} />
            <Route path="/tools" element={<Tools />} />
        </Routes>
    )
}

export default App
