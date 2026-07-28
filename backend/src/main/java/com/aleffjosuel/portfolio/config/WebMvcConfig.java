package com.aleffjosuel.portfolio.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@RequiredArgsConstructor
public class WebMvcConfig implements WebMvcConfigurer {

    private final ProjectsAdminAuthInterceptor projectsAdminAuthInterceptor;
    private final ContactAdminAuthInterceptor contactAdminAuthInterceptor;
    private final AppProperties appProperties;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins(appProperties.cors().allowedOrigins().toArray(new String[0]))
                .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS")
                .allowedHeaders("*");
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(projectsAdminAuthInterceptor)
                .addPathPatterns("/api/projects/**");
        registry.addInterceptor(contactAdminAuthInterceptor)
                .addPathPatterns("/api/contact/**");
    }
}
