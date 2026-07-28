package com.aleffjosuel.portfolio.service;

import com.aleffjosuel.portfolio.client.GithubClient;
import com.aleffjosuel.portfolio.config.AppProperties;
import com.aleffjosuel.portfolio.dto.GithubRepoDto;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Fetches the owner's public repos and caches them for a short TTL
 * (see app.github.cache-ttl-minutes). GitHub's unauthenticated REST API
 * allows only 60 requests/hour per IP; without caching, a handful of
 * portfolio visitors hitting GET /api/projects could exhaust that quota.
 */
@Service
@RequiredArgsConstructor
public class GithubService {

    private final GithubClient githubClient;
    private final AppProperties appProperties;

    @Cacheable("githubRepos")
    public List<GithubRepoDto> getRepos() {
        String username = appProperties.github().username();

        return githubClient.fetchRepos(username).stream()
                .filter(repo -> !repo.fork())
                .filter(repo -> !repo.name().equalsIgnoreCase(username))
                .toList();
    }
}
