package com.aleffjosuel.portfolio.controller;

import com.aleffjosuel.portfolio.dto.ManualProjectRequest;
import com.aleffjosuel.portfolio.dto.ProjectDto;
import com.aleffjosuel.portfolio.service.ProjectService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * GET is public. POST/PUT/DELETE are gated by AdminAuthInterceptor
 * (checks the X-Admin-Token header) registered against this path in
 * WebMvcConfig.
 */
@RestController
@RequestMapping("/api/projects")
@RequiredArgsConstructor
public class ProjectController {

    private final ProjectService projectService;

    @GetMapping
    public List<ProjectDto> getAllProjects() {
        return projectService.getAllProjects();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ProjectDto createProject(@Valid @RequestBody ManualProjectRequest request) {
        return projectService.createManualProject(request);
    }

    @PutMapping("/{id}")
    public ProjectDto updateProject(@PathVariable Long id, @Valid @RequestBody ManualProjectRequest request) {
        return projectService.updateManualProject(id, request);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteProject(@PathVariable Long id) {
        projectService.deleteManualProject(id);
    }
}
