package com.samsung.org.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.samsung.org.dao.ApplyDao;
import com.samsung.org.service.ApplyService;
import com.samsung.org.vo.Apply;

@Service
public class ApplyServiceImpl implements ApplyService{
	
	@Autowired
	ApplyDao applydao;
	
	@Override
	public List<Apply> selectAllApply() {
		return applydao.selectAllApply();
	}

	@Override
	public Apply selectApply(String client) {
		return applydao.selectApply(client);
	}

	@Override
	public int insertApply(Apply apply) {
		return applydao.insertApply(apply);
	}

	@Override
	public int updateApply(Apply apply) {
		return 0;
	}

	@Override
	public int deleteApply(String client) {
		return 0;
	}
	
	
	
	
	
}
