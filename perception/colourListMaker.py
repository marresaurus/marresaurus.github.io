_auth_ = "Per Jaakonantti"
_year_ = 2018

from random import randint
import csv

baseColours = ['brightRed','darkRed']
#allColours = ['redPink', 'redRed', 'orangeOrange', 'yellowYellow', 'yellowGreen', 'greenGreen', 'turquiseTurquise', 'turquiseBlue', 'blueBlue', 'purplePurple', 'pinkPink']
allColours = ['redRed', 'yellowYellow', 'greenGreen', 'turquiseTurquise', 'blueBlue', 'pinkPink']

alternatives = ['same', 'different','same', 'different']
numColours = len(allColours)

colourCombinationList = []

for k in range(0,4):
	for i in range(0,numColours):
		for  j in range(0,2):
			tempList = list()
			tempList.append(baseColours[j])
			tempList.append(allColours[i])
			tempList.append(alternatives[k])
			colourCombinationList.append(tempList)

print(colourCombinationList)


with open('list_colours.csv', 'w', newline='') as csvfile:
    spamwriter = csv.writer(csvfile, delimiter=',',
                            quotechar='|', quoting=csv.QUOTE_MINIMAL)
    for item in colourCombinationList:
    	spamwriter.writerow(item)
