_year_ = 2018
_auth_ = 'Per Jaakonantti'

#FOUND ALMOST ALL OF THIS WHILE GOOGLING
#DO NOT UNDERESTIMATE THE GOOGLE /L

from tkinter import *
from tkinter.ttk import Progressbar
from tkinter import ttk

import csv # Så vi kan spara data som CSV filer.


window = Tk()
window.title("DM2350 TEST PROGRAM")
window.geometry('1000x500')

style = ttk.Style()
style.theme_use('default')
style.configure("black.Horizontal.TProgressbar", background='black')

var = StringVar()
label = Label( window, textvariable=var, pady = 20)
var.set("Question 1: Are you colour blind?")
label.pack()

yes = StringVar()
no = StringVar()
buttonYes = Button(window, textvariable=yes, pady = 20, padx = 20)
buttonNo = Button(window, textvariable=no, pady = 20, padx = 20)
yes.set("Yes")
no.set("No")
buttonNo.pack()
buttonYes.pack()

window.mainloop()
