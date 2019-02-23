

days_file = open("Person_16.txt",'r')  # CHOOSE FILE NAME HERE

data = days_file.read()

data = data[2:len(data)-2]

splitted = data.split("],[")

correct = 0
incorrect = 0
time = 0

for item in splitted:
	temp = item.split(",")
	if int(temp[6]) > 3000:
		print(temp[6])
	time += min(int(temp[6]),3000)
	if temp[10] == '"CORRECT"':
		correct += 1
	else:
		#print(temp[10])
		incorrect += 1
	#print(temp[10])
print("ACCURACY:")
print(round(1000*correct/(incorrect + correct))/10)
print("AVG ANSWER TIME:")
print(round(time/(correct + incorrect)))
