import os

def get_values(filename, index, n):
    values = []
    with open(filename, 'r') as file:
        lines = file.readlines()
        for line in lines:
            line = line.strip()
            if line:  # Ignore empty lines
                values.append(line)

    result = []
    for i, value in enumerate(values):
        if (i + 1) % n == index+1 % n:
            result.append(value)

    return result

filename = "/app/redefine/1.txt"
index = int(os.environ["BUILDKITE_PARALLEL_JOB_COUNT"])
n = int(os.environ["BUILDKITE_PARALLEL_JOB"])
lst = get_values(filename,index,n)
print(",".join(lst))