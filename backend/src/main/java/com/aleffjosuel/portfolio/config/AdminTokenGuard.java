package com.aleffjosuel.portfolio.config;

import com.aleffjosuel.portfolio.exception.UnauthorizedException;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;

/** Shared token-comparison logic, reused by every admin-gated interceptor. */
@Component
@RequiredArgsConstructor
public class AdminTokenGuard {

    private static final String ADMIN_TOKEN_HEADER = "X-Admin-Token";

    private final AppProperties appProperties;

    public void requireValidToken(HttpServletRequest request) {
        String providedToken = request.getHeader(ADMIN_TOKEN_HEADER);
        String expectedToken = appProperties.admin().token();

        if (expectedToken == null || expectedToken.isBlank()
                || providedToken == null
                || !MessageDigest.isEqual(
                        expectedToken.getBytes(StandardCharsets.UTF_8),
                        providedToken.getBytes(StandardCharsets.UTF_8))) {
            throw new UnauthorizedException("Missing or invalid admin token");
        }
    }
}
