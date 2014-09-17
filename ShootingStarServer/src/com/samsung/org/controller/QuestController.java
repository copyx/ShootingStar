package com.samsung.org.controller;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.samsung.org.service.QuestService;
import com.samsung.org.vo.Quest;

@Controller
@RequestMapping(value = "/Quest")
public class QuestController {

	@Autowired
	QuestService questService;
	
//	 selectAll : select all
	@RequestMapping(value = "/selectAllQuest", method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody
	List<Quest> selectAllQuest(@RequestParam("client") String client) {
		System.out.println("selectAll()");
		return questService.selectAllQuest();
	}
	
//	 select : select one elemsts
	@RequestMapping(value = "/selectQuestByCategory", method = RequestMethod.GET,
				    produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody
	List<Quest> selectQuestByCategory(@RequestParam("Category") String category) {
		System.out.println("selectQuestByCategory()");
		return questService.selectQuestByCategory(category);
	}
	
//	 select : select one elemsts
	@RequestMapping(value = "/selectQuestByAreaNCity", method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody
	List<Quest> selectQuestByAreaNCity(@RequestParam("Area") String area, @RequestParam("City") String city) {
		System.out.println("selectQuestByAreaNCity()");
		return questService.selectQuestByAreaNCity(area, city);
	}
	
//	 delete : delete one elements
	@RequestMapping(value = "/deleteQuest", method = RequestMethod.GET)
	public @ResponseBody
	String delete(@RequestParam("client") String client) {
		System.out.println("deleteQuest()");
		questService.deleteQuest(client);
		return "Delete is Complete";
	}

//	 update : update one elements
	@RequestMapping(value = "updateQuest", method = RequestMethod.POST, 
				    consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody
	String update(@RequestBody Quest quest) {
		System.out.println("updateQuest()");
		System.out.println("Quest : " + quest);
		int success = 0;
		success = questService.updateQuest(quest);
		if (success > 0) {
			return "Update is complete.";
		} else if (success == 0) {
			return "nope                      .";
		} else {
			return "error.";
		}
	}
	
//	 insert : insert one elements
	@RequestMapping(value = "insertQuest", method = RequestMethod.POST, 
			        consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody String insert(@RequestBody Quest quest) {
		System.out.println("insertQuest()");
		System.out.println("Quest : " + quest);
		questService.insertQuest(quest);
		return "Registration Complete.";
	}
	
}
