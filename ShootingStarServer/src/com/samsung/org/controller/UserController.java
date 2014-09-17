package com.samsung.org.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.samsung.org.model.logModel;
import com.samsung.org.service.QuestService;
import com.samsung.org.service.UserService;
import com.samsung.org.vo.User;

@Controller
@RequestMapping(value = "/user")
public class UserController {
	
	@Autowired
	UserService userService;
	
	// loginUser : select one user and distinguish
	@RequestMapping(value = "loginUser", method = RequestMethod.POST, 
	        		consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody String loginUser(@RequestBody logModel logmodel) {
		System.out.println("loginUser()");
		System.out.println("logmodel : " + logmodel);
		User user_ = userService.selectUser(logmodel.getE_mail());
		if(logmodel.getPass().equals(user_.getPass())){
			return "allow";
		} else {
			return "nato";
		}
	}
	
	// insertUser : select one user
	@RequestMapping(value = "insertUser", method = RequestMethod.POST, 
	        		consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody String insertUser(@RequestBody User user) {
		System.out.println("insertUser()");
		System.out.println("user : " + user);
		userService.insertUser(user);
		return "Registration is Complete.";
	}
	
	// updateUser : update user
	@RequestMapping(value = "updateUser", method = RequestMethod.POST, 
	        		consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody String updateUser(@RequestBody User user) {
		System.out.println("updateUser()");
		System.out.println("user : " + user);
		int success = userService.updateUser(user);
		if (success > 0) {
			return "Update is Complete.";
		} else if (success == 0) {
			return "nope";
		} else {
			return "error.";
		}
	}
	
	// deleteUser : delete one elements
	@RequestMapping(value = "/deleteUser", method = RequestMethod.GET)
	public @ResponseBody
	String delete(@RequestParam("e_mail") String e_mail) {
		System.out.println("deleteUser()");
		int ckeck = userService.deleteUser(e_mail);
		return "Delete is Complete.";
	}

}
