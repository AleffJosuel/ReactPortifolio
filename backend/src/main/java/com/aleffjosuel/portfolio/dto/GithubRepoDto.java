package com.aleffjosuel.portfolio.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.time.Instant;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public record GithubRepoDto(
        Long id,
        String name,
        String description,
        @JsonProperty("html_url") String htmlUrl,
        String language,
        List<String> topics,
        @JsonProperty("stargazers_count") Integer stargazersCount,
        boolean fork,
        @JsonProperty("updated_at") Instant updatedAt
) {
}
