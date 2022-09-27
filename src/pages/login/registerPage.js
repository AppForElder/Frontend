import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
//import Header from '../../Components/header';
import { PageWrap, LoginBtn } from '../../Components/styled';
import '../../Components/login.css';

export default function RegisterPage() {
    const [ID, setId] = useState("");
    const [Password, setPassword] = useState("");
    const [Name, setName] = useState("");
    const [ConfirmPasword, setConfirmPasword] = useState("");
    const [Department, setDepartment] = useState("");
    const [Age, setAge] = useState("");
    const [Gender, setGender] = useState("");
    const [Email, setEmail] = useState("");
    const navigate = useNavigate();

    const onIdHandler = (e) => {
        setId(e.currentTarget.value);
    };
    const onPasswordHanlder = (e) => {
        setPassword(e.currentTarget.value);
    };
    const onConfirmPasswordHandler = (e) => {
        setConfirmPasword(e.currentTarget.value);
    };
    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value);
    };
    const onNameHandler = (e) => {
        setName(e.currentTarget.value);
    };
    const onDepartmentHandler = (e) => {
        setDepartment(e.currentTarget.value);
    };
    const onAgeHandler = (e) => {
        setAge(e.currentTarget.value);
    };
    const onGenderHandler = (e) => {
        setGender(e.currentTarget.value);
    };
    

    const onSubmitHandler = (e) => {

        e.preventDefault();
        if(ID === "" || Email === "" || Name === "" || Department === "" || Age === ""){
            alert("공백인 칸을 채워주세요.");
        }
        else{
            if(Password.length>=8){
                if (Password === ConfirmPasword) {
                    let userInfo = {  //회원정보 Json
                        id: ID,
                        password: Password,
                        email: Email,
                        name: Name,
                        dep: Department,
                        age: Age,
                        gender: Gender
                    };
                    console.log(userInfo);

                    //////////////////////////////////////////
                    /////POST로 회원가입정보 넘기기 필요////////
                    //////////////////////////////////////////

                    alert("가입이 정상적으로 완료되었습니다");
                    navigate(`/login`); //로그인으로 이동
                } 
                else {
                    alert("비밀번호가 일치하지 않습니다");
                }
            }
            else {
                alert("비밀번호는 숫자, 영문, 특수문자를 포함한 8자리 이상입니다.");
            }
        }
        
    };

                        ///////////////////////////////////////////////////////////////////
                        ////////회원가입 시 디비에서 아이디,이메일 중복 검사 필요함 ,,/////////
                        ///////////////////////////////////////////////////////////////////
    return (          
        <PageWrap>      
            <CardLayout_container>
                <h3 style={{  margin: '30px auto', justifyContent : 'center', display: 'flex' }}>회원가입</h3>

                <div className="login-box login-box-register">
                    <form onSubmit={onSubmitHandler}>
                    <div className="user-box">
                        <input type="text"  name="" maxLength = "20" placeholder="영문, 숫자 5-20자"   value={ID} onChange={onIdHandler} />
                        <label>아이디</label>
                    </div>
                    <br/>
                    <div className="user-box ">
                        <input type="password" name="" required=""   placeholder="숫자, 영문, 특수문자 조합 최소 8자" value={Password} onChange={onPasswordHanlder} />
                        <label>비밀번호</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name="" required="1"  value={ConfirmPasword} onChange={onConfirmPasswordHandler} />
                        <label>비밀번호 재입력</label>
                    </div>
                    <br/>
                    <div className="user-box">
                        <input type="text" name=""  placeholder="example@example.com" value={Email} onChange={onEmailHandler} />
                        <label>이메일</label>
                    </div>
                    <div className="user-box">
                        <input type="text" name="" maxLength = "20"  value={Name} onChange={onNameHandler} />
                        <label>닉네임</label>
                    </div>
                    <div className="user-box">
                        <input type="text" name="" maxLength = "20"  value={Department} onChange={onDepartmentHandler} />
                        <label>학과</label>
                    </div>
                    <div className="user-box">
                        <input type="number" name="quantity" min="10" max="23" placeholder="ex) 22" value={Age} onChange={onAgeHandler} />
                        <label>학번</label>
                    </div>
                        <div style={{  float : 'right', display: 'flex' }}>   
                            <input type="radio" id="male" name="gender"  value="male" onChange={onGenderHandler}/>
                            <label>남</label>
                            <input type="radio" id="female" name="gender" value="female" onChange={onGenderHandler}/>
                            <label>여</label>
                        </div>
                        <br/><br/>
                    <LoginBtn>
                        <button type="submit">회원가입</button>
                    </LoginBtn>

                    </form>
                </div>

            </CardLayout_container>
        </PageWrap>
    );

};

const CardLayout_container = styled.div`
    position: relative;
    margin: 0 auto;
    padding: 20px 20px 10px 20px;
    width: 350px;
    min-height: 100%;
    background-color: #f3f3f3;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
    
`;

