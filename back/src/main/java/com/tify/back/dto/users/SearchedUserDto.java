package com.tify.back.dto.users;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SearchedUserDto {
	private Long id;
	private String name;
	private String profileImg;
	private String nickname;
	private String email;
	private String state;
}