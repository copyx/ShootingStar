package com.samsung.org.dao;


import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.samsung.org.vo.User;


@Repository
public class UserDao {
	
	@Autowired
	private SqlSession sqlSession;

	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	public int updateUser(User user) {
		return sqlSession.update("updateUser", user);
	}
	
	public User selectUser(String e_mail) {
		return  sqlSession.selectOne("selectUser", e_mail);
	}
	
	public int deleteUser(String e_mail) {
		return sqlSession.delete("deleteUser", e_mail);
	}
	
	public int insertUser(User user) {
		return sqlSession.insert("insertUser", user);
	}
	
}
