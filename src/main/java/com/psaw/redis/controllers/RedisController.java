package com.psaw.redis.controllers;

import java.util.HashMap;
import java.util.Map;

import javax.xml.ws.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.psaw.redis.hub.RedisHub;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/redis")
public class RedisController {

	@Autowired
	RedisHub redisHub;
	
	@PostMapping
	@RequestMapping("/add")
	public ResponseEntity<Map> addData(@RequestBody Map<String, Object> lookupRequestObject) {
		Map<String,String> value = new HashMap<>();
		redisHub.addDataToRedis(lookupRequestObject);
		value.put("Success", "true");
		return ResponseEntity.ok().body(value);
	}
	
	@GetMapping
	@RequestMapping("/get")
	public ResponseEntity<Map> getData(@RequestBody Map<String, Object> lookupRequestObject) {
		Map<String,String> value = new HashMap<>();
		String values = redisHub.getDataFromRedis(lookupRequestObject);
		value.put("value", values);
		return ResponseEntity.ok().body(value);
	}
}
