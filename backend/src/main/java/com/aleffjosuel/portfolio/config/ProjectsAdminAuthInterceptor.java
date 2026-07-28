package com.aleffjosuel.portfolio.config;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

/**
 * Guards /api/projects/**: GET (public reads) and OPTIONS (CORS preflight,
 * which never carries the admin header) pass through untouched; every
 * other method must present a valid X-Admin-Token.
 */
@Component
@RequiredArgsConstructor
public class ProjectsAdminAuthInterceptor implements HandlerInterceptor {

    private final AdminTokenGuard adminTokenGuard;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        String method = request.getMethod();

        if ("GET".equalsIgnoreCase(method) || "OPTIONS".equalsIgnoreCase(method)) {
            return true;
        }

        adminTokenGuard.requireValidToken(request);
        return true;
    }
}
