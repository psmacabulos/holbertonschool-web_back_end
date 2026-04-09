#!/usr/bin/env python3
"""Task 4: Ran an asyncio Task"""


import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Method to ran task_wait_random n times and return sorted delays"""
    delays = [task_wait_random(max_delay) for _ in range(n)]
    results = await asyncio.gather(*delays)
    return sorted(results)
