package com.psaw.redis.hub;

import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.stereotype.Component;

import redis.clients.jedis.Jedis;

@Component
public class RedisSingleHub implements RedisHub{

	private Jedis jedis;

	@Override
	public void initialize(String host) {
		jedis = new Jedis(host);
		
	}

	@Override
	public void addDataToRedis(Map<String, Object> details) {
		System.out.print(details);
		String dataType=details.get("dataType").toString();
		String key=details.get("key").toString();
		String value=details.get("value").toString();
		switch(dataType){
		case "String":
			addString(key,value);
			break;
		case "Set":
			addToSet(key,value);
			break;
		case "List":
			addToList(key,value);
			break;
		case "Hash":
			//addToHash(key,value);
			break;
			
			
		}
	}


	private void addToList(String key, String value) {
		jedis.lpush(key, value);
		
	}

	private void addToSet(String key, String value) {
		jedis.sadd(key, value);
		
	}

	private void addString(String key, String value) {
		jedis.set(key, value);
		
	}

	@Override
	public String getDataFromRedis(Map<String, Object> details) {
		System.out.print(details);
		String dataType=details.get("dataType").toString();
		String key=details.get("key").toString();
		String value=null;
		switch(dataType){
		case "String":
			value=getString(key);
			break;
		case "Set":
			value=getSet(key);
			break;
		case "List":
			value=getList(key);
			break;
		case "Hash":
			value=getHash(key);
			break;
		}
		return value;
	}

	private String getHash(String key) {
		return key;
	}

	private String getList(String key) {
		List<String> values = jedis.lrange( key, 0, -1 );
		
		String value="";
		for(int i=0;i<values.size();i++) {
			String val = values.get(i);
			if(!value.isEmpty()) {
				value=value+",";
			}
			value = value+val;
		}
		return value;
	}

	private String getSet(String key) {
		Set<String> values = jedis.smembers(key);
		Iterator<String> it = values.iterator();
		String value="";
		while(it.hasNext()) {
			if(!value.isEmpty()) {
				value=value+",";
			}
			value = value+it.next();
		}
		return value;
	}

	private String getString(String key) {
		return jedis.get(key);
		
	}
}
