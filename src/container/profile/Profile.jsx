import React from 'react'
import Card from '../../component/card/card'
import {Link as RouterLink} from 'react-router'
function profile() {
  return (
    <div>
        <button ><RouterLink to="/">Go Back</RouterLink></button>
        <Card
            hoverable
            style={{
              width: 300,
            }}
            cover={
              <img
                alt="example"                      
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            
          </Card>
    
        <h1>hello</h1>
    </div>
  )
}

export default profile
