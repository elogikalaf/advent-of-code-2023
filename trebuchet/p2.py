from signal import signal, SIGPIPE, SIG_DFL   
signal(SIGPIPE,SIG_DFL) 

input = ''
with open('p1.txt') as f:
    input = f.readlines()

num_dict = {'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9}
inputDigits = []
finalDigits = []
lineString = ''
onlyDigits = ''
for line in input:
    for char in line:
        if char.isdigit():
            onlyDigits+=char
        else:
            lineString+=char
            for num in (num_dict.keys()):
                if num in lineString:
                    onlyDigits+=str(num_dict[num])
                    lineString = lineString[-1]
    finalDigits.append(onlyDigits)
    lineString = ''
    onlyDigits = ''

count = 0
for i in finalDigits:
    count+=int((f"{i[0]}{i[-1]}"))

print(count)

