#!/usr/bin/env python3
"""Use aggregate functions of pymongo"""


def top_students(mongo_collection):
    """Return all students sorted by average score"""
    # get all the students
    students = list(mongo_collection.find())
    newStudents = []
    for student in students:
        topics = student['topics']
        score = 0
        for topic in topics:
            score += topic['score']

        averageScore = score / len(topics)
        student["averageScore"] = averageScore
        newStudents.append(student)

    return sorted(
        newStudents, key=lambda student: student['averageScore'],
        reverse=True)
