import React, {useState} from 'react';
import {Button, Container, Grid,
    TextField, Typography, Link} from "@mui/material";

const Join = () => {

    // 상태변수로 회원가입 입력값 관리
    const [userValue, setUserValue] = useState({
        userName: '',
        password: '',
        email: '',
    });

    // 입력 값 검증 메시지를 관리할 상태변수
    const [massage, setMassage] = useState({
        userName: '',
        password: '',
        passwordCheck: '',
        email: '',
    })

    // 검증 완료 체크에 대한 상태변수 관리
    const [correct, setCorrect] = useState({
        userName: false,
        password: false,
        passwordCheck: false,
        email: false,
    })


    // 이름 입력값을 검증하고 관리할 함수
    const nameHandler = e => {
        // console.log(e.target.value);
        const nameRegex = /^[가-힣]{2,5}$/; // 한글로, 2~5자 사이로

        const inputVal = e.target.value;

        let msg, flag; // 검증 메시지를 임시 저장할 지역변수

        if(!inputVal){ // inputVal 비어있다면
            msg = '유저 이름은 필수 값입니다';
            flag = false;
        } else if(!nameRegex.test(inputVal)){ // 정규표현식에 맞지 않다면
            msg = '2~5r글자 사이의 한글로 작성해주세요!';
            flag = false;
        } else {
            msg = '사용 가능한 이름 입니다';
            flag = true;
        }

        setMassage({
            ...massage,
            userName: msg
        })

        setCorrect({
            ...correct,
            userName: flag
        })

        setUserValue({
            ...userValue,
            userName: inputVal
        }); // 기존의 값들은 복사하고 어떤 값만 바꿔, js_es6_객체 디스쳐링
    }

    // 이메일 입력값을 검증하고 관리할 함수
    const emailHandler = e => {

        const inputVal = e.target.value;
        setUserValue({
            ...userValue,
            email: inputVal
        });
    }

    // 패스워드 입력값을 검증하고 관리할 함수
    const passwordHandler = e => {
        const pwRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/;

        const inputVal = e.target.value;

        // 검증 시작
        let msg, flag;
        if (!inputVal) { // 패스워드 안적은거
            msg = '비밀번호는 필수값입니다!';
            flag = false;
        } else if (!pwRegex.test(inputVal)) {
            msg = '8글자 이상의 영문,숫자,특수문자를 포함해주세요!';
            flag = false;
        } else {
            msg = '사용 가능한 비밀번호입니다.';
            flag = true;
        }

        setUserValue({
            ...userValue,
            password: inputVal
        });

        setCorrect({
            ...correct,
            password: flag
        })

        setMassage({
            ...massage,
            password: msg
        })


    }

    // 계정 생성 버튼을 누르면 동작할 내용
    const JoinClickHandler = e => {
        e.preventDefault();
        // console.log("click! joinHandler");
        // console.log(userValue);
    }

    return (
        <Container component="main" maxWidth="xs" style={{ margin: "200px auto" }}>
            <form noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography component="h1" variant="h5">
                            계정 생성
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            autoComplete="fname"
                            name="username"
                            variant="outlined"
                            required
                            fullWidth
                            id="username"
                            label="유저 이름"
                            autoFocus
                            onChange={nameHandler}
                        />
                        <span style={
                            correct.userName
                            ? {color: 'green'}
                                : {color: 'red', background: 'yellow'}
                        }>{massage.userName}</span>
                    </Grid>
                    <Grid item xs={12}>
                        {/* 라이브러리 TextField */}
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="이메일 주소"
                            name="email"
                            autoComplete="email"
                            onChange={emailHandler}
                        />
                        <span style={
                            correct.email
                                ? {color: 'green'}
                                : {color: 'red', background: 'yellow'}
                        }>{massage.email}</span>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="패스워드"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={passwordHandler}
                        />
                        <span style={
                            correct.password
                                ? {color: 'green'}
                                : {color: 'red', background: 'yellow'}
                        }>{massage.password}</span>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password-check"
                            label="패스워드 확인"
                            type="password"
                            id="password-check"
                            autoComplete="check-password"

                        />
                        <span id="check-text" style={
                            correct.passwordCheck
                                ? {color: 'green'}
                                : {color: 'red', background: 'yellow'}
                        }>{massage.passwordCheck}</span>
                    </Grid>

                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            style={{background: '#38d9a9'}}
                            onClick={JoinClickHandler}
                            disabled
                        >
                            계정 생성
                        </Button>
                    </Grid>
                </Grid>
                <Grid container justify="flex-end">
                    <Grid item>
                        <Link href="/login" variant="body2">
                          이미 계정이 있습니까? 로그인 하세요.
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default Join;

// 비동기 통신 -> 리액트 ajax, 패치