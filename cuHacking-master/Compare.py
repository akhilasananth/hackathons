def compare():
    notDone = True
    line = 1

    fileC = open("coach.txt", "r")
    fileT = open("trainee.txt", "r")

    roll = 0
    pitch = 0
    yaw = 0

    string = ""

    while(notDone):
        rollC = fileC.readline().strip().replace(" ", "")
        if rollC == '':
            notDone = False
        else:
            rollCc = int(rollC)
          #  print("rollc", int(rollC))
    

        pitchC = fileC.readline().strip().replace(" ", "")
        if pitchC == '':
            notDone = False
          #  print("didnt get here", pitchC)
        else:
            pitchCc = int(pitchC)
            #print("pitchC", int(pitchC))


        yawC = fileC.readline().strip().replace(" ", "")
        if yawC == '':
            notDone = False
        else:
            yawCc = int(yawC)
           # print("yawC", int(yawC))


        rollT = fileT.readline().strip().replace(" ", "")
        if rollC == '':
            notDone = False
        else:
            rollTc = int(rollT)
        #print("rollT", int(rollT))


        pitchT = fileT.readline().strip().replace(" ", "")
        if pitchT == '':
            notDone = False
        else:
            pitchTc = int(pitchT)
       # print("pitchT", int(pitchT))


        yawT = fileT.readline().strip().replace(" ", "")
        if yawT == '':
            notDone = False
        else:
            yawTc = int(yawT)
        #rint("yawT", int(yawT))
        
        roll = (roll + (rollCc - rollTc))/2
        pitch = (pitch + (pitchCc - pitchTc))/2
        yaw = (yaw + (yawCc - yawTc))/2
    

        line = line + 3


    accuracy = (18 - (roll + pitch + yaw)/3)/18
    string  += "You are " + str(accuracy) + "% inaccurate from the coach. "

    if roll == 0:
        string += "You are perfect on your twist. "
    else:
        if roll > 0:
            string += "you are rolling your wrist too much to the right. "
        else:
            string += "you are rolling your wrist too much to the left. "

    if pitch == 0:
        string += "You are perfect on your swing. "
    else:
        if pitch > 0:
           string += "you are swinging too little. "
        else:
           string += "you are swinging too much. "
    
    if yaw == 0:
        string += "You are on point."
    else:
        if yaw > 0:
           string += "you are too far right."
        else:
           string += "you are too far left."


    return string
        
