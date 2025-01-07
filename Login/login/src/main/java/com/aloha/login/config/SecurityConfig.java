package com.aloha.login.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.aloha.login.security.filter.JwtAuthenticationFilter;
import com.aloha.login.security.filter.JwtRequestFilter;
import com.aloha.login.security.provider.JwtProvider;
import com.aloha.login.service.UserDetailServiceImpl;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity( prePostEnabled = true, securedEnabled = true )
public class SecurityConfig {

	@Autowired private UserDetailServiceImpl userDetailServiceImpl;

	@Autowired private JwtProvider jwtProvider;

	private AuthenticationManager authenticationManager;

	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
		this.authenticationManager = authenticationConfiguration.getAuthenticationManager();
		return authenticationManager;
	}

	
	// OK : (version : after SpringSecurity 5.4 ⬆)
	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		// 폼 기반 로그인 비활성화
		http.formLogin(login ->login.disable());							

		// HTTP 기본 인증 비활성화
		http.httpBasic(basic ->basic.disable());

		// CSRF(Cross-Site Request Forgery) 공격 방어 기능 비활성화
		http.csrf(csrf ->csrf.disable());

		// 세션 관리 정책 설정: STATELESS로 설정하면 서버는 세션을 생성하지 않음
	 	// 🔐 세션을 사용하여 인증하지 않고,  JWT 를 사용하여 인증하기 때문에, 세션 불필요
		http.sessionManagement(management ->management
			.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

		// ✅ 사용자 정의 인증 설정
		http.userDetailsService( userDetailServiceImpl );

		// 필터 설정
		// ✅ JWT 요청 필터 설정 1️⃣
		// ✅ JWT 인증 필터 설정 2️⃣
		http.addFilterAt( new JwtAuthenticationFilter(authenticationManager, jwtProvider)
						 , UsernamePasswordAuthenticationFilter.class )
			.addFilterBefore(new JwtRequestFilter(authenticationManager, jwtProvider)
						, UsernamePasswordAuthenticationFilter.class);


		// 구성이 완료된 SecurityFilterChain을 반환합니다.
		return http.build();
	}

	// 비밀번호 암호화 빈 등록
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
}
