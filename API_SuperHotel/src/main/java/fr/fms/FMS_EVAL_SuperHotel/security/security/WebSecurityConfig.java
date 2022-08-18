package fr.fms.FMS_EVAL_SuperHotel.security.security;

import fr.fms.FMS_EVAL_SuperHotel.security.security.jwt.AuthEntryPointJwt;
import fr.fms.FMS_EVAL_SuperHotel.security.security.jwt.AuthTokenFilter;
import fr.fms.FMS_EVAL_SuperHotel.security.security.services.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;



@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(
    // securedEnabled = true,
    // jsr250Enabled = true,
    prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
  @Autowired
  UserDetailsServiceImpl userDetailsService;

  @Autowired
  private AuthEntryPointJwt unauthorizedHandler;

  @Bean
  public AuthTokenFilter authenticationJwtTokenFilter() {
    return new AuthTokenFilter();
  }

  @Override
  public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
    authenticationManagerBuilder.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
  }

  @Bean
  @Override
  public AuthenticationManager authenticationManagerBean() throws Exception {
    return super.authenticationManagerBean();
  }

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http.cors().and().csrf().disable()
      .exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()
      .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
      .authorizeRequests()
            .antMatchers(HttpMethod.POST, "/hotel/saveHotel").hasRole("ADMIN")
            .antMatchers(HttpMethod.DELETE, "/hotel/deleteHotel/{id}").hasRole("ADMIN")
            .antMatchers(HttpMethod.POST, "/city/saveCity").hasRole("ADMIN")
            .antMatchers(HttpMethod.DELETE, "/city/deleteCity/{id}").hasRole("ADMIN")
//            .antMatchers(HttpMethod.POST, "/chamber/saveChamber").hasRole("ADMIN")
//            .antMatchers(HttpMethod.DELETE, "/chamber/deleteChamber/{id}").hasRole("ADMIN")

            .antMatchers("/api/auth/**").permitAll()
            .antMatchers("/api/**").permitAll()
            .antMatchers("/hotel/all","/hotel/{id}","/hotel/hotelBycity/{city}").permitAll()
            .antMatchers("/city/all","/city/{id}").permitAll()
            .antMatchers("/chamber/**","/chamber/{id}","/chamber/chamberByHotel/{id}","/chamber/saveChamber").permitAll()
      .antMatchers("/api/test/**").permitAll()
      .anyRequest().authenticated();

    http.addFilterBefore(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);
  }
}
