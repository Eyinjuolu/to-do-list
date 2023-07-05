import React from 'react'

const Form = () => {
  return (
    <form>
        <div className='Input Wrapper'>
            <input type="text" placeholder='Enter Todo...' />
            <div className='submit-btn'>
                <button>Enter</button>
            </div>
        </div>
    </form>
  )
}

export default Form