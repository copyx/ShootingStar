package com.samsung.org.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.samsung.org.dao.QuestDao;
import com.samsung.org.dao.UserDao;
import com.samsung.org.service.QuestService;
import com.samsung.org.vo.Quest;

@Service
public class QuestServiceImpl implements QuestService{
	
	@Autowired
	QuestDao questDao;
	
	@Override
	public List<Quest> selectAllQuest() {
		return questDao.selectAllQuest();
	}

	@Override
	public List<Quest> selectQuestByCategory(String category) {
		return questDao.selectQuestByCategory(category);
	}

	@Override
	public List<Quest> selectQuestByAreaNCity(String area, String city) {
		return questDao.selectQuestByAreaNCity(area, city);
	}

	@Override
	public int deleteQuest(String client) {
		return questDao.deleteQuest(client);
	}

	@Override
	public int updateQuest(Quest quest) {
		return questDao.updateQuest(quest);
	}

	@Override
	public int insertQuest(Quest quest) {
		return questDao.insertQuest(quest);
	}
	
	
	
}
