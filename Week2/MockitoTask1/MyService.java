package com.example;
//this class depends on ExternalApi
public class MyService {

    private ExternalApi api;// here we can see the dependance 

    public MyService(ExternalApi api) {
        this.api = api;
    }

    public String fetchData() {
        return api.getData();
    }
}
