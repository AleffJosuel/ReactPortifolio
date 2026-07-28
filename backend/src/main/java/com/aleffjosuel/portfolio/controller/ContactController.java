package com.aleffjosuel.portfolio.controller;

import com.aleffjosuel.portfolio.dto.ContactMessageDto;
import com.aleffjosuel.portfolio.dto.ContactRequestDto;
import com.aleffjosuel.portfolio.service.ContactService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * POST is public (visitors submitting the form). GET/PATCH/DELETE are
 * gated by ContactAdminAuthInterceptor -- the mirror image of
 * ProjectController, where GET is public and mutations are gated.
 */
@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
public class ContactController {

    private final ContactService contactService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void submitContact(@Valid @RequestBody ContactRequestDto request) {
        contactService.submit(request);
    }

    @GetMapping
    public List<ContactMessageDto> getAllMessages() {
        return contactService.getAllMessages();
    }

    @PatchMapping("/{id}")
    public ContactMessageDto updateRespondedStatus(@PathVariable Long id, @RequestParam boolean responded) {
        return contactService.setResponded(id, responded);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteMessage(@PathVariable Long id) {
        contactService.deleteMessage(id);
    }
}
