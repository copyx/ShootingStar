package com.samsung.org.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.samsung.org.model.SearchQuest;
import com.samsung.org.vo.Apply;
import com.samsung.org.vo.Quest;

@Repository
public class ApplyDao {
	@Autowired
	private SqlSession sqlSession;

	public List<Apply> selectAllApply() {
		List<Apply> qstList = sqlSession.selectList("selectAllApply");
		return qstList;
	}
	
	public int deleteApply(Apply apply) {
		return sqlSession.insert("deleteApply", apply);
	}
	
	public Apply selectApply(String client) {
		return sqlSession.selectOne("selectApply", client);
	}
	public int insertApply(Apply apply) {
		return sqlSession.insert("insertApply", apply);
	}
	
	public int updateApply(Apply apply) {
		return sqlSession.update("updateApply", apply);
	}
	
}
