import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Main } from '@pages/index'

const Tools = lazy(() => import('@pages/Tools'))
const Works = lazy(() => import('@pages/Works'))

const App = () => {
    return (
        <Routes>
            <Route path="*" element={<Main />} />
            <Route path="/tools" element={<Suspense><Tools /></Suspense>} />
            <Route path="/works" element={<Suspense><Works /></Suspense>} />
        </Routes>
    )
}

export default App
