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
    print("IPs:")
    all_logs = list(log_collection.find({}))
    ip_counts = {}

    for i in all_logs:
        ip = i['ip']
        ip_counts[ip] = ip_counts.get(ip, 0) + 1

    sorted_ips = (sorted(ip_counts.items(), key=lambda item:
                         item[1], reverse=True)[:10])
    for ip in sorted_ips:
        print(f"\t{ip[0]}: {ip[1]}")


if __name__ == "__main__":
    log_stats()
