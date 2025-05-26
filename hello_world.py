# hello_world.py

def greet(name):
    """
    Function to create a personalized greeting
    """
    return f"Hello, {name}! Welcome to coding!"

def main():
    name = input("What's your name? ")
    message = greet(name)
    print(message)

if __name__ == "__main__":
    main()
