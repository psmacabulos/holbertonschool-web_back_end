#!/usr/bin/env python3
"""Module to use Async Comprehensions"""


async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> float:
    """Method to consume stream from async_generator and return it"""
    return [i async for i in async_generator()]
