package com.mts.service.serviceImpl;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mts.entities.Admission;
import com.mts.exception.AdmissionNotGrantedException;
import com.mts.repository.IAdmissionRepository;
import com.mts.service.IAdmissionService;

@Service
public class AdmissionServiceImpl implements IAdmissionService{

	@Autowired
	IAdmissionRepository repo;
	
	@Override
	public Admission addAdmission(Admission admission) {
		return repo.save(admission);
	}

	@Override
	public Admission updateAdmission(Admission admission) throws AdmissionNotGrantedException {
		Admission admission1=repo.findById(admission.getAdmissionId()).orElseThrow(()->new AdmissionNotGrantedException("Admission details for given Id not found !"));
		admission1.setCourseId(admission.getCourseId());
		admission1.setApplicantId(admission.getApplicantId());
		admission1.setAdmissionDate(admission.getAdmissionDate());
		admission1.setStatus(admission.getStatus());
		return admission1;
	}

	@Override
	public Admission cancelAdmission(int admissionId) throws AdmissionNotGrantedException {
		Admission admission1=repo.findById(admissionId).orElseThrow(()->new AdmissionNotGrantedException("Admission Id not found !"));
		repo.delete(admission1);
		return admission1;
	}

	@Override
	public List<Admission> showAllAdmissionsByCourseId(int courseId) {
		return repo.findByCourseId(courseId);
	}

	@Override
	public List<Admission> showAllAdmissionsByDate(LocalDate admissionDate) {
		return repo.findByadmissionDate(admissionDate);
	}

}
