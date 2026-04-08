#!/usr/bin/env python3
"""Module converting to key-value tuple."""


from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Method  to return  a tuple of string and square of a float"""
    return (k, v ** 2)
