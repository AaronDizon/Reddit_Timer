import {React, useContext } from 'react';
import { SearchContext } from '../context/SearchContext'
import styles from '../Styling/Title.module.css'

const Title = () => {

  const {infoSearchStatusState, descriptionState, loadedState, errorState, dataState} = useContext(SearchContext)
      const [setInfoSearchStatus,] = infoSearchStatusState
      const [setDescription] = descriptionState
      const [setLoaded] = loadedState
      const [setError] = errorState
      const [setData] = dataState

  const reset = () => {
    setInfoSearchStatus(false)
    setDescription('')
    setLoaded(false)
    setError(false)
    setData([])
  }

  return (
    <div className={styles.title} onClick={reset}>Reddit Timer</div>
  )
}

export default Title