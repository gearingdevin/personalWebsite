# import request, error, parse
import wemoCommands as wemo
import json
import sys

#Read data from stdin
def read_in():
    lines = sys.stdin.readlines()
    # Since our input would only be having one line, parse our JSON data from that
    return json.loads(lines[0])

def main():
    #get our data as an array from read_in()
    lines = read_in()

    # Sum  of all the items in the providen array
    total_sum_inArray = 0
    for item in lines:
        # total_sum_inArray += item
        resultName = wemo.Off(item)
        # resultStatus = wemo.Status(item)
        # { name:'John' }
        # resultMerge = resultName+' '+resultStatus
        if resultName != None:
            # print "connection succsess"
            print resultName
            return
        else:
            # print "connection failed"
            print resultName
            return

    #return the sum to the output stream
    # result = wemo.Name('192.168.129.33')
    # if result != None:
    #     print "connection succsess"
    #     print result
    # else:
    #     print "connection failed"



    

# Start process
if __name__ == '__main__':
    main()