package com.samsung.org.service;

import java.util.List;

import com.samsung.org.vo.Quest;

public interface QuestService {
	
	public List<Quest> selectAllQuest();
	public List<Quest> selectQuestByCategory(String category);
	public List<Quest> selectQuestByAreaNCity(String area, String city);
	public int deleteQuest(String client);
	public int updateQuest(Quest quest);
	public int insertQuest(Quest quest);
}
