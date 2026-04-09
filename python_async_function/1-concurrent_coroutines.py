#!/usr/bin/env python3
"""Task 1: Execute multiple coroutines concurrently"""


import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Method to ran wait_random n times and return sorted delays"""
    delays = [wait_random(max_delay) for _ in range(n)]
    results = await asyncio.gather(*delays)
    return sorted(results)
