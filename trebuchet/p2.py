from signal import signal, SIGPIPE, SIG_DFL   
signal(SIGPIPE,SIG_DFL) 

input = ''
with open('p1.txt') as f:
    input = f.readlines()

num_dict = {'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9}
inputDigits = []
lineString = ''
for line in input:
    for char in line:
        lineString+=char
        for num in list(num_dict.keys()):
            if lineString.endswith(num):
                lineString = lineString.replace(num, f"{str(num_dict[num])}{num[-1]}")
    inputDigits.append(lineString.strip())
    lineString = ''
finalDigits = []
for fixedLine in inputDigits:
    onlyDigits = [char for char in fixedLine if char.isdigit()]
    finalDigits.append(int(f"{onlyDigits[0]}{onlyDigits[-1]}"))

for i in finalDigits:
    print(i)
print(sum(finalDigits))

