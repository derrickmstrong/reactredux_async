import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { ActionCreators } from './store'
import { bindActionCreators } from 'redux'

const App = () => {
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()
    const { fetchPosts } = bindActionCreators(ActionCreators)
    useEffect(() => {
        dispatch(ActionCreators.fetchPosts())
        return () => {}
    }, [])

    const renderPosts = posts.map(el => <p>{el.title}</p>)
    return (
        <div>
            {renderPosts}
        </div>
    )
}

export default App
