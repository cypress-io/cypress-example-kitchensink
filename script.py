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
        if (i + 1) % n == index % n:
            result.append(value)

    return result

filename = "/app/redefine/1.txt"
index = int(os.environ["BUILDKITE_PARALLEL_JOB"])
n = int(os.environ["BUILDKITE_PARALLEL_JOB_COUNT"])
lst = get_values(filename,index,n)
out = ",".join(lst)
print(f"\"{out}\"")