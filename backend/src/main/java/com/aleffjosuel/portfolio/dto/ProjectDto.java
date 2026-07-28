package com.aleffjosuel.portfolio.dto;

import java.time.Instant;
import java.util.List;

/**
 * Unified shape for a project card, regardless of whether it came from
 * GitHub or was added manually. Keeping one shape for both sources means
 * the frontend never has to branch on where a project came from.
 */
public record ProjectDto(
        String id,
        String source,
        String title,
        String description,
        List<String> techStack,
        String repoUrl,
        String liveUrl,
        String imageUrl,
        Integer stars,
        Instant updatedAt
) {
}
