package com.tify.back.model.pay;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.tify.back.model.gifthub.Gift;
import com.tify.back.model.gifthub.Order;
import com.tify.back.model.wish.Thkcard;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.LAZY;

@Entity
@Table(name = "pay")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Pay {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="pay_id")
    private Long pay_id;

    private String amount;
    private String celeb_img_url;
    private String celeb_from;
    private String celeb_tel;
    private String celeb_content;

    @Column(length = 3000)
    private String pay_type;

    @JsonIgnore
    @ManyToOne(fetch=LAZY)
    @JoinColumn(name="id") //변수명에 맞춰야함
    private Gift gift;
    private Long user_id;
    private LocalDateTime createTime;

    @OneToOne(mappedBy= "pay")
    @JsonIgnore
    private Thkcard thkcardList;
}
