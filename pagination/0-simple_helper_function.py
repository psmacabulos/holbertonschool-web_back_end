#!/usr/bin/env python3
"""Module to create a simple helper function"""

from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Method to return the range of idex of
    sample pagination parameters"""

    start: int = (page - 1) * page_size
    end: int = page * page_size
    return (start, end)
