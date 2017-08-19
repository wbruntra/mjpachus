import os, sys
import json

def files(path):
    for file in os.listdir(path):
        if os.path.isfile(os.path.join(path, file)):
            yield file

size = (256, 256)

folders = ["1","2","3"]
base_dir = os.path.join(os.getcwd(),os.path.dirname(__file__),'public','img',
    'portfolio')

o = {}

for folder in folders:
    images = list(files(os.path.join(base_dir,folder)))
    o[folder] = images

with open('photos.py','w') as f:
    f.write(json.dumps(o))
