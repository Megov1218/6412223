package com.example;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MyServiceTest {
  //used AAA pattern

    @Test
    public void testExternalApi() {
        // Arrange: Create mock
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);
        when(mockApi.getData()).thenReturn("Mock Data");
        // Act
        MyService service = new MyService(mockApi);
        String result = service.fetchData();
        // Assert
        assertEquals("Mock Data", result);
    }
}
