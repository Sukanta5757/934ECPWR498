import React from 'react'
import '../error/Error.css'

function Error() {
  return (
    <div className='error'>
      <h1>404</h1>
      <h2>UH OH! You're lost.</h2>
      <p>The page you are loking for dose not exet. How you got here is a 
        mystery. But you can click the button blow to go back to the homepage.
      </p>
      <button>Go Back to Home</button>
    </div>
    
  )
}

export default Error