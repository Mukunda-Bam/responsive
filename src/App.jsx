
import './App.css'

function App() {

  return (
    <>
      <div className='App'>
       <div className='left'>
        <div className='left-container'>
          <div className='left-top'><p className='left-top-p'>Widget 1</p></div>
          <div className='left-bottom'><p className='left-bottom-p'>Widget 4</p></div>
        </div>
       </div>
       <div className='middle'>
       <div className='middle-container'>
          <div className='middle-top'><p className='middle-top-p'>Widget 2</p></div>
          <div className='middle-bottom'><p className='middle-bottom-p'>Widget 5</p></div>
        </div>
       </div>
       <div className='right'>
       <div className='right-container'>
          <div className='right-top'><p className='right-top-p'>Widget 3</p></div>
          <div className='right-bottom'><p className='right-bottom-p'>Widget 6</p></div>
        </div>
       </div>
      </div>
    </>
  )
}

export default App
