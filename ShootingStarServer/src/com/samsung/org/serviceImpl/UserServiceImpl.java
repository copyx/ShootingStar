package com.samsung.org.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.samsung.org.dao.QuestDao;
import com.samsung.org.dao.UserDao;
import com.samsung.org.service.QuestService;
import com.samsung.org.service.UserService;
import com.samsung.org.vo.Quest;
import com.samsung.org.vo.User;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	UserDao userDao;

	@Override
	public int updateUser(User user) {
		return userDao.updateUser(user);
	}

	@Override
	public int deleteUser(String e_mail) {
		return userDao.deleteUser(e_mail);
	}

	@Override
	public User selectUser(String e_mail) {
		return userDao.selectUser(e_mail);
	}

	@Override
	public int insertUser(User user) {
		return userDao.insertUser(user);
	}


	
	
}
