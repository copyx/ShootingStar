package com.samsung.org.service;

import com.samsung.org.vo.User;

public interface UserService {
	
	public User selectUser (String e_mail);
	public int insertUser (User user);
	public int updateUser (User user);
	public int deleteUser (String e_mail);
	
}
