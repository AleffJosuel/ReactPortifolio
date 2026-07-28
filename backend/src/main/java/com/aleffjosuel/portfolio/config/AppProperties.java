package com.aleffjosuel.portfolio.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

import java.util.List;

@ConfigurationProperties(prefix = "app")
public record AppProperties(
        Github github,
        Admin admin,
        Cors cors
) {

    public record Github(String username, int cacheTtlMinutes) {
    }

    public record Admin(String token) {
    }

    public record Cors(List<String> allowedOrigins) {
    }
}
