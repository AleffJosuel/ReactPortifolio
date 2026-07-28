package com.aleffjosuel.portfolio.service;

import com.aleffjosuel.portfolio.dto.ContactMessageDto;
import com.aleffjosuel.portfolio.dto.ContactRequestDto;
import com.aleffjosuel.portfolio.entity.ContactMessageEntity;
import com.aleffjosuel.portfolio.exception.NotFoundException;
import com.aleffjosuel.portfolio.repository.ContactMessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ContactService {

    private final ContactMessageRepository contactMessageRepository;

    public void submit(ContactRequestDto request) {
        ContactMessageEntity entity = ContactMessageEntity.builder()
                .name(request.name())
                .email(request.email())
                .message(request.message())
                .build();

        contactMessageRepository.save(entity);
    }

    public List<ContactMessageDto> getAllMessages() {
        return contactMessageRepository.findAllByOrderByCreatedAtDesc().stream()
                .map(this::toDto)
                .toList();
    }

    public ContactMessageDto setResponded(Long id, boolean responded) {
        ContactMessageEntity entity = contactMessageRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Contact message not found: " + id));

        entity.setResponded(responded);
        return toDto(contactMessageRepository.save(entity));
    }

    public void deleteMessage(Long id) {
        if (!contactMessageRepository.existsById(id)) {
            throw new NotFoundException("Contact message not found: " + id);
        }
        contactMessageRepository.deleteById(id);
    }

    private ContactMessageDto toDto(ContactMessageEntity entity) {
        return new ContactMessageDto(
                entity.getId(),
                entity.getName(),
                entity.getEmail(),
                entity.getMessage(),
                entity.isResponded(),
                entity.getCreatedAt()
        );
    }
}
