package com.PMS.PharmacyManagementSystem.controllers;

import com.PMS.PharmacyManagementSystem.exceptions.ResourceNotFoundException;
import com.PMS.PharmacyManagementSystem.exceptions.UnauthorizedException;
import com.PMS.PharmacyManagementSystem.models.Employee;
import com.PMS.PharmacyManagementSystem.repository.EmployeeRepository;
import com.PMS.PharmacyManagementSystem.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.bind.DatatypeConverter;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;

@RestController
@CrossOrigin
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/employees")
    public ResponseEntity<List<Employee>> getAllEmployees() {
        List<Employee> employees = employeeService.getAllEmployees();
        return ResponseEntity.ok().body(employees);
    }

    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee) {

        String encryptedPassword = employee.getPassword();

        try {
            encryptedPassword = hashPassword(employee.getPassword());
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        employee.setPassword(encryptedPassword);
        return employeeRepository.save(employee);
    }

    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable(value = "id") Long employeeId,
                                                   @RequestBody Employee employeeDetails) throws ResourceNotFoundException {
        Employee updatedEmployee = employeeService.updateEmployee(employeeId, employeeDetails);
        return ResponseEntity.ok(updatedEmployee);
    }


    @DeleteMapping("employees/{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable("id") Long id) {
        try {
            employeeService.deleteEmployeeById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/login")
    public Employee login(@RequestBody Employee employee) {
        String email = employee.getEmail();
        String password = employee.getPassword();

        Employee authenticatedEmployee = employeeRepository.findByEmailAndPassword(email, password);
        if (authenticatedEmployee != null) {
            return authenticatedEmployee;
        } else {
            throw new UnauthorizedException("Invalid email or password");
        }
    }

    private String hashPassword(String password) throws NoSuchAlgorithmException {
        MessageDigest messageDigest = MessageDigest.getInstance("MD5");
        messageDigest.update(password.getBytes());
        byte[] digest = messageDigest.digest();
        String hash = DatatypeConverter.printHexBinary(digest).toUpperCase();
        return hash;
    }
}
