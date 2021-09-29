import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { ActionCreators } from './store'
import { bindActionCreators } from 'redux'

const App = () => {
    const { loading, items, error } = useSelector(state => state.posts)
    const dispatch = useDispatch()
    const { fetchPosts } = bindActionCreators(ActionCreators, dispatch)

    useEffect(() => {
        dispatch(fetchPosts)
        return () => {}
    }, [])

    const renderPosts = () => {
        if (loading) return <h1>Loading...</h1>
        if (items) return items.map((el, index) => <p key={index}>{el.title}</p>);
        if (error) return <h1>ERROR</h1>
    }

    return (
      <div>
        {renderPosts()}
      </div>
    );
}

export default App
