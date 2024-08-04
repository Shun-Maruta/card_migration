import glob
import config
import os

FOLDER_PATH = './test-img'
API_KEY = config.API_KEY


# for file in glob.glob(f"{FOLDER_PATH}/*.{t}"):
#     print(file)


types = ('jpg', 'png')
files = []
for t in types:
    files += glob.glob(f"{FOLDER_PATH}/*.{t}")

for file_path in files:
    print(file_path)
    print(os.path.splitext(os.path.basename(file_path))[0])

# filepath = './dir/subdir/filename.ext'

# basename_without_ext = os.path.splitext(os.path.basename(filepath))[0]
# print(basename_without_ext)
