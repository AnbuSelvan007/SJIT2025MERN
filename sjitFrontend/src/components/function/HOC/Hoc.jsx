import React from 'react'
import Button from './Button'
import track from './track'
function Hoc() {
    const ButtonTrack=track(Button);
  return (
    <div>
      <h1>this is HOC</h1>
      <Button value={"Login"}/>
      <ButtonTrack  value={"Login"} trackinfo={track}/>
    </div>
  )
}

export default Hoc
