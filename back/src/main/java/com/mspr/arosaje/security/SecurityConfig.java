package com.mspr.arosaje.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import lombok.AllArgsConstructor;

import org.springframework.security.config.http.SessionCreationPolicy;

import com.mspr.arosaje.security.filter.AuthenticationFilter;
import com.mspr.arosaje.security.manager.CustomAuthenticationManager;
import com.mspr.arosaje.security.filter.ExceptionHandlerFilter;
import com.mspr.arosaje.security.filter.JWTAuthorizationFilter;


@Configuration
@AllArgsConstructor
public class SecurityConfig implements WebMvcConfigurer {

    private final CustomAuthenticationManager customAuthenticationManager;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/authenticate")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
    }

    // @Override
    // public void addCorsMappings(CorsRegistry registry) {
    //     registry.addMapping("/authenticate")
    //             .allowedOrigins("http://localhost:3000")
    //             .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
    //             .allowedHeaders("*")
    //             .allowCredentials(true);
    // }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        AuthenticationFilter authenticationFilter = new AuthenticationFilter(customAuthenticationManager);
        authenticationFilter.setFilterProcessesUrl("/authenticate");
        http        
            .cors().and()
            .csrf().disable()
            .authorizeRequests()
            .antMatchers(HttpMethod.POST, SecurityConstants.REGISTER_PATH).permitAll()
            .anyRequest().authenticated()
            .and()
            .addFilterBefore(new ExceptionHandlerFilter(), AuthenticationFilter.class)
            .addFilter(authenticationFilter)
            .addFilterAfter(new JWTAuthorizationFilter(), AuthenticationFilter.class)
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        return http.build();
    }
    
}