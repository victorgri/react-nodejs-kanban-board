import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const usernameRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem('userId', usernameRef.current.value);

    usernameRef.current.value = '';
    navigate('/task');
  }

  return (
    <div className="login__container">
      <form className="login__form" onSubmit={handleSubmit}>
        <label htmlFor="username">Provide a usernaame</label>
        <input type="text" name="username" id="username" required ref={usernameRef}/>
        <button>SIGN IN</button>
      </form>
    </div>
  )
}

