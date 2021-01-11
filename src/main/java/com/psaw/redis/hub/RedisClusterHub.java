package com.psaw.redis.hub;

import java.util.Map;

import org.springframework.stereotype.Component;

import redis.clients.jedis.Jedis;

@Component
public class RedisClusterHub implements RedisHub{

	private Jedis jedis;


	@Override
	public void initialize(String host) {

		
	}


	@Override
	public void addDataToRedis(Map<String, Object> lookupRequestObject) {
		// TODO Auto-generated method stub
		
	}


	@Override
	public String getDataFromRedis(Map<String, Object> lookupRequestObject) {
		// TODO Auto-generated method stub
		return null;
	}
}
