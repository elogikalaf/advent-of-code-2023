input = ''
with open('p1.txt') as f:
    input = f.readlines()

num_dict = {'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9}
inputDigits = []
for i, line in enumerate(input):
    int_digits = [int(char) for char in input[i] if char.isdigit()]
    inputDigits.append(int(f"{int_digits[0]}{int_digits[-1]}"))

print(sum((inputDigits)))

