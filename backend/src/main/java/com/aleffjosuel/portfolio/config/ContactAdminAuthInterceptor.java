package com.aleffjosuel.portfolio.config;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

/**
 * Guards /api/contact/**: the mirror image of ProjectsAdminAuthInterceptor.
 * POST (visitors submitting the form) and OPTIONS (CORS preflight) pass
 * through untouched; GET/PATCH/DELETE (reading and managing messages)
 * require a valid X-Admin-Token.
 */
@Component
@RequiredArgsConstructor
public class ContactAdminAuthInterceptor implements HandlerInterceptor {

    private final AdminTokenGuard adminTokenGuard;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        String method = request.getMethod();

        if ("POST".equalsIgnoreCase(method) || "OPTIONS".equalsIgnoreCase(method)) {
            return true;
        }

        adminTokenGuard.requireValidToken(request);
        return true;
    }
}
