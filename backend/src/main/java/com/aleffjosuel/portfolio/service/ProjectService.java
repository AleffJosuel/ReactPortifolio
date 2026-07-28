package com.aleffjosuel.portfolio.service;

import com.aleffjosuel.portfolio.dto.ManualProjectRequest;
import com.aleffjosuel.portfolio.dto.ProjectDto;
import com.aleffjosuel.portfolio.entity.ManualProjectEntity;
import com.aleffjosuel.portfolio.exception.NotFoundException;
import com.aleffjosuel.portfolio.mapper.ProjectMapper;
import com.aleffjosuel.portfolio.repository.ManualProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
public class ProjectService {

    private final GithubService githubService;
    private final ManualProjectRepository manualProjectRepository;
    private final ProjectMapper projectMapper;

    public List<ProjectDto> getAllProjects() {
        Stream<ProjectDto> githubProjects = githubService.getRepos().stream()
                .map(projectMapper::fromGithub);

        Stream<ProjectDto> manualProjects = manualProjectRepository.findAll().stream()
                .map(projectMapper::fromEntity);

        return Stream.concat(githubProjects, manualProjects)
                .sorted(Comparator.comparing(ProjectDto::updatedAt).reversed())
                .toList();
    }

    public ProjectDto createManualProject(ManualProjectRequest request) {
        ManualProjectEntity entity = ManualProjectEntity.builder()
                .title(request.title())
                .description(request.description())
                .techStack(request.techStack())
                .repoUrl(request.repoUrl())
                .liveUrl(request.liveUrl())
                .imageUrl(request.imageUrl())
                .build();

        return projectMapper.fromEntity(manualProjectRepository.save(entity));
    }

    public ProjectDto updateManualProject(Long id, ManualProjectRequest request) {
        ManualProjectEntity entity = manualProjectRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Manual project not found: " + id));

        entity.setTitle(request.title());
        entity.setDescription(request.description());
        entity.setTechStack(request.techStack());
        entity.setRepoUrl(request.repoUrl());
        entity.setLiveUrl(request.liveUrl());
        entity.setImageUrl(request.imageUrl());

        return projectMapper.fromEntity(manualProjectRepository.save(entity));
    }

    public void deleteManualProject(Long id) {
        if (!manualProjectRepository.existsById(id)) {
            throw new NotFoundException("Manual project not found: " + id);
        }
        manualProjectRepository.deleteById(id);
    }
}
