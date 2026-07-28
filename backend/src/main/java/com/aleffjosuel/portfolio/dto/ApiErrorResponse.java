package com.aleffjosuel.portfolio.dto;

import java.time.Instant;
import java.util.List;

/**
 * Single error envelope produced by GlobalExceptionHandler for every
 * error response, so the frontend only needs one error-parsing path.
 */
public record ApiErrorResponse(
        Instant timestamp,
        int status,
        String error,
        String message,
        String path,
        List<String> details
) {

    public static ApiErrorResponse of(int status, String error, String message, String path) {
        return of(status, error, message, path, List.of());
    }

    public static ApiErrorResponse of(int status, String error, String message, String path, List<String> details) {
        return new ApiErrorResponse(Instant.now(), status, error, message, path, details);
    }
}
