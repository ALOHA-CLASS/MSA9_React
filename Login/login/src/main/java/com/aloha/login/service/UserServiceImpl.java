package com.aloha.login.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.aloha.login.domain.UserAuth;
import com.aloha.login.domain.Users;
import com.aloha.login.mapper.UserMapper;

import jakarta.servlet.http.HttpServletRequest;

@Service
public class UserServiceImpl implements UserService {
    
    @Autowired
    private UserMapper userMapper;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Override
    public boolean insert(Users user) throws Exception {
        // 비밀번호 암호화
        String password = user.getPassword();
        String encodedPassword = passwordEncoder.encode(password);
        user.setPassword(encodedPassword);

        // 회원 등록
        int result = userMapper.join(user);

        // 권한 등록
        if( result > 0 ) {
            UserAuth userAuth = UserAuth.builder()
                                        .username(user.getUsername())
                                        .auth("ROLE_USER")
                                        .build();
            result += userMapper.insertAuth(userAuth);
        }
        return result > 0;
    }

    @Override
    public Users select(String username) throws Exception {
        return userMapper.select(username);
    }

    @Override
    public void login(Users user, HttpServletRequest request) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'login'");
    }

    @Override
    public boolean update(Users user) throws Exception {
        int reuslt = userMapper.update(user);
        return reuslt > 0;
    }

    @Override
    public boolean delete(String username) throws Exception {
        return userMapper.delete(username) > 0;
    }


    
}
