#!/usr/bin/env python3
"""Module that provides a function to display stats
 about Nginx logs stored in MongoDB."""


from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017/')


def log_stats():
    """Display the logs of Nginx in MongoDB"""
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    log_db = client.logs
    log_collection = log_db.nginx
    logs = log_collection.count_documents({})

    print(f"{logs} logs")
    print("Methods:")

    for method in methods:
        method_logs = log_collection.count_documents({"method": method})
        print(f"\tmethod {method}: {method_logs}")

    get_status = log_collection.count_documents(
        {"method": "GET", "path": "/status"}
    )
    print(f"{get_status} status check")


if __name__ == "__main__":
    log_stats()
