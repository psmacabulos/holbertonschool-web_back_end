#!/usr/bin/env python3
"""Task 0: Basic async syntax"""


import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """Method to have random delay between 0 - 10 s"""
    delay: float = random.uniform(0, max_delay)
    asyncio.sleep(delay)
    return delay
