package com.aleffjosuel.portfolio.mapper;

import com.aleffjosuel.portfolio.dto.GithubRepoDto;
import com.aleffjosuel.portfolio.dto.ProjectDto;
import com.aleffjosuel.portfolio.entity.ManualProjectEntity;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.util.List;
import java.util.stream.Stream;

/**
 * Single place that knows how a manual project (DB entity) and a GitHub
 * repo (external API shape) both become a ProjectDto, so the two sources
 * never drift into two slightly different mapping implementations.
 */
@Component
public class ProjectMapper {

    public ProjectDto fromEntity(ManualProjectEntity entity) {
        return new ProjectDto(
                "manual-" + entity.getId(),
                "manual",
                entity.getTitle(),
                entity.getDescription(),
                entity.getTechStack() == null ? List.of() : entity.getTechStack(),
                entity.getRepoUrl(),
                entity.getLiveUrl(),
                entity.getImageUrl(),
                null,
                entity.getCreatedAt()
        );
    }

    public ProjectDto fromGithub(GithubRepoDto repo) {
        List<String> techStack = Stream.concat(
                        Stream.ofNullable(repo.language()),
                        repo.topics() == null ? Stream.<String>empty() : repo.topics().stream()
                )
                .distinct()
                .toList();

        return new ProjectDto(
                "github-" + repo.id(),
                "github",
                repo.name(),
                repo.description(),
                techStack,
                repo.htmlUrl(),
                null,
                null,
                repo.stargazersCount(),
                repo.updatedAt() == null ? Instant.EPOCH : repo.updatedAt()
        );
    }
}
