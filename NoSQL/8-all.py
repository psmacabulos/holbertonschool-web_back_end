#!/usr/bin/env python3
"""Module to list all documents using Python"""


from pymongo import MongoClient


def list_all(mongo_collection):
    """Method to show documents from mongo_collection"""
    return mongo_collection.find()
