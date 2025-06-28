package com.example;

import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Test;

public class MyServiceTest {

    @Test
    public void testVerifyInteraction() {
        // Arrange: Create mock
        ExternalApi mockApi = mock(ExternalApi.class);
        MyService service = new MyService(mockApi);

        // Act: Call method
        service.fetchData();

        // Assert: Verify interaction
        verify(mockApi).getData();
    }
}
