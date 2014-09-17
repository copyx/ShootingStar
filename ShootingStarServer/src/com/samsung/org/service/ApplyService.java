package com.samsung.org.service;

import java.util.List;

import com.samsung.org.vo.Apply;

public interface ApplyService {
	
	public List<Apply> selectAllApply ();
	public Apply selectApply (String client);
	public int insertApply (Apply apply);
	public int updateApply (Apply apply);
	public int deleteApply (String client);
	
}
