package com.tify.back.wish.dto;

import com.tify.back.gifthub.entity.Gift;
import java.util.ArrayList;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Getter
@Setter
public class AddWishDto {
    private List<Gift> giftItem;
    private Integer totalPrice;
    private String wishTitle;
    private String wishContent;
    private String category;
    private Integer categoryNumber;
    private Date startDate;
    private Date endDate;
    private Integer wishCard;
    private String addr1;
    private String addr2;
    private String zipCode;

}
