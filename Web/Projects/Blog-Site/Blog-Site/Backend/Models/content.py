# backend/models/content.py
from sqlalchemy import Column, Integer, String, DateTime, Text
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class BlogPost(Base):
    __tablename__ = "blog_posts"
    
    id = Column(Integer, primary_key=True)
    title = Column(String(200))
    content = Column(Text)
    author = Column(String(100))
    created_at = Column(DateTime)
    category = Column(String(50))
    tags = Column(String(200))

class Podcast(Base):
    __tablename__ = "podcasts"
    
    id = Column(Integer, primary_key=True)
    title = Column(String(200))
    description = Column(Text)
    audio_url = Column(String(500))
    duration = Column(Integer)  # in seconds
    published_date = Column(DateTime)
