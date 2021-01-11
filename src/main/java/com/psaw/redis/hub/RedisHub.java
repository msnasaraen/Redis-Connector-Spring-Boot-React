package com.psaw.redis.hub;

import java.util.Map;

public interface RedisHub {
	
	public void initialize(String host);

	public void addDataToRedis(Map<String, Object> lookupRequestObject);

	public String getDataFromRedis(Map<String, Object> lookupRequestObject);
}
