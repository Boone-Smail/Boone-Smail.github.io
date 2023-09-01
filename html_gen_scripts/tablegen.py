# The purpose of this script is to generate a text
# file with the desired times that can be plugged
# directly into my index.html file

def main():
    write = open('table.txt', 'w')
    output = ""
    c = 8
    EMPTYTD = "\n\t<td></td>"
    pmSwap = False
    while (c != 7):
        output += "<tr>\n\t<td>"
        output += str(c) + ":00"
        if (pmSwap):
            output += "PM"
        else:
            output += "AM"
        
        output += "</td>" + 7*EMPTYTD +"\n</tr>\n"

        output += "<tr>\n\t<td>"
        output += str(c) + ":30"
        if (pmSwap):
            output += "PM"
        else:
            output += "AM"
        
        output += "</td>" + 7*EMPTYTD +"\n</tr>\n"

        c+=1

        if (c == 12):
            pmSwap = True

        if (c > 12):
            c -= 12

    write.write(output)
    write.close()      

main()