tickets = [[1]+[nums.split() for nums in line[9:].split(" | ")] for line in open( r"day4.txt")]
print(tickets)
sumTickets = 0
for i in range( len(tickets) ):
    wins = 0
    print(tickets[2][0])
    sumTickets += tickets[i][0]
    for win_num in tickets[i][1]:
        if win_num in tickets[i][2]:
            wins += 1
    for j in range(i+1, i+wins+1):
        tickets[j][0] += tickets[i][0]    



