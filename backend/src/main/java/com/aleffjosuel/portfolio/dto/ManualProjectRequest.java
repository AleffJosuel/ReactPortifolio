package com.aleffjosuel.portfolio.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.util.List;

public record ManualProjectRequest(
        @NotBlank @Size(max = 120) String title,
        @Size(max = 2000) String description,
        List<String> techStack,
        @Size(max = 500) String repoUrl,
        @Size(max = 500) String liveUrl,
        @Size(max = 500) String imageUrl
) {
}
