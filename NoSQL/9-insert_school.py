#!/usr/bin/env python3
"""Module to use pymongo in inserting a document"""


def insert_school(mongo_collection, **kwargs):
    """Method to insert into a collection """
    return mongo_collection.insert_one(kwargs).inserted_id
