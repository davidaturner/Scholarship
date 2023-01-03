package io.javabrains._05_web_security_auth;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@EnableWebSecurity
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter {
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		
		//In memory authentication.
		auth.inMemoryAuthentication()
			// set user
			.withUser("foo")
			.password("foo")
			// need a default role.
			.roles("USER")
			.and()
			// set admin
			.withUser("admin")
			.password("foo")
			.roles("ADMIN");
	}
	
	@Bean 
	public PasswordEncoder getPasswordEncoder() {
		// Get default password encoder. Do not encoder nor hash.
		return NoOpPasswordEncoder.getInstance();
	}

}
