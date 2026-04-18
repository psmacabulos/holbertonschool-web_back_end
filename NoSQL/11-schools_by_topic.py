#!/usr/bin/env python3
"""Returns a list of schools"""


def schools_by_topic(mongo_collection, topic):
    """Find the school that offers Python"""
    return mongo_collection.find({"topics": topic})
