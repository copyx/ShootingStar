package com.samsung.org.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.samsung.org.service.ApplyService;
import com.samsung.org.vo.Apply;

@Controller
@RequestMapping(value = "/apply")
public class ApplyController {
	
	@Autowired
	ApplyService applyService;
	
	
	// insertApply : select one Apply
	@RequestMapping(value = "insertApply", method = RequestMethod.POST, 
	        		consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody String insertApply(@RequestBody Apply apply) {
		System.out.println("insertApply()");
		System.out.println("apply : " + apply);
		applyService.insertApply(apply);
		return "Registration is Complete.";
	}
	
	// updateApply : update Apply
	@RequestMapping(value = "updateApply", method = RequestMethod.POST, 
	        		consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody String updateApply(@RequestBody Apply apply) {
		System.out.println("updateApply()");
		System.out.println("apply : " + apply);
		int success = applyService.updateApply(apply);
		if (success > 0) {
			return "Update is Complete.";
		} else if (success == 0) {
			return "nope";
		} else {
			return "error.";
		}
	}
	
	// deleteApply : delete one elements
	@RequestMapping(value = "/deleteApply", method = RequestMethod.GET)
	public @ResponseBody
	String delete(@RequestParam("client") String client) {
		System.out.println("deleteApply()");
		int ckeck = applyService.deleteApply(client);
		return "Delete is Complete.";
	}
	
	// selectApply : delete one elements
	@RequestMapping(value = "/selectApply", method = RequestMethod.GET,
		    	    produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody
	Apply select(@RequestParam("client") String client) {
		System.out.println("selectApply()");
		return applyService.selectApply(client);
	}
	
	// selectAllApply : delete one elements
	@RequestMapping(value = "/selectAllApply", method = RequestMethod.GET,
		    	    produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody
	List<Apply> select() {
		System.out.println("selectAllApply()");
		return applyService.selectAllApply();
	}
}
