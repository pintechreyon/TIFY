package com.tify.back.controller.users;
import com.tify.back.dto.users.SearchedUserDto;
import com.tify.back.model.users.User;
import com.tify.back.service.users.UserService;

import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {

	private final UserService userService;

	public UserController(UserService userService) {
		this.userService = userService;
	}

	@GetMapping("/searchuser/{nickname}")
	public List<SearchedUserDto> searchUserByNickname(@PathVariable String nickname, @RequestHeader("Authorization") String token) {
		String myId = userService.getUserid(token);
		List<SearchedUserDto> users = userService.searchUserByNickname(nickname,myId);

		return users;
	}

	@PostMapping("/tempuser")
	public User tempUser() {
		return userService.save(new User());
	}
}
