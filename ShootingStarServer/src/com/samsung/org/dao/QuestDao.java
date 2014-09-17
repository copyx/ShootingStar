package com.samsung.org.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.samsung.org.model.SearchQuest;
import com.samsung.org.vo.Quest;

@Repository
public class QuestDao {
	@Autowired
	private SqlSession sqlSession;

	public List<Quest> selectAllQuest() {
		List<Quest> qstList = sqlSession.selectList("selectAllQuest");
		return qstList;
	}
	
	public List<Quest> selectQuestByAreaNCity(String area, String city) {
		SearchQuest sqst = new SearchQuest();
		sqst.setArea(area);
		sqst.setCity(city);
		List<Quest> qstList = sqlSession.selectList("selectQuestByAreaNCity", sqst);
		return qstList;
	}
	
	public List<Quest> selectQuestByCategory(String category) {
		List<Quest> qstList = sqlSession.selectList("selectQuestByCategory", category);
		return qstList;
	}
	public int deleteQuest(String client) {
		return sqlSession.delete("deleteQuest", client);
	}
	
	public int insertQuest(Quest quest) {
		return sqlSession.insert("insertQuest", quest);
	}
	
	public int updateQuest(Quest quest) {
		return sqlSession.update("updateQuest", quest);
	}
	
}
