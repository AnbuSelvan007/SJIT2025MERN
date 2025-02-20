import React from 'react'

function Login() {
  return (
    <>
        <center>
     <form  style={{marginTop:"20vh"}}>
        <table cellpadding="10px">
          
          <tr>
            <th>
              <label for="">Email</label>
            </th>
            <td><input type="email" /></td>
          </tr>
         
          <tr>
            <th>
              <label for="">Password</label>
            </th>
            <td><input type="text" /></td>
          </tr>
        </table>
        <button>Login</button>
        <p>or</p>
        <button>Don't Have an Account</button>
      </form>
      </center>
    </>
  )
}

export default Login
