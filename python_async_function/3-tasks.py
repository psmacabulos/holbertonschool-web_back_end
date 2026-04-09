#!/usr/bin/env python3
"""Task 3: Create asyncio tasks"""


import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """Method to return asynchio task"""
    return asyncio.create_task(wait_random(max_delay))
