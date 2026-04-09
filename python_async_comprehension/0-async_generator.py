#!/usr/bin/env python3
"""Module to create an Async Generator"""


import asyncio
from typing import Generator
import random


async def async_generator() -> Generator[float, None, None]:
    """Yield 10 random floats asynchronously with a second delay between"""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
