# test_hello_world.py

from hello_world import greet

def test_greet():
    # Arrange
    name = "Alice"
    expected = "Hello, Alice! Welcome to coding!"
    
    # Act
    result = greet(name)
    
    # Assert
    assert result == expected
