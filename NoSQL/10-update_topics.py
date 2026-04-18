#!/bin/usr/env python3
"""// 10-update_topics"""


def update_topics(mongo_collection, name, topics):
    """Update topics of a school document"""
    mongo_collection.update_one(
        {"name": name},
        {"$set": {"topics": topics}}
    )
