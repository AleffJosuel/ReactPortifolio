package com.aleffjosuel.portfolio.dto;

import java.time.Instant;

public record ContactMessageDto(
        Long id,
        String name,
        String email,
        String message,
        boolean responded,
        Instant createdAt
) {
}
