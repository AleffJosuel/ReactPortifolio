package com.aleffjosuel.portfolio.client;

import com.aleffjosuel.portfolio.dto.GithubRepoDto;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;

import java.util.List;

@Component
public class GithubClient {

    private final RestClient restClient;

    public GithubClient() {
        this.restClient = RestClient.builder()
                .baseUrl("https://api.github.com")
                .defaultHeader("User-Agent", "portfolio-app")
                .defaultHeader("Accept", "application/vnd.github+json")
                .build();
    }

    public List<GithubRepoDto> fetchRepos(String username) {
        GithubRepoDto[] repos = restClient.get()
                .uri("/users/{username}/repos?sort=updated&per_page=100", username)
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .body(GithubRepoDto[].class);

        return repos == null ? List.of() : List.of(repos);
    }
}
