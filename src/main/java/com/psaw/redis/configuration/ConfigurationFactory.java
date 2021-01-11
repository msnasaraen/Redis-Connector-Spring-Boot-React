package com.psaw.redis.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

import com.psaw.redis.hub.RedisClusterHub;
import com.psaw.redis.hub.RedisHub;
import com.psaw.redis.hub.RedisSingleHub;

@Configuration
public class ConfigurationFactory {
 
	@Value("${redisHost}")
	private String host;
	
	@Value("${isCluster}")
	private boolean cluster;
	
	@Bean
	public InternalResourceViewResolver viewResolver() {
		InternalResourceViewResolver resolver = new InternalResourceViewResolver();
		resolver.setPrefix("/WEB-INF/jsp/");
		resolver.setSuffix(".jsp");
		return resolver;
	}
	
	@Bean 
	RedisHub redisHub() {
		if(cluster) {
			RedisHub hub = new RedisClusterHub();
			hub.initialize(host);
			return hub;
		}else {
			RedisHub hub = new RedisSingleHub();
			hub.initialize(host);
			return hub;
		}
	}
}
