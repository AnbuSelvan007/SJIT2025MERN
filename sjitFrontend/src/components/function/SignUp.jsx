import React from 'react'
import './SignUp.css'
function SignUp() {
  return (
    <>
    <center>
     <form  style={{marginTop:"20vh"}}>
        <table cellpadding="10px">
          <tr>
            <th>
              <label for="">First Name</label>
            </th>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <th>
              <label for="">Last Name</label>
            </th>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <th>
              <label for="">Email</label>
            </th>
            <td><input type="email" /></td>
          </tr>
          <tr>
            <th>
              <label for="">D.O.B</label>
            </th>
            <td><input type="date" /></td>
          </tr>
          <tr>
            <th>
              <label for="">Password</label>
            </th>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <th>
              <label for="">verify password</label>
            </th>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <th>
              <label for="">Gender</label>
            </th>
            <td>
              <input type="radio" name="gender" value="male" /> Male
              <input type="radio" name="gender" value="female" /> Female
            </td>
          </tr>
        </table>
        <button>SignUP</button>
        <p>or</p>
        <button>Aleardy Have an Account</button>
      </form>

      </center>
    </>
  )
}

export default SignUp
