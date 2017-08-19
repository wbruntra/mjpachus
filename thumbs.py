from __future__ import print_function
import os
import sys
from PIL import Image


def files(path):
    for file in os.listdir(path):
        if os.path.isfile(os.path.join(path, file)):
            yield file


size = (256, 256)

folders = ["1", "2", "3"]
base_dir = os.path.join(
    os.getcwd(),
    os.path.dirname(__file__),
    'public',
    'img',
    'portfolio')


print(base_dir)
for folder in folders:
    images = files(os.path.join(base_dir, folder))
    thumbs_dir = os.path.join(base_dir, folder, 'thumbs')
    if not os.path.exists(thumbs_dir):
        os.makedirs(thumbs_dir)
    for infile in images:
        filepath = os.path.join(base_dir, folder, infile)
        try:
            im = Image.open(filepath)
            im.thumbnail(size)
            im.save(os.path.join(thumbs_dir, infile), "JPEG")
        except IOError:
            print("cannot create thumbnail for", infile)
