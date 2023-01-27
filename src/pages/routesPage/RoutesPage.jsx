import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Base from '../Layout/Base'
import Home from '../../pages/Home'
import PageNotFound from '../../pages/PageNotFound'
import Fuse from '../Fuse'
import Create from '../Create'
import LeaderBoard from '../LeaderBoard'
import Content from '../Content'

const RoutesPage = () => {
    return (
        <>
            <BrowserRouter>
                <Base>
                    <Routes >
                        <Route index path='/' element={<Home />} />
                        <Route path='/create' element={<Create />} />
                        <Route path='/fuse' element={<Fuse />} />
                        <Route path='/leaderboard' element={<LeaderBoard />} />
                        <Route path='/content' element={<Content />} />
                        <Route path='/*' element={<PageNotFound />} />
                    </Routes>
                </Base>
            </BrowserRouter>
        </>
    )
}

export default RoutesPage