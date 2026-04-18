#!/usr/bin/env python3
"""Module for updating topics in MongoDB"""


def update_topics(mongo_collection, name, topics):
    """Update all topics of school documents based on name"""
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )