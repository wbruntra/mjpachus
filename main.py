import os

import jinja2
import webapp2

import logging

from config import config
from photos import photolists

styles = {
    "default": {"template": "photos.html"},
    "mosaic": {"template": "mosaic.html"},
    "fotorama": {"template": "fotorama.html"},
    "galereya": {"template": "galereya.html"},
    "flip": {"template": "flip.html"},
    "justified": {"template": "justified.html"}
}

template_dir = os.path.join(os.path.dirname(__file__), 'templates')
jinja_env = jinja2.Environment(loader=jinja2.FileSystemLoader(template_dir),
                               autoescape=False)

def render_str(template, **params):
    t = jinja_env.get_template(template)
    return t.render(params)


class Handler(webapp2.RequestHandler):
    def write(self, *a, **kw):
        self.response.out.write(*a, **kw)

    def render(self, template, **kw):
        self.response.out.write(render_str(template, **kw))

    def initialize(self, *a, **kw):
        webapp2.RequestHandler.initialize(self, *a, **kw)
        if self.request.url.endswith('.json'):
            self.format = 'json'
        else:
            self.format = 'html'


class MainHandler(Handler):
    def get(self, language):
        if language != None:
            template = "home-english.html"
        else:
            template = "home-spanish.html"
        covers = ["1/thumbs/IMG_9212.JPG",
                  "2/thumbs/IMG_7883.JPG",
                  "3/thumbs/IMG_0484.JPG"]
        self.render(template, covers=covers)


class GalleryHandler(Handler):
    def get(self, collection):
        photos = photolists[collection]
        self.render("fotorama.html", collection=collection, photos=photos)

# class GalleryHandler(Handler):
#     def get(self, style):
#         if not style:
#             style = "default"
#         template = styles[style]["template"]
#         photos = config['photos']
#         self.render(template, photos = photos)


app = webapp2.WSGIApplication([
    ('/(home/en)?', MainHandler),
    ('/gallery/?(.*)', GalleryHandler)
], debug=True)
