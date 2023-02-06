import '../css/login.styles.css';
import coloredCheckIcon from '../assets/iconColoredCheck.svg';
import checkIcon from '../assets/iconCheck.svg';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function ForgotPasswordPage() {
  const [email, setEmail] = useState('');

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // axios.get(`http://i8e208.p.ssafy.io/api/account/checkEmailState`);

    // 해당 이메일이 존재하는지 먼저 체크해보기
    axios({
      // 프록시에 카카오 도메인을 설정했으므로 결제 준비 url만 주자
      url: 'https://i8e208.p.ssafy.io/api/account/findPw',
      // 결제 준비 API는 POST 메소드라고 한다.
      method: 'POST',
      params: { email },
    })
      .then((r) => {
        console.log('요청 보냄!', r);
        alert('요청하신 주소로 인증 요청 메일을 보냈습니다.');
        return navigate('/login');
      })
      .catch((err) => {
        console.log(err);
        alert('존재하지 않는 이메일입니다.');
      });
  };

  return (
    <div className="grayBackground">
      <div className="insideBox">
        <p className="title">Password Reset</p>
        <div className="loginBox">
          <div className="emailBox">
            <p className="m-1">이메일</p>

            <form className="emailForm" onSubmit={handleSubmit}>
              <input
                type="email"
                className="inputBox"
                id="emailForm"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="loginButton font-bold">
                이메일 인증 요청
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
