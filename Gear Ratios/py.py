from collections import defaultdict
import sys

Coord = tuple[int,int]

def parsegrid(lines: list[str]) -> tuple[dict[Coord,int],defaultdict[Coord,str]]:
    nums = dict()
    symbols = defaultdict(str)
    for y, line in enumerate(lines):
        num = ''
        for x, c in enumerate(line):
            if c.isdigit():
                num = num + c
            elif num:
                nums[(x-len(num),y)] = int(num)
                num = ''
            
            if c != '.' and not c.isdigit():
                symbols[(x,y)] = c
        if num:
            nums[(len(line)-len(num),y)] = int(num)
            num = ''
    return (nums,symbols)

def findparts(nums: dict[Coord,int], symbols: defaultdict[Coord,str]) -> list[int]:
    parts = []
    for x,y in nums:
        v = nums[(x,y)]
        # search for symbols around it
        for i in range(-1, len(str(v))+1):
            if symbols[(x + i, y - 1)]:
                parts.append(v)
            elif symbols[(x + i, y)]:
                parts.append(v)
            elif symbols[(x + i, y + 1)]:
                parts.append(v)
    for i in parts:
        print(i)
    return parts
    


def part1(lines: list[str]):
    nums,symbols = parsegrid(lines)
    parts = findparts(nums,symbols)
    print('part 1:', sum(parts))


if __name__ == '__main__':
    with open("day2.txt") as file:
        lines = [line.rstrip() for line in file]  
    part1(lines)
