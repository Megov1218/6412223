package com.example.jwt.auth.service.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(@RequestHeader(value = "Authorization", required = false) String authHeader) {
        LOGGER.info("Start - /authenticate");

        Map<String, String> map = new HashMap<>();
        map.put("token", "");

        try {
            if (authHeader == null || !authHeader.startsWith("Basic ")) {
                throw new RuntimeException("Missing or invalid Authorization header");
            }

            String user = getUser(authHeader);
            String token = generateJwt(user);
            map.put("token", token);

        } catch (Exception e) {
            LOGGER.error("Error during authentication", e);
            map.put("error", e.getMessage());
        }

        LOGGER.info("End - /authenticate");
        return map;
    }

    private String getUser(String authHeader) {
        String base64Credentials = authHeader.substring("Basic ".length());
        byte[] decodedBytes = Base64.getDecoder().decode(base64Credentials);
        String decodedString = new String(decodedBytes);
        String[] credentials = decodedString.split(":");

        if (credentials.length != 2) {
            throw new RuntimeException("Invalid basic auth format");
        }

        return credentials[0]; 
    }

    private String generateJwt(String user) {
        JwtBuilder builder = Jwts.builder()
                .setSubject(user)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1200000)) // 20 mins
                .signWith(SignatureAlgorithm.HS256, "secretkey");

        return builder.compact();
    }
}
