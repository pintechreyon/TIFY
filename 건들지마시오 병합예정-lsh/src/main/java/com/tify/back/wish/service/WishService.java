package com.tify.back.wish.service;


import com.tify.back.wish.dto.AddWishDto;
import com.tify.back.wish.entity.Wish;
import com.tify.back.wish.repository.WishRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class WishService {
    private final WishRepository wishRepository;
    // 위시 데이터 저장 서비스
    public boolean saveWish(AddWishDto dto) {
        Wish wishEntity = new Wish();
        wishEntity.setGiftItems(dto.getGiftItem());
        wishEntity.setTotPrice(dto.getTotalPrice());
        wishEntity.setTitle(dto.getWishTitle());
        wishEntity.setContent(dto.getWishContent());
        wishEntity.setCategory(dto.getCategory());
        wishEntity.setCategoryNumber(dto.getCategoryNumber());
        wishEntity.setStartDate(dto.getStartDate());
        wishEntity.setEndDate(dto.getEndDate());
        wishEntity.setCardImageCode(dto.getWishCard());
        wishEntity.setAddr1(dto.getAddr1());
        wishEntity.setAddr2(dto.getAddr2());
        wishEntity.setZipCode(dto.getZipCode());

        // 실제 데이터베이스에 데이터저장
        try {
            wishRepository.save(wishEntity);
            return true;
        } catch (Exception ex) {
            return false;
        }
    }
    public Wish wishDetailId(Long wishId){
        if(wishRepository.findById(wishId).isPresent()){
            return wishRepository.findById(wishId).get();
        }else{
            return null;
        }

    }

}

